import React from "react";
import "./VideoZone.css";

export default function VideoZone(props){
    return (
        <section className="video-player">
            <video controls poster={props.poster}></video>
        </section>
    )

}