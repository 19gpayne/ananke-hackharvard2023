import { useEffect, useState } from 'react';
import moment from 'moment';
import NavBar from '../Nav';
import {LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR} from '../utils/colors';
import { gardenReportData } from './devData';
import { axiosRequest } from '../utils/apis';
import { idToPlants, strengthToColor } from '../utils/plants';
import pottedPlant1 from '../assets/pottedPlant1.svg';
import hangingPlant1 from '../assets/hangingPlant1.svg';

type WorkoutReport = {
    id: number,
    date: string,
    workoutStrength: number,
}

export default function Homepage() {
    const userId = "";
    const [report, setReport] = useState<WorkoutReport[]>([]);
    const getReport = async (id: string) => {
        const reportData = await axiosRequest(
            'http://localhost:8080/getWorkoutData', 
            "GET", 
            {userId: userId, startDate: new Date(), endDate: new Date(2023, 10, 28)}, 
            gardenReportData
        )
        setReport(reportData);
    }

    useEffect(() => {
        getReport(userId)
    }, [userId])
    
    return (
        <div className="w-full absolute left-0 top-0 bottom-0" style={{backgroundColor: PRIMARY_COLOR}}>
            <NavBar />
            <div className="grid grid-cols-9 mx-6">
                <div className="col-span-7 mr-8">
                    <div className="flex flex-col justify-between" style={{height: "89vh"}}>
                        <div className="flex flex-row justify-around">
                            <div className="w-1/5">
                                <img src={idToPlants(0, 1)} alt="Image 2" />
                            </div>
                            <div className="w-1/5">
                                <img src={idToPlants(1, 1)} alt="Image 3" />
                            </div>
                            <div className="w-1/5">
                                <img src={idToPlants(0, 1)} alt="Image 4" />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="w-[14%]">
                                <img src={idToPlants(3, 1)} alt="Image 5" />
                            </div>

                            <div className="w-[14%]">
                                <img src={idToPlants(3, 1)} alt="Image 6" />
                            </div>

                            <div className="w-[14%]">
                                <img src={idToPlants(3, 1)} alt="Image 7" />
                            </div>

                            <div className="w-[14%]">
                                <img src={idToPlants(3, 1)} alt="Image 6" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 mt-[-8.5vh]">
                    <div className="rounded-3xl p-3 text-center mb-6" style={{backgroundColor: LIGHT_COLOR}}>
                        <b>Today's Bloom</b>
                        <br /><br />
                        <div>Nothing sprouting yet, get some sunshine!</div>
                    </div>
                    <>
                        <div className="rounded-t-3xl p-3 text-white text-center" style={{backgroundColor: SECONDARY_COLOR}}>
                            <b>Garden Report</b>
                        </div>
                        <div className="rounded-b-3xl p-3 pt-5" style={{backgroundColor: LIGHT_COLOR}}>
                            {report.map(d => {
                                return (
                                    <div key={d.id} className="flex gap-2 ml-3 mb-4 items-center">
                                        <img src={idToPlants(d.id, -1)} className="w-[3rem] h-[3rem] rounded" style={{border: `3px solid ${strengthToColor(d.workoutStrength)}`}}/>
                                        {moment(d.date).format('dddd, MMM Do')}
                                    </div>
                                )
                            })}
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
}