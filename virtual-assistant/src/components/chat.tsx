import Logo from '../assets/VILogo.png';
import nouser from '../assets/human.png';
import React, {useState} from 'react';
import '../index.css';
"use client";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const chat = () => {
    const [message , setMessage] = useState('')
    const [allMessages , setAllMessages] = useState<any[]>([])

    const sendMessage = async () =>{
        //console.log(message)
        let url = "https://api.openai.com/v1/chat/completions"

        let token =`Bearer ${apiKey}`
        let model = 'gpt-3.5-turbo'

        let messagesToSend = [
            ...allMessages,
            {
                role: 'user',
                content: message
            }
        ]

        let res = await fetch(url, {
            method: 'POST',
            headers:{
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: model,
                messages: messagesToSend
            })
        })
        let resjson = await res.json()
        if(resjson){

            let newAllMessages = [
                ...messagesToSend,
                resjson.choices[0].message
            ]
            setAllMessages(newAllMessages)
            setMessage('')
        }

    }
    return (
        <div className="bg-[#2B2D35] flex flex-col h-screen w-screen items-center justify-center">  
            {/* Landing Page / Top Section*/}
            <div className='h-full w-full flex p-2 justify-between flex-col items-center'>
                <div>
                    <h1 className='text-white text-xl font-semibold'>Virtual Assistant</h1>
                </div>
                {
                    allMessages.length > 0 ?
                   // Chat
                <div className='px-3 h-full w-full flex flex-col gap-5 overflow-auto'> 
                   {allMessages.map((msg, index) => (
                       <div className='flex gap-3' key={index}>
                           <div className="h-12 w-12 overflow-hidden rounded-full">
                               <img className="object-cover h-full w-full" src={msg.role === 'user' ? nouser : Logo} alt="" />
                           </div>
                           <div className='flex flex-col gap-2' style={{ flex: '1' }}>
                               <h2 className='text-white text-md font-semibold mt-1'>{msg.role === 'user' ? 'You' : 'Virtual Assistant' }</h2>
                               <p className='text-white text-sm max-w-full overflow-hidden'>{msg.content}</p>
                           </div>
                       </div>
                   ))}
               </div>
               
               
                    :
                    // No Chat
                    <div className='flex w-full text-lg h-full justify-center items-center flex-col gap-6'>
                        <div className="h-20 w-20 overflow-hidden rounded-full">
                            <img src={Logo} alt="Virtual Assistant" className="object-cover h-full w-full" />
                        </div>
                        <h1 className='text-center flex text-xl text-white'>How can I help you today?</h1>
                    </div>
                }
                {/* Bottom Section */}
                <div className='gap-10 w-full'>
                    <div className="flex w-full justify-center items-center gap-2  bg-#2B2D35">
                        <div className='rounded-full items-center flex p-3 justify-between w-4/5 bg-transparent border border-1 border-gray'>
                            <input className='w-full border-0 outline-0 text-white bg-transparent' type='text' placeholder='Message your Virtual Assistant...' 
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            onKeyDown={(e) => {
                                // Check if Enter key is pressed
                                if (e.key === 'Enter') {
                                  sendMessage(); // Call sendMessage function
                                }
                              }}/>
                        </div>
                        <svg onClick={sendMessage} 
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-12 h-12 bg-transparent rounded-full hover:cursor-pointer hover:shadow-lg transform hover:scale-110 transition duration-300 ease-in-out">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <p className='text-center pt-2 text-white text-xs'>I'm only a robot, I too can make mistakes.</p>
                </div>
            </div>
        </div>
    )
}
 
export default chat