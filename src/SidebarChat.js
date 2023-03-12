import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'

export default function SidebarChat() {
  return (
    <div className='sidebarChat'>
      <Avatar/>
      <div className='sidebarChat_Info'>
            <h2>Room Name</h2>
            <p>THis is last name</p>
      </div>
    </div>
  )
}
