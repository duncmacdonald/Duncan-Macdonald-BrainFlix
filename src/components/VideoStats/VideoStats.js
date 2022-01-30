import React from 'react';
import eye from '../../assets/icons/views.svg';
import heart from '../../assets/icons/likes.svg';
import './VideoStats.css'

export default function VideoStats(props){
    return (
        <div className='video-detail__stats'>
            <h2>{`By ${props.channel}`}</h2>
            <div>{props.timestamp}</div>
            <div><img src={eye} alt="views"></img>{props.views}</div>
            <div><img src={heart} alt="likes"></img>{props.likes}</div>
        </div>
    )
}