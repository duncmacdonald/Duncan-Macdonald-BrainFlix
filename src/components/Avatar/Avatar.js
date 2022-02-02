import React from "react"; 
import './Avatar.css'


//Returns an image or a div if there is no image
export default function Avatar(props){
    if(props.image === undefined){
        return (<div className="avatar"></div>);
    }
    else {
        return (<img className='avatar' src={props.image}></img>);
    }
}