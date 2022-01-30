import React from 'react';
import Header from './components/Header/Header';
import NextVideos from './components/NextVideos/NextVideos';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoZone from './components/VideoZone/VideoZone';
import VideoInfo from './components/VideoInfo/VideoInfo';
import videoData from "./data/video-details";
import './App.css';

class App extends React.Component{
  state = {
    currentVideo: videoData[0]
  };

  //Listener for a next video being clicked, matches a video id, updates current video state
  changeVideo = (id) =>{
    this.setState({ currentVideo: videoData.find(video => video.id === id)});
  }

  render(){
    // console.log(this.state.currentVideo);
    // console.log(videoData);
    return (
      <div className="App">
        <Header />
        <VideoZone poster={this.state.currentVideo.image}/>
        <VideoInfo data={this.state.currentVideo}/>
        {/* <Comments /> */}
        <NextVideos nextVideoListener={this.changeVideo}/>
      </div>
    );
  }
  
}

export default App;
