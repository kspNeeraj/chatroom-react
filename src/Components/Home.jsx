import React from 'react'
import ChatRoom from './ChatRoom'
import CreateUser from './CreateUser'
import {  Routes, Route ,Link } from "react-router-dom";

function Home() {
  return (
    <div>
        <h1>hello</h1>
            
        
            <h2>create user to enter chatroom</h2>
            <Link to="/createUser">createUser</Link>
            <h1>Or</h1>
            <h2>Already a user  enter userId to enter chatroom</h2>
            <input type='text' />
            <Link to="/chatroom">enter Chatroom</Link>
          <Routes>
          
            <Route path="/createUser" element={<CreateUser />} />
            <Route  path="/chatroom" element={<ChatRoom />} />
             
          </Routes>

      
        

         {/* {userLogged ? (
              <Route path={"/dashboard"} element={<ChatRoom />} />
            ) : (
              <Route path={"/home"} element={<ChatRoom />} />
            )} */}
    </div>
  )
}

export default Home