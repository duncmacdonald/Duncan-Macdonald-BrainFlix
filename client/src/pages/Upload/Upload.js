import Button from "../../components/Button/Button";
import preview from "../../assets/images/Upload-video-preview.jpg";
import React from "react";
import { Redirect, Link } from "react-router-dom";
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
            <div className="upload">
                <h1>Upload Video</h1>
                
                <form>
                    <div className="upload__image">
                        <label>Video Thumbnail</label>
                        <img src={preview} alt="Bicycle moving fast" className="upload__image"></img>
                    </div>
                    <div className="upload__fields">
                        <label>Title your video</label>
                        <textarea className="upload__shortText" name="message" placeholder="Add a title to your video"></textarea>
                        <label>Add a video description</label>
                        <textarea className="upload__longText" name="message" placeholder="Add a description to your video"></textarea>
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

