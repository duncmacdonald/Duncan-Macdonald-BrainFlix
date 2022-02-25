import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Watch from './pages/Watch/Watch';
import Upload from './pages/Upload/Upload';
import './App.css';


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
