import React, { useState } from 'react'

function UserForm(props) {
    const [user,setUser] = useState({
        id:0,
        name:""
    })

    const handleUser= ()=>{
        console.log(user)
        props.add(user)
        setUser({
            name:""
        })
    }
  return (
    <div>
          <input type='text' value={user.name} onChange={e => setUser({name:e.target.value,id:props.length+1})}/>
        <button onClick={handleUser} >create User</button>
    </div>
  )
}

export default UserForm