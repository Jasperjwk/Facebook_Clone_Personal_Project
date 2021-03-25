import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';
import moment from 'moment';

function Post({ profilePic, image, username, timestamp, message  }) {
    const [{ user }, dispatch] = useStateValue();
    const date = new Date();
    return (
        <div className = "post">
            <div className = "post__top">
                <Avatar src = {profilePic}
                className="post__avatar"/>
            <div className = "post__topInfo">
                <h3>{username}</h3>
                {/* This is basically saying new date and i pass that time stamp that comes
                from firebase use optional chaining because it will defend it against if in
                case it's broken. toUTCString will actually render out a readable date*/}
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>


                {/* <p>{moment(new Date(timestamp?.toDate()).format('MMMM Do YYYY'))}</p> */}
            </div>
         </div>

        <div className="post__bottom">
            <p>{message}</p>    
        </div>

        <div className="post__image">
            <img src={image} alt=""/> 
        </div>

        <div className="post__options">
            <div className="post__option">
                <ThumbUpIcon/>
                <p>Like</p>
            </div>
            <div className="post__option">
                <ChatBubbleOutlineIcon/>
                <p>Comment</p>
            </div>
            <div className="post__option">
                <NearMeIcon/>
                <p>Share</p>
            </div>
            <div className="post__option">
                <AccountCircleIcon/>
                <ExpandMoreIcon/>
            </div>
            
        </div>
        </div>
    )
}

export default Post
