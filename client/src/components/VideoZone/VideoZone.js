import React from "react";
import play from '../../assets/icons/play.svg';
import pause from '../../assets/icons/pause.svg';
import scrub from '../../assets/icons/scrub.svg';
import fullscreen from '../../assets/icons/fullscreen.svg';
import volume_up from '../../assets/icons/volume_up.svg';
import "./VideoZone.css";

export default function VideoZone(props){
    return (
        <section className="video-player">
            <video poster={props.poster}></video>
            <div className="video-player__controls">
                <div id='play-pause'><img src={play}></img></div>
                <div id='progress'><img src={scrub}></img><span>0:00/{props.duration}</span></div>
                <div id='other-buttons'>
                    <img src={fullscreen}></img>
                    <img src={volume_up}></img>
                </div>
            </div>
        </section>
    )

}