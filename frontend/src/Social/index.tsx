import { useState } from 'react';
import NavBar from '../Nav';
import {LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR} from '../utils/colors';

type Chat = {
    id: string;
    sender: string;
    datetime: string;
    message: string;
}

export default function Social() {   
    const [chats, setChats] = useState<Chat[]>([]); 
    return (
        <div className="w-full absolute left-0 top-0 bottom-0" style={{backgroundColor: PRIMARY_COLOR}}>
            <NavBar />
            <div className="grid grid-cols-9 mx-6">
                <div className="col-span-7 mr-8">

                </div>
                <div className="col-span-2 mt-[-8.5vh]">
                    <div className="rounded-t-3xl p-3 text-white text-center" style={{backgroundColor: SECONDARY_COLOR}}>
                        <b>Blossom Chats</b>
                    </div>
                    <div className="rounded-b-3xl px-3 py-5 overflow-scroll flex flex-col gap-4" style={{backgroundColor: LIGHT_COLOR, height: 'calc(100vh - 84px)'}}>
                        {[1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9].map((chat) => {
                            return (
                                <div className="rounded-lg bg-white p-3">
                                    <span className="rounded text-white text-center w-min p-1 mr-1" style={{backgroundColor: SECONDARY_COLOR}}>GP</span>
                                    <span>Gwen P.</span>
                                    <p className="mt-3">Sending lots of love!!</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}