import React, { useState } from 'react'
import ChatRoom from './ChatRoom'
import CreateUser from './CreateUser'
import {  Routes, Route ,Link, useParams } from "react-router-dom";
import style from "../styles/home.module.css"

function Home() {
    const[user,setUserName] = useState({
        name:""
    })
    
    const handleChange=()=>{
        
    }

  return (
    <div >
    
        <div className={style.container}>
            <div className={style.createuser}>
                
                <h2>create user to enter chatroom</h2>
                <button className={style.button}><Link className={style.text} to="/createUser">createUser</Link></button>
                
            </div>
            <div className={style.login}>
                <h2>Already a user  enter userId to enter chatroom</h2>
                <input type='text' className={style.input} value={user.name} onChange={e=>setUserName({name:e.target.value})}  />
                
                <button  className={style.button}><Link onClick={handleChange} className={style.text} to="/chatroom">enter Chatroom</Link></button>
            </div>
            
            
        </div>
            
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