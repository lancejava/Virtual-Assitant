import Logo from '../assets/VILogo.png';
import React, {useState} from 'react';
import '../index.css';
"use client";



//const key = process.env.API_KEY


const chat = () => {
    const [message , setMessage] = useState('')
    const [allMessage , setAllMessage] = useState([])

    const sendMessage = async () =>{
        console.log(message)
    }
    return (
        <div className="bg-[#2B2D35] flex border flex-col h-screen w-screen items-center justify-center">  
            {/* Landing Page / Top Section*/}
            <div className='h-3/4 w-1/2 border flex p-2 justify-between flex-col items-center'>
                <div className='flex w-full text-lg h-full justify-center items-center flex-col gap-6'>
                    <img src={Logo} alt="Virtual Assistant" className="h-24 w-24" />
                    <h1 className='text-center flex text-xl text-white'>How can I help you today?</h1>
                </div>
                {/* Bottom Section */}
                <div className='gap-10 w-full'>
                    <div className="flex w-full p-4 justify-center items-center gap-2  bg-#2B2D35">
                        <input className='rounded-full items-center flex p-3 justify-between w-4/5 bg-transparent border border-1 border-gray' type='text' placeholder='Message your Virtual Assistant...' 
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}/>
                        <svg onClick={sendMessage} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-12 h-12 bg-transparent rounded-full hover:cursor-pointer hover:shadow-lg transform hover:scale-110 transition duration-300 ease-in-out">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <p className='text-center text-white text-xs'>I'm only a robot, I too can make mistakes.</p>
                </div>
            </div>
        </div>
    )
}
 
export default chat