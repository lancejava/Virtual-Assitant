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
        <div className="bg-gray-800 flex flex-col border h-screen w-screen justify-center">  
            <div className='flex text-lg justify-center items-center flex-col gap-2 border'>
                <img src={Logo} alt="Virtual Assistant" className="h-24 w-24" />
                <h1 className='text-center flex text-24 text-white'>How can I help you today?</h1>
            </div>
            <div className='border'>
                <div className="flex p-4 justify-center items-center  bg-#2B2D35">
                    <input type='text' placeholder='Ask you Virtual Assistant...' 
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}/>
                    <svg onClick={sendMessage} 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 bg-gray p-2 rounded-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>
                <p className='text-center'>I'm only a robot, I too can make mistakes.</p>
            </div>
        </div>
    )
}
 
export default chat