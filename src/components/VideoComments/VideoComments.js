import React from "react";
import './VideoComments.css'

export default function VideoComments(props) {
    return(
        <div>
            <h3>{props.comment.name}</h3>
            <p>{props.comment.comment}</p>
            <p>{props.comment.timestamp}</p> {/*format this*/}
        </div>
    )    
}