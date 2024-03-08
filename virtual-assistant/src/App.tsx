import React, { useState } from 'react';
import './App.css';
import ChatBot from "./components/chat.tsx";


function App() {

  return (
    <div className='bg-gray-800'>
      <ChatBot/>
    </div>
  );
}
export default App