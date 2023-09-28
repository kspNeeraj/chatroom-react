import React, { useEffect, useState } from 'react'
import UserForm from './UserForm';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import style from '../styles/createUsers.module.css'

function CreateUser() {
    const [users,addUsers] = useState(() => {
        const localData = localStorage.getItem('myUsers');
        return localData ? JSON.parse(localData) : [];
    })

    useEffect(()=>{
        // console.log("called user")

        localStorage.setItem('myUsers',JSON.stringify(users));
        const items= JSON.parse(localStorage.getItem('myUsers'));
        // console.log(items)
    },[])

    useEffect(()=>{
        // console.log("feed called")
        const el = document.getElementById('user-feed');
        // id of the chat container ---------- ^^^
            if (el) {
            el.scrollTop = el.scrollHeight;
        }
    })

    const addUser = (user)=>{
        // console.log(user)
        const items= JSON.parse(localStorage.getItem('myUsers'));
        const newUser=JSON.stringify([...items,user])
        localStorage.setItem('myUsers',newUser)
        // console.log(newUser)
        addUsers((prevValues)=>{
            return [...prevValues,user]
        })
       

    }



  return (
    <div className={style.listwrapper}>
        <ul className={style.list} id='user-feed'>
         {
            users.map(user=>(
                <li className={style.listitem} key={user.id}>{user.name}  </li>
                
            ))
            
        }
        </ul>
        <UserForm add={addUser} length={users.length} />

        <Link to="/" >go Back to enter chatroom</Link>
          <Routes>
          
            <Route path="/createUser" element={<Home/>} />
            
             
          </Routes>
         
    </div>
  )
}

export default CreateUser