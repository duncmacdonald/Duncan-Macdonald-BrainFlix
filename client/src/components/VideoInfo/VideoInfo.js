import React from "react";
import VideoStats from "../VideoStats/VideoStats";
import VideoComments from "../VideoComments/VideoComments";
import NewComment from "../NewComment/NewComment";
import './VideoInfo.css';


//Displays video stats and the description
export default function VideoInfo(props) {
    let commentsJSX = props.data.comments.map((comment,index) => {return (<VideoComments comment={comment} key={comment.id} deleteComment={props.deleteComment} />)});
    return (
        <section className="video-detail">
            <h1>{props.data.title}</h1>
            <VideoStats channel={props.data.channel} timestamp={props.data.timestamp} likes={props.data.likes} views={props.data.views} />
            <p className="video-detail__description">{props.data.description}</p>
            <h3 className="video-detail__comment-count">{props.data.comments.length} comments</h3>
            <NewComment comment={props.comment} listener={props.listener} submit={props.submit}/>
            {commentsJSX}

        </section>
    )
}