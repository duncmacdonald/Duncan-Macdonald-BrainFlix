import React from "react";
import './VideoListItem.css';

export default function VideoListItem (props){
    return(
        <div className="videoListItem" onClick={() => {props.nextVideoListener(props.id)}}>
            <img src={props.image} alt={props.title}></img>
            <div className="videoListItem__right">
                <h2>{props.title}</h2>
                <p>{props.channel}</p>
            </div>
        </div>
    )
}