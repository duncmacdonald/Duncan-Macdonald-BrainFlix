import React from "react"; 
import VideoListItem from "../VideoListItem/VideoListItem";
import { Link } from "react-router-dom";
import './NextVideos.css'


//column of video items
export default function NextVideos(props){
    
    const videosJSX = props.allVideos.filter(({id}) => id !== props.currentVideoId).map((e) => {
        
        let temp = e.title; //react doesn't update the VideoListLtems without this variable changing
        if(e.title.length > 37 && props.isMobile){
            temp = e.title.substring(0, e.title.substring(0,40).lastIndexOf(" ")) + "...";
        }
        return(
            <Link to = {`/v/${e.id}`} key={e.id}>
                <VideoListItem image={e.image} channel={e.channel} title={temp} key={e.id} id={e.id} />
            </Link>
        )
    
    });

    return (
        <section className="nextVideos">
            <h3>Next Videos</h3>
            {videosJSX}
        </section>
    )

}