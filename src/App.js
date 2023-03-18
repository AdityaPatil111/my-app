import React,{useState} from 'react';
import './App.css';

import Sidebar from './Sidebar';
import Chat from './Chat';
import { useEffect } from 'react';
import Pusher from "pusher-js";
import axios from './axios';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App(){
  const [{user}]=useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
              <Route exact path="/" element={<Chat />} />
            </Routes>
          </Router>
        </div>
      )
      }
    </div>
  );
};

export default App;
