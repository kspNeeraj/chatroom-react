import React, { useState } from 'react'
import ChatRoom from './ChatRoom'
import CreateUser from './CreateUser'
import {  Routes, Route ,Link, useParams } from "react-router-dom";

function Home() {
    const[user,setUserName] = useState({
        name:""
    })
    

  return (
    <div>
        <h1>hello</h1>
            
        
            <h2>create user to enter chatroom</h2>
            <Link to="/createUser">createUser</Link>
            <h1>Or</h1>
            <h2>Already a user  enter userId to enter chatroom</h2>
            <input type='text'value={user.name} onChange={e=>setUserName({name:e.target.value})}  />
            <Link to="/chatroom" >enter Chatroom</Link>
          <Routes>
          
            <Route path="/createUser" element={<CreateUser />} />
            <Route  path="/chatroom" element={<ChatRoom   username={user.name} />} />
            <Route path="/chatroom/:id" element={<Child />} />

          </Routes>

      
        

         {/* {userLogged ? (
              <Route path={"/dashboard"} element={<ChatRoom />} />
            ) : (
              <Route path={"/home"} element={<ChatRoom />} />
            )} */}
    </div>
  )
}
function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    console.log(id)
    return (
        <ChatRoom   username={id}  />
    );
  }

export default Home