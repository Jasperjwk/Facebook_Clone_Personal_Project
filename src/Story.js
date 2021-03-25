import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css';

function Story({ image, profileSrc, title }) {
    return (
        // that url going to say go to a url and that url is going to be the image
        //that we pass in. This should actually set the background image of this div
        //so each of these divs to the image that we passed in.
        <div style={{ backgroundImage: `url(${image})`}} className="story">
            <Avatar className="story__avatar" src = {profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
