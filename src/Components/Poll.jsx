import React, { useEffect, useState } from 'react'


function Poll(props) {
    const [pollStatsA,setA]=useState(()=>{
        const localData=localStorage.getItem('myPollA')
        return localData? JSON.parse(localData):(0)
    })
    const [pollStatsB,setB]=useState(()=>{
        const localData=localStorage.getItem('myPollB')
        return localData? JSON.parse(localData):(0)
    })
    const [pollStatsC,setC]=useState(()=>{
        const localData=localStorage.getItem('myPollC')
        return localData? JSON.parse(localData):(0)
    })
    const [pollStatsD,setD]=useState(()=>{
        const localData=localStorage.getItem('myPollD')
        return localData? JSON.parse(localData):(0)
    })
    const [usersPolled,setU]=useState(()=>{
        const localData=localStorage.getItem('userP')
        return localData?JSON.parse(localData):(0)
    })
    
    const [polldata,setPolldata]=useState( () => {
        const localData = localStorage.getItem('polldata');
        return localData ? JSON.parse(localData) : [];
    })
    const [userSelection,setUserSelection]=useState({
        user:"",
        selcected:""
    })
    const [isPolled,setisPolled]=useState(false)

    useEffect(()=>{
        console.log("calledddd")
        localStorage.setItem('myPollA' ,JSON.stringify(pollStatsA));
        localStorage.setItem('myPollB' ,JSON.stringify(pollStatsB));
        localStorage.setItem('myPollC' ,JSON.stringify(pollStatsC));
        localStorage.setItem('myPollD' ,JSON.stringify(pollStatsD));
        localStorage.setItem('userP' ,JSON.stringify(usersPolled));
        localStorage.setItem('polldata' ,JSON.stringify(polldata));
        const items = JSON.parse(localStorage.getItem('polldata'));
        console.log(items)
        if (items!==null) {
            const index=items.find(item => item.user === props.username)
             if (index) {
                setisPolled(true)
            }
        }
        
        console.log(props.username)
        console.log(usersPolled)
    //      localStorage.clear()
   //      localStorage.setItem('myPollA',(1))
        
        
      
    },[])

    
    useEffect(()=>{
        console.log("called")
        const items = JSON.parse(localStorage.getItem('polldata'));
        const newItems = JSON.stringify([...items,userSelection])
        // console.log(newItems);
        localStorage.setItem("polldata",newItems);

        // console.log(items);
        localStorage.setItem('myPollA',(pollStatsA))
        localStorage.setItem('myPollB',(pollStatsB))
        localStorage.setItem('myPollC',(pollStatsC))
        localStorage.setItem('myPollD',(pollStatsD))
        localStorage.setItem('userP',(usersPolled))

    },[polldata.length])

    const handlePoll=(event)=>{
        console.log(pollStatsA)
        const id=event.target.value
        setUserSelection({user:props.username,selcected:id})
        setPolldata((prevValue)=>{
            return [...prevValue,userSelection]
        })
        setisPolled(true)
        console.log(isPolled)
        
        console.log(usersPolled)
        setU(prevCount=> prevCount+1)
        
        switch (id) {
            case "A":
                setA(prevState=> prevState+1)
             
                break;
            case "B":
                setB(prevState=> prevState+1)
                break;
            case "C":
                setC(prevState=> prevState+1)
                break;
            case "D":
                setD(prevState=> prevState+1)
                break;
            
            default:
                break;
        }
        //setA(10)
        console.log(pollStatsA)
        console.log(pollStatsB)
        console.log(pollStatsC)
        console.log(pollStatsD)
        
        
    }

  return (
    <div>
        <h1>Poll</h1>
        {isPolled&& <h2>Your selection is saved</h2>}
        <div>
        <input type='range' value={Math.floor((pollStatsA/(usersPolled>1?usersPolled:1))*100) } name='A' min={0} max={100}  />
        <label> {Math.floor((pollStatsA/(usersPolled>1?usersPolled:1))*100)} A</label>
        <input type="radio" onClick={handlePoll} name="poll" value="A" disabled={isPolled}/>
        <input type='range' value={Math.floor((pollStatsB/(usersPolled>1?usersPolled:1))*100)} name='A' min={0} max={100} />
        <label> {Math.floor((pollStatsB/(usersPolled>1?usersPolled:1))*100)} B</label>
        <input type="radio" onClick={handlePoll}  name="poll" value="B" disabled={isPolled}  />
        <input type='range' value={Math.floor((pollStatsC/(usersPolled>1?usersPolled:1))*100)} name='A' min={0} max={100}/>
        <label> {Math.floor((pollStatsC/(usersPolled>1?usersPolled:1))*100)} C</label>
        <input type="radio" onClick={handlePoll} name="poll" value="C" disabled={isPolled}/>
        <input type='range' value={Math.floor((pollStatsD/(usersPolled>1?usersPolled:1))*100)} name='A' min={0} max={100} />
        <label> {Math.floor((pollStatsD/(usersPolled>1?usersPolled:1))*100)} D</label>
        <input type="radio" onClick={handlePoll} name="poll" value="D" disabled={isPolled}/>
        </div>
    </div>
  )
}

export default Poll