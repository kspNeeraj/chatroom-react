import React, { useEffect, useState } from 'react'
import UserForm from './UserForm';

function CreateUser() {
    const [users,addUsers] = useState(() => {
        const localData = localStorage.getItem('myUsers');
        return localData ? JSON.parse(localData) : [];
    })

    useEffect(()=>{
        console.log("called user")

        localStorage.setItem('myUsers',JSON.stringify(users));
        const items= JSON.parse(localStorage.getItem('myUsers'));
        console.log(items)
    },[])

    const addUser = (user)=>{
        console.log(user)
        const items= JSON.parse(localStorage.getItem('myUsers'));
        const newUser=JSON.stringify([...items,user])
        localStorage.setItem('myUsers',newUser)
        console.log(newUser)
        addUsers((prevValues)=>{
            return [...prevValues,user]
        })
       

    }



  return (
    <div>
        <ul>
         {
            users.map(user=>(
                <li key={user.id}>{user.name}  </li>
            ))
            
        }
        </ul>
        <UserForm add={addUser} length={users.length} />
    </div>
  )
}

export default CreateUser