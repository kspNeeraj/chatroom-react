import React, { useState } from 'react'
import style from '../styles/message.module.css'

function Message(props) {
    const [message,setMessage] = useState({
        id:0,
        username:"",
        content:""
    });

    // const hadleSubmit =() =>{

    // }
          
    const handleSubmit= ()=>{
        props.onadd(message)
        setMessage({
            content:""
        })
    }

  return (
    <div className={style.message}>
        
            <input type='text' value={message.content} 
            onChange={e => setMessage({
                content:e.target.value,
                id:props.length+1,
                username:props.username
                })}  />
            <button type='submit' onClick={handleSubmit} >send</button>
        
    </div>
  )
}

export default Message