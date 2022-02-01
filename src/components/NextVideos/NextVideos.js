import React from "react"; 
import VideoListItem from "../VideoListItem/VideoListItem";
import './NextVideos.css'


//column of video items
export default function NextVideos(props){
    
    const videosJSX = props.allVideos.map((e) => {
        let temp = e.title; //react doesn't update the VideoListLtems without this variable changing
        if(e.id !== props.currentVideoId ){
            if(e.title.length > 37 && props.isMobile){
                temp = e.title.substring(0, e.title.substring(0,40).lastIndexOf(" ")) + "...";
            }
            return(
            <VideoListItem image={e.image} channel={e.channel} title={temp} key={e.id} id={e.id} nextVideoListener={props.nextVideoListener}/>
            )
        }
    });

    return (
        <section className="nextVideos">
            <h3>Next Videos</h3>
            {videosJSX}
        </section>
    )

}