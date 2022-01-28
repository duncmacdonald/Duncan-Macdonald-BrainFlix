import React from "react"; 
import './Avatar.css'

export default function Avatar(props){
    if(props.image === undefined){
        return (<div className="avatar"></div>);
    }
    else {
        return (<img className='avatar' src={props.image}></img>);
    }
}