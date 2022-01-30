import React from "react"; 
import videoData from "../../data/videos";
import VideoListItem from "../VideoListItem/VideoListItem";
import './NextVideos.css'

export default function NextVideos(props){

    
    // console.log({videoData})
    
    const videosJSX = videoData.map((e) => {return(
        <VideoListItem image={e.image} channel={e.channel} title={e.title} key={e.id} id={e.id} nextVideoListener={props.nextVideoListener}/>
    )});

    return (
        <section className="NextVideos">
            <h3>Next Videos</h3>
            {videosJSX}
        </section>
    )

}