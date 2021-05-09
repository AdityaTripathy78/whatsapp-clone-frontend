import React, {useState,useEffect} from 'react';
import {Avatar, IconButton} from '@material-ui/core';
import {AttachFile, MessageSharp, MoreVert, SearchOutlined} from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './Chat.css';
import axios from './axios';
//import { useParams } from 'react-router-dom';
//import db from './firebase';
//import firebase from 'firebase';
//import {useStateValue} from "./StateProvider";

function Chat({ messages }) {

    const [input , setInput] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("/messages/new" , {
            message : input,
            name : "saurav",
            timestamp : "Just Now!!!",
            received : false,
        })
        setInput("");
    }
    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar />
                <div className='chat_headerInfo'>
                    <h3 className='chat-room-name'>Aaditya</h3>
                    <p className='chat-room-last-seen'>
                        Last seen at...
                    </p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                    
                </div>
            </div>
            <div className='chat_body'>

                {messages.map(message => (

                    <p className={`chat_message ${message.received && 'chat_receiver' }`}>
                    <span className="chat_name">{message.name}</span>
                            {message.message}
                    <span className="chat_timestemp">{message.timestamp}</span>
                    </p>
                ))}
                 
                    
                    {/* <p className="chat_message chat_receiver">
                        <span className="chat_name">Aadi</span>
                        Heee what's up
                        <span className="chat_timestemp">{new Date().toUTCString()}</span>
                    </p> */}
                
            </div>
            <div className='chat_footer'>
                <InsertEmoticonIcon />
                <form>
                    {/* <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message"/> */}
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    
                    <button onClick={sendMessage} type="submit"> Send a Message</button>
                </form>
                <MicIcon/>
            </div>
            
        </div>
 
    )
}

export default Chat
