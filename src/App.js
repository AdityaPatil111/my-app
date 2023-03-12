import React,{useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useEffect } from 'react';
import Pusher from "pusher-js";
import axios from './axios';

function App() {
const [messages,setMessages]=useState([]);

  useEffect(()=>{
      axios.get('/api/v1/messages/sync')
      .then((response)=> {
        // console.log(response.data)
        setMessages(response.data);
      })
  },[])

  useEffect(()=>{
    const pusher = new Pusher('6dc3088535a85a56dfee', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',(newMessage)=> {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])

    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };

  },[messages])

  console.log(messages);
  return (

    <div className="App">
      <div className='app-body'>
        <Sidebar/>
        <Chat messages={messages}/>

      </div>
    </div>
  );
}

export default App;
