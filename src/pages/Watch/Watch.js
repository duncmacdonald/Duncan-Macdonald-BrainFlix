import React from "react";
import axios from "axios";
import VideoZone from "../../components/VideoZone/VideoZone";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import NextVideos from "../../components/NextVideos/NextVideos";
import videoData from "../../data/video-details";

export default class Watch extends React.Component {
    state = {
        allVideos: [],
        currentVideo: {},
        isMobile: true,
      };

      apiURL = "https://project-2-api.herokuapp.com";
      apiKey = "?api_key=b458a4cd-9df6-48dc-a293-1ef0964f215c";
    
      //Listener for a next video being clicked, matches a video id, updates current video state
      changeVideo = (id) =>{
        this.setState({ currentVideo: videoData.find(video => video.id === id)});
      }
    
      
      componentDidMount(){

        //Check screen width to see if we should be putting ellipsis on the next videos list 10 times a second. Please forgive me...
        setInterval(() =>{
          (window.innerWidth < 570) ? this.setState({isMobile: true}) : this.setState({isMobile: false})
        }, 100) 
      
        //Get the video list from the server
        axios.get(`${this.apiURL}/videos${this.apiKey}`)
          .then(result => {
            this.setState({allVideos: result.data})
  
            //Load the first video to play on the home page
            axios.get(`${this.apiURL}/videos/${result.data[0].id}${this.apiKey}`)
              .then(result => this.setState({currentVideo: result.data}))
          })

      }


    render() {
      if(this.state.currentVideo.id === undefined) return (<div></div>);
    
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