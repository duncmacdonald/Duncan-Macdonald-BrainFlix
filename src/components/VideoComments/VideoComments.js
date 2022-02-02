import React from "react";
import DateAgo from '../DateAgo/DateAgo';
import Avatar from "../Avatar/Avatar"
import './VideoComments.css'

//Adds a video comment to the page
export default function VideoComments(props) {
    return(
        <div className="comment">
            <div className="comment__left"><Avatar /></div>
            <div className="comment__right">
                <div>
                    <h3>{props.comment.name}</h3>
                    <p>{DateAgo(props.comment.timestamp)}</p>
                </div>
                <p>{props.comment.comment}</p>
            </div>

            
            
            
        </div>
    )    
}