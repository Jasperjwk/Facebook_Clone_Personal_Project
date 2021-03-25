import { Avatar } from '@material-ui/core';
import React, { useState }from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import firebase from "firebase";
import db from './firebase';

function MesssageSender() {
    // keep track of input
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    
    
    
    const handleSubmit = e =>{
        // We don't want it to refresh the page when we submit
        e.preventDefault();

        // When I hit the enter key for submit, I am going to the collection post
        db.collection('post').add({
            message: input,
            // This allows to store user timestamp from different time zone
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        //some clever db stuff
        setInput("")
        setImageUrl("")
    }

    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src = {user.photoURL} />
                <form>
                    {/* remove 'text' as it is text by default */}
                    <input 
                    value = {input}
                    // onChange will fire off an event everytime the user starts to type.
                    onChange = {e => setInput(e.target.value)}
                    className="messageSender__input"
                    
                    placeholder={`What's on your mind, ${user.displayName}?`}
                    />
                    <input 
                    value = {imageUrl}
                    onChange = {e => setImageUrl(e.target.value)}
                    placeholder={`image URL (Optional)`}/>

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon  style={{ color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon  style={{ color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            
            </div>
            
        </div>
    )
}

export default MesssageSender 
