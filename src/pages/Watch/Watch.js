import React from "react";
import axios from "axios";
import VideoZone from "../../components/VideoZone/VideoZone";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import NextVideos from "../../components/NextVideos/NextVideos";

export default class Watch extends React.Component {
    state = {
        allVideos: [],
        currentVideo: {},
        isMobile: true,
        name: "Duncan",
        comment: "",
      };

      apiURL = "https://project-2-api.herokuapp.com";
      apiKey = "?api_key=b458a4cd-9df6-48dc-a293-1ef0964f215c";
    

      getVideo(id) {
        axios.get(`${this.apiURL}/videos/${id}${this.apiKey}`)
              .then(result => {
                //Don't update state if id is unchanged, you'll get infinite loops
                if(this.state.currentVideo.id !== result.data.id || this.state.currentVideo.comments.length !== result.data.comments.length) this.setState({currentVideo: result.data});
         
              })
      }

      postComment = (event) => {
        event.preventDefault();
        axios.post(`${this.apiURL}/videos/${this.state.currentVideo.id}/comments${this.apiKey}`, {name:this.state.name, comment:this.state.comment}, {"Content-Type": "application/json"} )
          .then(result => {
            this.setState({comment: ""});
          })
          .catch(error => console.log(error));
      }

      handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }

      deleteComment = (id) => {
        axios.delete(`${this.apiURL}/videos/${this.state.currentVideo.id}/comments/${id}${this.apiKey}`)
          .then(() => this.getVideo(this.state.currentVideo.id));
      }

    
      componentDidUpdate(){
        
        const urlVideoID = this.props.match.params.videoID;
        if(this.state.currentVideo !== undefined){
          if(urlVideoID === undefined){
            this.getVideo(this.state.allVideos[0].id);
          } 
          //otherwise load the video specified by the URL
          else {
              let newVideo = this.state.allVideos.find(video => video.id === urlVideoID) 
              this.getVideo(newVideo.id);
          }
        }
      }


      componentDidMount(){
        //Get the video list from the server
        axios.get(`${this.apiURL}/videos${this.apiKey}`)
          .then(videoList => {
            this.setState({allVideos: videoList.data})
          });

          
      }


    render() {
      //don't do anything if the data is not loaded
      if(this.state.currentVideo.id === undefined) return (<div></div>);
    
      return(
          <div className="App">
              <VideoZone poster={this.state.currentVideo.image} duration={this.state.currentVideo.duration}/>
              <div className='desktopFlex'> 
              <VideoInfo data={this.state.currentVideo} comment={this.state.comment} listener={this.handleChange} submit={this.postComment} deleteComment={this.deleteComment}/>
              <NextVideos allVideos={this.state.allVideos} currentVideoId={this.state.currentVideo.id} isMobile={this.state.isMobile}/>
              </div>
          </div>
      )
      
    }

}