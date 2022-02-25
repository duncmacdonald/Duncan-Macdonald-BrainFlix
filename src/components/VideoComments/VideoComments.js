import React from "react";
import DateAgo from '../DateAgo/DateAgo';
import Avatar from "../Avatar/Avatar";
import del from "../../assets/icons/delete.svg";
import './VideoComments.css'

//Adds a video comment to the page
export default function VideoComments(props) {
    return(
        <div className="comment">
            <div className="comment__left"><Avatar /></div>
            <div className="comment__right">
                <div>
                    <h3>{props.comment.name}</h3>
                        <div>
                            <p>{DateAgo(props.comment.timestamp)}</p>
                            <img className="trash" src={del} alt="trashcan" onClick={() => props.deleteComment(props.comment.id)}></img>
                    </div>
                </div>
                <p>{props.comment.comment}</p>
            </div>

            
            
            
        </div>
    )    
}