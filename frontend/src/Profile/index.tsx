import NavBar from "../Nav";
import { DARK_PRIMARY_COLOR, LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "../utils/colors";
import fitbit from '../assets/fitbit.png'
import apple from '../assets/apple.png'
import { FaTrash} from 'react-icons/fa';

export default function Profile() {
    return (
            <div className="w-full absolute left-0 top-0 bottom-0" style={{backgroundColor: PRIMARY_COLOR}}>
                <NavBar />
                <div className="grid grid-cols-9 mx-6">
                    <div className="col-span-5 mr-12">
                        <div className="rounded-3xl mt-4 p-4 h-full mb-2 columns-3" style={{backgroundColor: LIGHT_COLOR}}>
                            <div className="col-span-1">
                                <div className="w-10 h-10 rounded"  style={{backgroundColor: PRIMARY_COLOR}}>
                                </div>
                            </div>
                            <div className="col-span-2">

                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="rounded-t-3xl p-3" style={{height: 'calc(100vh - 84px)'}}>
                            <b className="text-orange text-left text-2xl">My Wearables</b>
                            <div className="rounded-full px-3 py-5 grid grid-cols-3 mt-3 mb-7 justify-items-center" style={{backgroundColor: LIGHT_COLOR, height: 'calc((100vh - 84px)/6)'}}>
                            <div className="mt-4 mr-20 col-span-1">
                                <img src={fitbit} className="w-20"/>
                            </div>
                            <b className="col-span-1 text-xl mt-7 mr-9 font-medium">
                                Fitbit Inspire 2 <br />
                                <b className="text-base font-normal"> Last synced 10/22 </b>
                            </b>
                            <button className="mt-8 ml-20 col-span-1">
                                <FaTrash size={40}/>
                            </button>
                            </div>
                            <div className="rounded-full px-3 py-5 grid grid-cols-3 mt-3 justify-items-center" style={{backgroundColor: LIGHT_COLOR, height: 'calc((100vh - 84px)/6)'}}>
                            <div className="mt-4 mr-20 col-span-1">
                                <img src={apple} className="w-20"/>
                            </div>
                            <b className="col-span-1 text-xl mt-7 font-medium">
                                Apple Watch Series 9 <br />
                                <b className="text-base font-normal"> Last synced 10/8 </b>
                            </b>
                            <button className="mt-8 ml-20 col-span-1">
                                <FaTrash size={40}/>
                            </button>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
     );
}