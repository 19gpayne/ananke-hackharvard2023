import { useEffect, useState } from 'react';
import NavBar from '../Nav';
import {BLUE, DARK_PRIMARY_COLOR, LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR} from '../utils/colors';
import { devChats, devFriends } from './devData';
import {GiWateringCan} from 'react-icons/gi';
import { getInitials } from '../utils/functions';
import ActionButton from '../Components/Buttons/ActionButton';

export enum GardenStatus {
    DEAD = 'dead',
    GROWING = 'growing',
    BLOOMING = 'blooming',
    THRIVING = 'thriving',
}

type Friend = {
    id: string;
    name: string;
    icon: string;
    status: GardenStatus;
}

type Chat = {
    id: string;
    sender: string;
    datetime: string;
    message: string;
}

export default function Social() {   
    const [friends, setFriends] = useState<Friend[]>([]);
    const [chats, setChats] = useState<Chat[]>(devChats as Chat[]); 

    const fetchFriends = async () => {
        setFriends(devFriends as Friend[])
    }

    useEffect(() => {
        fetchFriends()
    }, [])
    return (
        <div className="w-full absolute left-0 top-0 bottom-0" style={{backgroundColor: PRIMARY_COLOR}}>
            <div className="grid grid-cols-9 mx-6">
                <div className="col-span-7 mr-8">
                    <NavBar />
                    <div className="rounded-3xl mt-4 p-4 mb-2" style={{backgroundColor: LIGHT_COLOR, height: 'calc(100vh - 112px)'}}>
                        <div className="w-full text-right mb-2">
                            <ActionButton label="+ Add Friends" onClick={() => {}} />
                        </div>
                        {friends.map((friend) => {
                            return (
                                <div key={friend.id} className="flex justify-between items-center mt-4 p-2 rounded-lg" style={{backgroundColor: 'white'}}>
                                    <div className="flex items-center">
                                        <img src={friend.icon} className="w-16 mr-3" alt="" />
                                        {/* <img src={pinkButterfly} className='w-[8%]' /> */}
                                        <span className="text-xl ml-3 font-medium">{friend.name}</span>
                                    </div>
                                    
                                    <span className="text-base">Garden Status: {friend.status}</span>
                                    <span className="text-base">Streak: 8 days</span>
                                    <button className="w-16"><GiWateringCan size={28} className="rounded-lg w-full" style={{backgroundColor: BLUE}}/></button>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="rounded-t-3xl p-3 text-white text-center text-2xl mt-4" style={{backgroundColor: SECONDARY_COLOR}}>
                        <b>Blossom Chats</b>
                    </div>
                    <div className="rounded-b-3xl px-3 py-5 overflow-scroll flex flex-col gap-4" style={{backgroundColor: LIGHT_COLOR, height: 'calc(100vh - 84px)'}}>
                        {chats.map((chat) => {
                            return (
                                <div className="rounded-lg bg-white p-3">
                                    <span className="rounded text-white text-center w-min p-1 mr-3" style={{backgroundColor: SECONDARY_COLOR}}>{getInitials(chat.sender)}</span>
                                    <span className="font-medium">{chat.sender}</span>
                                    <p className="mt-3">{chat.message}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}