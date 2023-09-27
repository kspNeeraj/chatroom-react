import React, { useEffect, useState } from 'react'
import Message from './Message'
import { Link,Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Poll from './Poll';


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
            <div>
            <Poll username={props.username}/>
            
             <ul>
                { messages.map((message)=>(
                        message.username===props.username?
                        <li className='other-message' key={message.id} >{message.content} </li>
                        :<li className='self-message' key={message.id} >{message.content} </li>
                       
                    ))
                }
            </ul>
           
                <Message  onadd={addMessage}  length={messages.length}  username={props.username}/>
                <h1>chatroom</h1>
               
            
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