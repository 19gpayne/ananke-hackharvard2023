import { useEffect, useState } from 'react';
import moment from 'moment';
import NavBar from '../Nav';
import {LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR} from '../utils/colors';
import { gardenReportData } from './devData';
import { axiosRequest } from '../utils/apis';
import { dayToPlant, idToPlants, strengthToColor } from '../utils/plants';
import { capitalizeFirstLetter } from '../utils/functions';
import ActionButton from '../Components/Buttons/ActionButton';
import Modal from '../Components/Modal';

type WorkoutReport = {
    id: number,
    date: string,
    Intensity: number,
}

type WorkoutChoice = {
    Distance: number;
    Pace: number;
}

type WorkoutSuggestions = {
    EASY: WorkoutChoice;
    MEDIUM: WorkoutChoice;
    HARD: WorkoutChoice;
}

export default function Homepage() {
    const [report, setReport] = useState<WorkoutReport[]>([]);
    const [choice, setChoice] = useState<WorkoutChoice[]>([]);
    const [suggestions, setSuggestions] = useState<WorkoutSuggestions>();
    const [today, setToday] = useState<WorkoutReport | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        const apiUrl = 'https://abda-67-134-204-12.ngrok.io/get_json'; 
        const choiceUrl = 'https://abda-67-134-204-12.ngrok.io/get_options';
        setReport([...gardenReportData, {id: 6, date: moment().format('YYYY-MM-DD'), Intensity: 0}]);
        axiosRequest(apiUrl, "GET", {}, gardenReportData)
          .then((response: any) => {
            console.log(JSON.parse(response))
            if (JSON.parse(response) !== undefined) {
                setReport([...gardenReportData, {id: 6, ...JSON.parse(response)}]);
            } 
          })
          .catch((error: any) => {
            console.error('Error fetching JSON data:', error);
          });
          axiosRequest(choiceUrl, "GET", {}, gardenReportData)
          .then((response: any) => {
            console.log(JSON.parse(response))
            if (JSON.parse(response) !== undefined) {
                setSuggestions(response);
            }
            console.log(response);
          })
          .catch((error: any) => {
            console.error('Error fetching JSON data:', error);
          });
      }, []);
    
    return (
        <div className="w-full absolute left-0 top-0 bottom-0" style={{backgroundColor: PRIMARY_COLOR}}>
            <div className="grid grid-cols-9 mx-6">
                <div className="col-span-7 mr-8">
                    <NavBar />
                    <div className="flex flex-col justify-between" style={{width: 'calc(100% - 32px)'}}>
                        <div className="flex flex-row justify-around">
                            <div className="w-1/5 max-h-[15rem]">
                                <img src={idToPlants(1, report[0]?.Intensity ?? 0)} alt="Image 2" />
                            </div>
                            <div className="w-1/5 max-h-[15rem]">
                                <img src={idToPlants(0, report[2]?.Intensity ?? 0)} alt="Image 3" />
                            </div>
                            <div className="w-1/5 max-h-[15rem]">
                                <img src={idToPlants(2, report[4]?.Intensity ?? 0)} alt="Image 4" />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-end">
                            <div className="w-[14%]">
                                <img src={idToPlants(3, report[1]?.Intensity ?? 0)} alt="Image 5" />
                            </div>

                            <div className="w-[14%]">
                                <img src={idToPlants(5, report[3]?.Intensity ?? 0)} alt="Image 6" />
                            </div>

                            <div className="w-[14%]">
                                <img src={idToPlants(4, report[5]?.Intensity ?? 0)} alt="Image 7" />
                            </div>

                            <div className="w-[14%]">
                                <img src={idToPlants(6, report[6]?.Intensity ?? 0)} alt="Image 6" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="rounded-3xl p-3 text-center mb-2 mt-4" style={{backgroundColor: LIGHT_COLOR}}>
                        <b className='text-xl'>Today's Bloom</b>
                        <div className="grid grid-cols-3 justify-items-center mt-2">
                            <p className="col-span-2">
                                {today ? 
                                    <>
                                        You've been working! <b>{capitalizeFirstLetter(dayToPlant(moment().day()))}</b> plant is sprouting
                                    </>
                                    :
                                    <>Nothing sprouting yet! Get out there to grow your <b>{dayToPlant(moment().day())}</b> plant</>
                                }
                            </p>
                            <img src={idToPlants(moment().day(), -1)} className="w-[3rem] h-[3rem] rounded"/>
                        </div>
                        <div className="w-full mt-2"><ActionButton label={"See Workouts"} onClick={() => {setShowModal(true)}} /></div>
                    </div>
                    <>
                        <div className="rounded-t-3xl p-3 text-white text-center text-2xl" style={{backgroundColor: SECONDARY_COLOR}}>
                            <b>Garden Report</b>
                        </div>
                        <div className="rounded-b-3xl p-3 pt-5" style={{backgroundColor: LIGHT_COLOR}}>
                            {report.map(d => {
                                return (
                                    <div key={d.id} className="flex gap-2 ml-3 mb-3 items-center">
                                        <img src={idToPlants(moment(d.date).day(), -1)} className="w-[3rem] h-[3rem] p-1 rounded" style={{border: `3px solid ${strengthToColor(d.Intensity)}`}}/>
                                        {moment(d.date).format('dddd, MMM Do')}
                                    </div>
                                )
                            })}
                        </div>
                    </>
                </div>
                {showModal && 
                    <Modal onClose={() => setShowModal(false)}>
                        <div>
                        {suggestions ? 
                            <div>
                            <b>{suggestions.EASY?.Distance}</b>
                            <b>{suggestions.EASY?.Pace} </b>
                            </div> :
                            <div>

                            </div>
                        }
                        </div>
                    </Modal>
                }
            </div>
        </div>
    );
}