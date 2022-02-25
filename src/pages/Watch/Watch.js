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
        axios.get(`${this.apiURL}/videos/${id}${this.apiKey}`)
          .then(result => this.setState({currentVideo: result.data}));
        //sprint 1
        // this.setState({ currentVideo: videoData.find(video => video.id === id)});
      }
    
      
      componentDidMount(){
        const urlVideoID = this.props.match.params.videoID
        // console.log(urlVideoID);

        //Check screen width to see if we should be putting ellipsis on the next videos list 10 times a second. Please forgive me...
        setInterval(() =>{
          (window.innerWidth < 570) ? this.setState({isMobile: true}) : this.setState({isMobile: false})
        }, 100) 
      

        //Get the video list from the server
        axios.get(`${this.apiURL}/videos${this.apiKey}`)
          .then(videoList => {
            this.setState({allVideos: videoList.data})
  
            //If no url paramater for video, load the first video to play on the home page
            if(urlVideoID === undefined){
              axios.get(`${this.apiURL}/videos/${videoList.data[0].id}${this.apiKey}`)
                .then(result => this.setState({currentVideo: result.data}))
            } 
            //otherwise load the video specified by the URL
            else{

              let newVideo = videoList.data.find(video => video.id === urlVideoID)
              console.log(newVideo.id);
              
              axios.get(`${this.apiURL}/videos/${newVideo.id}${this.apiKey}`)
                .then(result => this.setState({currentVideo: result.data}));
            }

          })

      }


    render() {
      //don't do anything if the data is not loaded
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