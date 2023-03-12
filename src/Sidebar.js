import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar,IconButton} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

export default function Sidebar() {
  return (
   
    <div className='sidebar'>
        <div className='sidebar_header'>
            <Avatar src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'/>
            <div className='sidebar_headerRight'>
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>

                <IconButton>
                    <ChatIcon/>
                </IconButton>

                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className='sidebar_search'>
            <div className='sidebar_searchContainer'>
                    <SearchIcon/>
                    <input placeholder='search or type name' type="text"/>
            </div>
        </div>
        <div className='sidebar_chat'>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>

    </div>
      
  )
}
