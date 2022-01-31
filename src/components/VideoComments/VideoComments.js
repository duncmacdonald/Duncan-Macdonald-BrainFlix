import React from "react";
import Avatar from "../Avatar/Avatar"
import './VideoComments.css'

export default function VideoComments(props) {
    return(
        <div className="comment">
            <div className="comment__left"><Avatar /></div>
            <div className="comment__right">
                <div>
                    <h3>{props.comment.name}</h3>
                    <p>{props.comment.timestamp}</p> {/*format this*/}
                </div>
                <p>{props.comment.comment}</p>
            </div>

            
            
            
        </div>
    )    
}