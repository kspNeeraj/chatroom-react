import React, { useEffect, useState } from 'react'
import Message from './Message'

function ChatRoom() {
    const [messages,addMessages]=useState( () => {
        const localData = localStorage.getItem('myItems');
        return localData ? JSON.parse(localData) : [];
    })

    useEffect(() => {
        console.log("first called")
        localStorage.setItem('myItems', JSON.stringify(messages));    
      }, []);
    
    //   useEffect(() => {
    //     console.log("second called")
    //     const myItems = JSON.parse(localStorage.getItem('myItems'));
    //     console.log(myItems)
    //     if (myItems) {
    //         addMessages(myItems);
    //     }
    //   }, []);
    // useEffect(()=>{
    //     const messages =JSON.parse(localStorage.getItem('items'))
    //     if(items){
    //         setMessage(messages)
    //     }
    // },[])
    const addMessage= (message) =>{
        console.log(message)
        const items = JSON.parse(localStorage.getItem("myItems"));
        const newItems = JSON.stringify([...items,message])
        console.log(newItems);
        localStorage.setItem("myItems",newItems);
        addMessages((prevValue)=>{
            return [...prevValue,message]
        })
        
    }
    
    
  return (
    <div>
        <ul>
        {
            
            messages.map(message=>(
                <li key={message.id} >{message.content} </li>
            ))
        }
    </ul>
        <Message  onadd={addMessage} length={messages.length}/>
        <h1>chatroom</h1>
        
    </div>
  )
}

export default ChatRoom