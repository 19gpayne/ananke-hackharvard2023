import NavBar from "../Nav";
import { DARK_PRIMARY_COLOR, LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "../utils/colors";
import fitbit from '../assets/fitbit.png'
import apple from '../assets/apple.png'
import { FaTrash} from 'react-icons/fa';

export default function Profile() {
    return (
            <div className="w-full absolute left-0 top-0 bottom-0" style={{backgroundColor: PRIMARY_COLOR}}>
                <div className="grid grid-cols-9 mx-6">
                    <div className="col-span-7 mr-12">
                        <NavBar />
                        <div className="rounded-3xl mt-4 p-4 h-full mb-2" style={{backgroundColor: LIGHT_COLOR, height: 'calc(100vh - 112px)'}}>

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