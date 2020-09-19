import React, {useEffect, useState}  from 'react'
import "./Chat.css";
import { Avatar , IconButton} from '@material-ui/core';
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVertOutlined"
import {SearchOutlined} from "@material-ui/icons"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import InsertEmoIconIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import {useParams} from "react-router-dom";
import db from './firebase';

function Chat() {
    const [input , setInput] = useState("");
    const [seed, setSeed] = useState(0);
    const { roomId} = useParams();
    const [roomName, setRoomName ]= useState("");

    useEffect(() => {
        console.log("room  id " + roomId)
        if(roomId){
              db.collection('rooms').doc(roomId).onSnapshot(
                  snapShot =>(
                      setRoomName(snapShot.data().name)
                  )
              )
        }
    }, [roomId])
   
    useEffect(() => {
     
        return setSeed(Math.floor(Math.random() * 5000));
       
    }, []);

   const sendMessage = (e) => {

    e.preventDefault();
    console.log("You typed >>> " , input)

    setInput("");
   } 
    return (
        <div className ="chat">

            <div className = "chat__header">
            <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`} />

            <div className = "chat__headerInfo">
                    <h3>{roomName}</h3>
                <p>Last seen at ....</p>
            </div>
            <div className="sidebar__headerRight">
                    <IconButton >
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton >
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                  
                </div>
       
            </div>  
             
             <div className = "chat__body">
                
                <p className = {`chat__message
                ${true && "chat__recieve"}` }>
                <span className="chat__name" >Sanjay Goswami </span>
                 Hey Guys
                 <span  className= "chat__timestamp">3:50PM</span>
                    
                </p>                              
                
                 
             </div>
             

             <div className = "chat__footer">

            <InsertEmoIconIcon />
            <form>
                <input value={input}  
                onChange = {(e) => setInput(e.target.value)}
                placeholder="Type a message"  />
                <button onClick = {sendMessage}
                type = "submit">  Send a message</button>
            </form>
            <MicIcon/>
             </div>
            
        </div>
    )
}

export default Chat
