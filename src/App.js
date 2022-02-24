import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import NextVideos from './components/NextVideos/NextVideos';
import VideoZone from './components/VideoZone/VideoZone';
import VideoInfo from './components/VideoInfo/VideoInfo';
import Watch from './pages/Watch/Watch';
import Upload from './pages/Upload/Upload';
import videoData from "./data/video-details";
import videos from "./data/videos";
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

class App extends React.Component{



  render(){
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route 
            path='/' exact 
            component={Watch} 
          />
          <Route 
            path='/upload' 
            component={Upload}
          />
          <Route 
            path='/v/:videoID'
            component={Watch} 
          />
        </Switch>
      </BrowserRouter>
     
    );
  }
  
}

export default App;
