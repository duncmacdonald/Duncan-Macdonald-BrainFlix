import React from "react";
import VideoZone from "../../components/VideoZone/VideoZone";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import NextVideos from "../../components/NextVideos/NextVideos";
import videoData from "../../data/video-details";
import videos from "../../data/videos";

export default class Watch extends React.Component {
    state = {
        allVideos: videos,
        currentVideo: videoData[0],
        isMobile: true,
      };
    
      //Listener for a next video being clicked, matches a video id, updates current video state
      changeVideo = (id) =>{
        this.setState({ currentVideo: videoData.find(video => video.id === id)});
      }
    
      //Check screen width to see if we should be putting ellipsis on the next videos list 10 times a second. Please forgive me...
      componentDidMount(){
        setInterval(() =>{
          (window.innerWidth < 570) ? this.setState({isMobile: true}) : this.setState({isMobile: false})
        }, 100) }


    render() {
        return(
            <div className="App">
                <VideoZone poster={this.state.currentVideo.image} duration={this.state.currentVideo.duration}/>
                <div className='desktopFlex'> 
                <VideoInfo data={this.state.currentVideo}/>
                <NextVideos allVideos={this.state.allVideos} currentVideoId={this.state.currentVideo.id} nextVideoListener={this.changeVideo} isMobile={this.state.isMobile}/>
                </div>
            </div>
        )
    }

}