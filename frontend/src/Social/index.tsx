import { useEffect, useState } from 'react';
import NavBar from '../Nav';
import {BLUE, DARK_PRIMARY_COLOR, LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR} from '../utils/colors';
import { axiosRequest } from '../utils/apis';
import { devFriends } from './devData';
import {GiWateringCan} from 'react-icons/gi';
import {PiButterflyDuotone} from 'react-icons/pi';

enum GardenStatus {
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
    const [chats, setChats] = useState<Chat[]>([]); 

    const fetchFriends = async () => {
        const f = await axiosRequest('http://localhost:8080/friends', "GET", {userId: null}, devFriends);
        setFriends(f)
    }

    useEffect(() => {
        fetchFriends()
    }, [])
    return (
        <div className="w-full absolute left-0 top-0 bottom-0" style={{backgroundColor: PRIMARY_COLOR}}>
            <NavBar />
            <div className="grid grid-cols-9 mx-6">
                <div className="col-span-7 mr-8">
                    <div className="rounded-3xl mt-4 p-4 h-full mb-2" style={{backgroundColor: LIGHT_COLOR}}>
                        <div className="w-full text-right mb-2">
                            <button className="text-white rounded-lg p-2" style={{backgroundColor: DARK_PRIMARY_COLOR}}>+ Add Friends</button>
                        </div>
                        {friends.map((friend) => {
                            return (
                                <div key={friend.id} className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        {/* <img src={friend.icon} className="w-16 mr-3" alt="" /> */}
                                        <PiButterflyDuotone size={42} />
                                        <span className="text-xl ml-3">{friend.name}</span>
                                    </div>
                                    
                                    <span className="text-xl">Garden Status: {friend.status}</span>
                                    <span className="text-xl">Streak: 8 days</span>
                                    <button className="w-16"><GiWateringCan size={28} className="rounded-lg w-full" style={{backgroundColor: BLUE}}/></button>
                                </div>
                            )
                        })}
                    </div>
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