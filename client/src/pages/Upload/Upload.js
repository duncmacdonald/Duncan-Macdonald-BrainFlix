import Button from "../../components/Button/Button";
import React from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import './Upload.css';

export default class Upload extends React.Component {
    state = {
        goHome: false,
        videoPosterURL: "http://localhost:8080/static/Upload-video-preview.jpg",
        videoPosterObj: undefined,
        videoTitle: "Title",
        videoDescription: "",
        
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }

    handleNewPoster =(event) =>{
        console.log(URL.createObjectURL(event.target.files[0]));
        this.setState({ videoPosterObj:event.target.files[0], videoPosterURL : URL.createObjectURL(event.target.files[0])});
    }

    publishListener = () => {

        let fd = new FormData();
        fd.append("title", this.state.videoTitle);
        fd.append("channel", "Dummy Data");
        fd.append("description", this.state.videoDescription);
        if(this.state.videoPosterObj){
            fd.append("image", this.state.videoPosterObj, this.state.videoPosterObj.name);
        }

        axios.post("http://localhost:8080/videos/?api_key=duncan", fd, { headers: {"Content-Type": "multipart/form-data"}})
        .then(result => {
            console.log(result);
            this.setState({goHome: true})
        });
        


        // axios.post("http://localhost:8080/videos/?api_key=duncan", newVideo, {"Content-Type": "application/json"})
        //     .then(result => {
        //         console.log(result);
        //         this.setState({goHome: true})
        //     });
          
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
                        <img src={this.state.videoPosterURL} alt="video thumbnail image" className="upload__image"></img>
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
                        <input type="file" onChange={this.handleNewPoster}></input>                    
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

