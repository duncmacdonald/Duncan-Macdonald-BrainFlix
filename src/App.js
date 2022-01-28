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

  // changeVideo = (id) =>{
  //   this.setState({ currentVideo: videoData[id]});
  // }

  render(){
    console.log(this.state.currentVideo);
    // console.log(videoData);
    return (
      <div className="App">
        <Header />
        <VideoZone poster={this.state.currentVideo.image}/>
        <VideoInfo data={this.state.currentVideo}/>
        {/* <Comments /> */}
        <NextVideos />
      </div>
    );
  }
  
}

export default App;
