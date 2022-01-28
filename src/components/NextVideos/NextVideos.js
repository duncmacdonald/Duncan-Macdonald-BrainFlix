import React from "react"; 
import videoData from "../../data/videos";
import VideoListItem from "../VideoListItem/VideoListItem";
import './NextVideos.css'

export default function NextVideos(){

    
    // console.log({videoData})
    
    const videosJSX = videoData.map((e) => {return(
        <VideoListItem image={e.image} channel={e.channel} title={e.title} key={e.id} />
    )});

    return (
        <section className="NextVideos">
            <h3>Next Videos</h3>
            {videosJSX}
        </section>
    )

}