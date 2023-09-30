import React, { useEffect, useState } from 'react'
import style from '../styles/poll.module.css'

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
        // console.log("calledddd")
        localStorage.setItem('myPollA' ,JSON.stringify(pollStatsA));
        localStorage.setItem('myPollB' ,JSON.stringify(pollStatsB));
        localStorage.setItem('myPollC' ,JSON.stringify(pollStatsC));
        localStorage.setItem('myPollD' ,JSON.stringify(pollStatsD));
        localStorage.setItem('userP' ,JSON.stringify(usersPolled));
        localStorage.setItem('polldata' ,JSON.stringify(polldata));
        const items = JSON.parse(localStorage.getItem('polldata'));
        // console.log(items)
        if (items!==null) {
            const index=items.find(item => item.user === props.username)
             if (index) {
                setisPolled(true)
            }
        }
        
        // console.log(props.username)
        // console.log(usersPolled)
    //      localStorage.clear()
   //      localStorage.setItem('myPollA',(1))
        
        
      
    },[])

    
    useEffect(()=>{
        // console.log("called")
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
        // console.log(pollStatsA)
        // console.log(pollStatsB)
        // console.log(pollStatsC)
        // console.log(pollStatsD)
        
        
    }

  return (
    
        <div class={style.pollcontainer}>
        <h3>Poll</h3>
        {isPolled&& <h4>Your selection is saved</h4>}
        <div class={style.pollbox}>
            <div class={style.data}>
            <input type="radio" onClick={handlePoll} name="poll" value="A" disabled={isPolled}/>
                <label for="">A</label>
                <p> {Math.floor((pollStatsA/(usersPolled>1?usersPolled:1))*100)} % </p>
            </div>
            <input  class={style.in} type='range' value={Math.floor((pollStatsA/(usersPolled>1?usersPolled:1))*100) } name='A' min={0} max={100}  />
        </div>
        <div class={style.pollbox}>
            <div class={style.data}>
                <input type="radio" onClick={handlePoll}  name="poll" value="B" disabled={isPolled}  />
                <label for="">B</label>
                <p> {Math.floor((pollStatsB/(usersPolled>1?usersPolled:1))*100)} %</p>
            </div>
            <input class={style.in} type='range' value={Math.floor((pollStatsB/(usersPolled>1?usersPolled:1))*100)} name='A' min={0} max={100} />
        </div>
        <div class={style.pollbox}>
            <div class={style.data}>
            <input type="radio" onClick={handlePoll}  name="poll" value="C" disabled={isPolled}  />
                <label for="">C</label>
                <p> {Math.floor((pollStatsC/(usersPolled>1?usersPolled:1))*100)} %</p>
            </div>
            <input class={style.in} type='range' value={Math.floor((pollStatsC/(usersPolled>1?usersPolled:1))*100)} name='A' min={0} max={100}/>
        </div>
        <div class={style.pollbox}>
            <div class={style.data}>
            <input type="radio" onClick={handlePoll}  name="poll" value="D" disabled={isPolled}  />
                <label for="">D</label>
                <p> {Math.floor((pollStatsD/(usersPolled>1?usersPolled:1))*100)} %</p>
            </div>
            <input class={style.in} type='range' value={Math.floor((pollStatsD/(usersPolled>1?usersPolled:1))*100)} name='A' min={0} max={100} />
        </div>

    </div>


        
    
  )
}

export default Poll