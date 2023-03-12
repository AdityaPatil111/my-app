import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import './Chat.css'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios';

export default function Chat({messages}) {

   const [input,setInput]=useState("");
   const sendMessage = async(e)=>{
      e.preventDefault();

      await axios.post("/api/v1/messages/new",{
         message:input,
         name:"Aditya",
         timestamp:"just now",
         received:true,
      });
      setInput("");
   };

  return (
     <div className='chat'>
        <div className='chat_header'>
            <Avatar/>

            <div className='chat_headerInfo'>
                <h3>Room name</h3>
                <p>Last seen at...</p>
            </div>

            <div className='chat_headerRight'>
                <IconButton>
                   <SearchIcon/> 
                </IconButton>

                <IconButton>
                   <AttachFileIcon/> 
                </IconButton>

                <IconButton>
                   <MoreVertIcon/> 
                </IconButton>
            </div>
        </div>
        <div className='chat_body'>
         {messages.map((message)=>(
             <p className={`chat_message ${message.received && "chat_reciever"}`}>
             <span className='chat_name'>{message.name}</span>
             {message.message}
             <span className='chat_timestamp'>{message.timestamp}</span>
          </p>

         ))}

</div>


{/*            

            <p className='chat_message chat_reciever'>
               <span className='chat_name'>Sonny</span>
               This is message
               <span className='chat_timestamp'>{new
               Date().toUTCString()}</span>
            </p>

            <p className='chat_message'>
               <span className='chat_name'>Sonny</span>
               This is message
               <span className='chat_timestamp'>{new
               Date().toUTCString()}</span>
            </p> */}
      

        <div className='chat_footer'>
               <InsertEmoticonIcon/>
               <form>
                  <input value={input} onChange={e=>setInput(e.target.value)}type="text" placeholder='Type a message'/>
                  <button onClick={sendMessage} type="submit">Send a message</button>
               </form>
               <MicIcon/>
        </div>
    </div>

  )
}
