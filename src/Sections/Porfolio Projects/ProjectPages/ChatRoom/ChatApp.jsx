import React, { useEffect, useState } from 'react'
import './ChatAppStyle.css'
import { Route, Routes } from 'react-router-dom'
import Auth from './ChatRoomComponents/Auth'
import RoomIndex from './ChatRoomComponents/Room/RoomIndex'
import RoomChat from './ChatRoomComponents/Room/RoomChat'
const ChatApp = () => {
    const [sessionToken, setSessionToken] = useState("")

    const updateToken = (newToken) => {
      localStorage.setItem("token", newToken)
      setSessionToken(newToken)
    }
  
    useEffect(() => {
      if(localStorage.getItem('token')){
        setSessionToken(localStorage.getItem('token'))
      }
    }, []);

  return (
    <div className='ProjectContainer ChatAppBox'>
        <div>
            <Routes>
                <Route path='/' element={<Auth updateToken={updateToken}/>}/>
                <Route path='/rooms' element={<RoomIndex token={sessionToken}/>} />
                <Route path='/rooms/:id' element={<RoomChat token={sessionToken}/>} />
            </Routes>
        </div>
    </div>
  )
}

export default ChatApp