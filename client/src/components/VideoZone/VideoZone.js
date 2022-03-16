import React, { Component } from "react";
import play from '../../assets/icons/play.svg';
import pause from '../../assets/icons/pause.svg';
import scrub from '../../assets/icons/scrub.svg';
import fullscreen from '../../assets/icons/fullscreen.svg';
import close_fullscreen from '../../assets/icons/close_fullscreen.svg';
import volume_up from '../../assets/icons/volume_up.svg';
import volume_off from '../../assets/icons/volume_off.svg';
import "./VideoZone.css";

export default class VideoZone extends Component{
    state = {
        playIcon: play,
        muted: volume_up,
        fullscreen: fullscreen,
        videoTime: "0:00",
        scrubberValue: 0,
    }

    togglePlay = () => {
        const video = document.getElementById('video');
        if(this.state.playIcon === play){
            video.play()
            this.setState({playIcon : pause})
        } else {
            this.setState({playIcon : play})
            video.pause()
        }
    }

    toggleMute = () => {
        const video = document.getElementById('video');
        if(this.state.muted === volume_up){
            video.volume = false;
            this.setState({muted : volume_off})
        } else {
            this.setState({muted : volume_up})
            video.volume = true;
        }
    }

    toggleFullscreen = () => {
        const container = document.querySelector('.video-player');

        if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            container.requestFullscreen();
          }
    }

    scrubberMover = (event) => {
        this.setState({scrubberValue: event.target.value});
        const video = document.getElementById('video');
        video.currentTime = event.target.value;
    }

    formattedTime(seconds) {
        return `${Math.floor(seconds/60)}:${Math.floor(seconds%60).toString().padStart(2,"0")}`;
    }


    componentDidMount() {

        //Listener for fullscreen events
        const container = document.querySelector('.video-player');
        container.addEventListener('fullscreenchange', () => {
            if(document.fullscreenElement){
                this.setState({fullscreen: close_fullscreen})
            } else {
                this.setState({fullscreen: fullscreen})
            }
        });

        //Listener for video playtime
        const video = document.getElementById('video');
        video.ontimeupdate = () => {
            this.setState({videoTime: this.formattedTime(video.currentTime), scrubberValue: video.currentTime})
        };
        video.addEventListener('ended', this.togglePlay);
    }


    render(){
        return (
            <section className="video-player">
                <video id="video" src={`${this.props.video}?api_key=1`} poster={this.props.poster}></video>
                    <div className="video-player__controls">
                        <div id='play-pause' onClick={this.togglePlay}><img src={this.state.playIcon} alt="play pause"></img></div>
                        <div id='progress'>
                            <input 
                                type="range" 
                                min="0" 
                                value={this.state.scrubberValue} 
                                max="10" step="any" 
                                className="slider"
                                onChange={(event) => this.scrubberMover(event)}
                                ></input>
                                <span>{this.state.videoTime}/{this.props.duration}</span></div>
                        <div id='other-buttons'>
                            <img src={this.state.fullscreen} alt="fullscreen" onClick={this.toggleFullscreen}></img>
                            <img src={this.state.muted} alt="volume control" onClick={this.toggleMute}></img>
                        </div>
                    </div>
            </section>
        )
    }
}