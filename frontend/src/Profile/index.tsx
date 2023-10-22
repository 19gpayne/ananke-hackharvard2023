import NavBar from "../Nav";
import { DARK_PRIMARY_COLOR, LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "../utils/colors";
import fitbit from '../assets/fitbit.png'
import apple from '../assets/apple.png'
import { FaTrash} from 'react-icons/fa';
import ActionButton from "../Components/Buttons/ActionButton";

export default function Profile() {
    return (
            <div className="w-full absolute left-0 top-0 bottom-0" style={{backgroundColor: PRIMARY_COLOR}}>
                <div className="grid grid-cols-9 mx-6">
                    <div className="col-span-7 mr-8">
                        <NavBar />
                        <div className="rounded-3xl mt-4 p-8 h-full mb-2" style={{backgroundColor: LIGHT_COLOR, height: 'calc(100vh - 112px)'}}>
                            <div className="flex">
                                <div className="rounded-lg text-white text-7xl text-center w-min p-10 mr-3" style={{backgroundColor: SECONDARY_COLOR}}>
                                    GP
                                </div>
                                <p className="text-4xl mt-8">
                                    <b>Gwen Payne</b>
                                    <br />
                                    example@email.com
                                </p>
                            </div>
                            <p className="text-2xl mt-8">About Me</p>
                            <textarea className="w-full rounded-3xl p-4 mt-4" rows={7} >Fitness and nature are my passions, and I love to combine them in my daily life. I'm dedicated to maintaining a healthy, active lifestyle through regular workouts and outdoor adventures. Whether I'm hitting the gym or exploring the beauty of nature, I find joy and balance in both. Follow along as I share my journey of fitness and my love for the great outdoors.</textarea>
                            <div className="flex justify-center gap-4 mt-4">
                                <ActionButton label={"Reset Password"} onClick={() => {}} />
                                <ActionButton label={"Logout"} onClick={() => {}} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="rounded-t-3xl p-3 text-white text-center text-2xl mt-4" style={{backgroundColor: SECONDARY_COLOR}}>
                            <b>Wearables</b>
                        </div>
                        <div className="rounded-b-3xl px-3 py-5" style={{backgroundColor: LIGHT_COLOR, height: 'calc(100vh - 84px)'}}>
                            <div className="flex justify-between items-center m-2">
                                <img src={fitbit} className="w-10"/>
                                <div>
                                    <b className="text-xl font-medium">Fitbit Inspire 2</b>
                                    <br />
                                    <p className="text-base font-normal"> Last synced 10/22 </p>
                                </div>
                                <FaTrash size={21}/>
                            </div>
                            <br />
                            <div className="flex justify-between items-center m-2">
                                <img src={apple} className="w-10"/>
                                <div>
                                    <b className="text-xl font-medium">Apple Watch 6</b>
                                    <br />
                                    <p className="text-base font-normal"> Last synced 10/21 </p>
                                </div>
                                <FaTrash size={21}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     );
}