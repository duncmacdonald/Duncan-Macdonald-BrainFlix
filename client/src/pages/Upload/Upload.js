import Button from "../../components/Button/Button";
import React from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import './Upload.css';

export default class Upload extends React.Component {
    state = {
        goHome: false,
        videoPoster: "http://localhost:8080/static/Upload-video-preview.jpg",
        videoTitle: "Title",
        videoDescription: "",
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }

    publishListener = () => {
        const newVideo = {
            title: this.state.videoTitle,
            channel: "Dummy Data",
            image: this.state.videoPoster,
            description: this.state.videoDescription,
        }
        axios.post("http://localhost:8080/videos/?api_key=duncan", newVideo, {"Content-Type": "application/json"})
            .then(result => {
                console.log(result);
                this.setState({goHome: true})
            });
          
    }

    render(){

        if(this.state.goHome){
            return <Redirect push to="/" />
        }

        return(
            <div className="upload">
                <h1>Upload Video</h1>
                
                <form>
                    <div className="upload__image">
                        <label>Video Thumbnail</label>
                        <img src={this.state.videoPoster} alt="Bicycle moving fast" className="upload__image"></img>
                    </div>
                    <div className="upload__fields">
                        <label>Title your video</label>
                        <textarea 
                            className="upload__shortText"
                            name="videoTitle" 
                            value={this.state.title}
                            placeholder="Add a title to your video"
                            onChange={(event) => this.handleChange(event)} 
                            
                        ></textarea>
                        <label>Add a video description</label>
                        <textarea 
                            className="upload__longText" 
                            name="videoDescription" 
                            value={this.state.videoDescription} 
                            placeholder="Add a description to your video"
                            onChange={(event) => this.handleChange(event)} 
                        ></textarea>
                    </div>
                </form>
                <div className="upload__buttons">
                <Button text="publish" listener={this.publishListener}/>
                <Link to="/" className="upload__cancel">Cancel</Link>
                </div>
            </div>
        )
    }
   
}

