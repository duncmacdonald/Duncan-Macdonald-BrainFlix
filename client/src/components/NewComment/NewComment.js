import React from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button"
import mo from '../../assets/images/Mohan-muruge.jpg';
import './NewComment.css'

//Area of the page dedicated to adding a comment on a video
export default function NewComment(props) {
    return(
        <section className="newComment">
            <Avatar image={mo} />
            <form className="newComment__right" onSubmit={props.submit} >
                <div>
                <label>Join the conversation</label>
                <textarea name="comment" value={props.comment} onChange={(event) => {props.listener(event)}} placeholder="Add a new comment"></textarea>
                </div>
                <Button text="comment" />
            </form>
        </section>
    )
}