import Button from "../../components/Button/Button";
import preview from "../../assets/images/Upload-video-preview.jpg";
import React from "react";
import { Redirect } from "react-router-dom";
import './Upload.css';

export default class Upload extends React.Component {
    state = {
        goHome: false
    }

    publishListener = () => {
        alert("Your video is uploading.");
        this.setState({goHome: true});   
    }

    render(){

        if(this.state.goHome){
            return <Redirect push to="/" />
        }

        return(
            <div>
                <h1>Upload Video</h1>
                
                <form>
                    <label>Video Thumbnail</label>
                    <img src={preview}></img>
                    <label>Title your video</label>
                    <textarea name="message" placeholder="Add a title to your video"></textarea>
                    <label>Add a video description</label>
                    <textarea name="message" placeholder="Add a description to your video"></textarea>
                </form>
                <Button text="publish" listener={this.publishListener}/>
            </div>
        )
    }
   
}

