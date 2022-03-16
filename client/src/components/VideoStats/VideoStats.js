import React from 'react';
import DateAgo from '../DateAgo/DateAgo';
import eye from '../../assets/icons/views.svg';
import heart from '../../assets/icons/likes.svg';
import './VideoStats.css'

export default function VideoStats(props){
    return (
        <div className='video-detail__stats'>
            <h2>{`By ${props.channel}`}</h2>
            <div>{DateAgo(props.timestamp)}</div>
            <div><img src={eye} alt="views"></img>{props.views}</div>
            <div><img className="heart" src={heart} alt="likes" onClick={props.likeListener}></img>{props.likes}</div>
        </div>
    )
}