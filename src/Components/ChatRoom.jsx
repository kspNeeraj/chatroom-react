import React, { useEffect, useState } from 'react'
import Message from './Message'
import { Link,Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Poll from './Poll';
import style from '../styles/chatroom.module.css'

function ChatRoom(props) {
    const [messages,addMessages]=useState( () => {
        const localData = localStorage.getItem('myItems');
        return localData ? JSON.parse(localData) : [];
    })

    const [isloggedIn,setState]=useState(false)

    useEffect(() => {
        
        console.log(props.username)
        
        const items= JSON.parse(localStorage.getItem('myUsers'));
        const index=items.find(item => item.name === props.username)
        if (index) {
            setState(true)
        }else{
            setState(false)
        }
        console.log(items)
        console.log("first called")
        localStorage.setItem('myItems', JSON.stringify(messages));  

      }, []);
    
    //   useEffect(() => {
    //     console.log("second called")
    //     const myItems = JSON.parse(localStorage.getItem('myItems'));
    //     console.log(myItems)
    //     if (myItems) {
    //          addMessages(myItems);
    //     }
    //   }, []);
    // useEffect(()=>{
    //     const messages =JSON.parse(localStorage.getItem('items'))
    //     if(items){
    //         setMessage(messages)
    //     }
    // },[])
    useEffect(()=>{
        console.log("feed called")
        const el = document.getElementById('chat-feed');
        // id of the chat container ---------- ^^^
            if (el) {
            el.scrollTop = el.scrollHeight;
        }
    })
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
    
    
    if (isloggedIn) {
        return (
            <div className={style.chatroomContainer}>
            <div className={style.pollContainer}>
                <Poll username={props.username}/>
            </div>
            <div className={style.chatContainer}>
                <div className={style.messageContainer}  id='chat-feed' >
                    { messages.map((message)=>(
                            message.username===props.username?
                            <div className={style.selfmessage} key={message.id} ><div className={style.meesageBubble}><p>{message.content}  <sub>{message.username}</sub></p></div> </div>
                            :<div className={style.othermessage} key={message.id}><div className={style.meesageBubble}> <p><sub>{message.username}</sub>  {message.content} </p> </div></div>
                        
                        ))
                    }
                </div>
            <div className={style.createmessage}>
            <Message  onadd={addMessage}  length={messages.length}  username={props.username}/>
            </div>
              
                
               
            </div>
             
            
            </div>
          )
    } else {
        return(
            <div>
            <p>Please enter username to enter chatroom </p>
                       
            <Link to="/" >go Back</Link>
          <Routes>
          
            <Route path="/createUser" element={<Home />} />
            
             
          </Routes>
         
          </div>

        )
    }
    
  
}

export default ChatRoom