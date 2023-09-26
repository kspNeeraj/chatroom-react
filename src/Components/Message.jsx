import React, { useState } from 'react'

function Message(props) {
    const [message,setMessage] = useState({
        id:0,
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
    <div>
        
            <input type='text' value={message.content} onChange={e => setMessage({content:e.target.value,id:props.length+1})}  />
            <button type='submit' onClick={handleSubmit} >send</button>
        
    </div>
  )
}

export default Message