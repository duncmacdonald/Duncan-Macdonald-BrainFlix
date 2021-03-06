import React from "react";
import upload from '../../assets/icons/upload.svg';
import comment from '../../assets/icons/add_comment.svg';
import publish from '../../assets/icons/publish.svg';
import './Button.css'

//Draws a blue button, if the button text matches a known button use the appropriate image.
export default function Button(props) {
    
    switch(props.text.toLowerCase()){
        case "upload":
            return(
                //Save a lot of math by adding a 3rd element and justify space-between
                <button><img src={upload}></img><div>{props.text}</div><img></img></button>
            )
        case "comment":
            return(
                <button><img src={comment}></img><div>{props.text}</div><img></img></button>
            )
        case "publish":
            return(
                <button onClick={() => props.listener()}><img src={publish}></img><div>{props.text}</div><img></img></button>
            )
        default:
            return(
                <button><img></img><div>{props.text}</div><img></img></button>
            )
    }
    
}