import React from "react";
import './VideoListItem.css';

//This is a video in the next video list
export default function VideoListItem (props){
    return(
        <div className="videoListItem" >
            <img src={props.image} alt={props.title}></img>
            <div className="videoListItem__right">
                <h2>{props.title}</h2>
                <p>{props.channel}</p>
            </div>
        </div>
    )
}