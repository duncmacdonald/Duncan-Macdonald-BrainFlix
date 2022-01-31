import React from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button"
import mo from '../../assets/images/Mohan-muruge.jpg';
import './NewComment.css'

export default function NewComment() {
    return(
        <section className="newComment">
            <Avatar image={mo} />
            <form className="newComment__right">
                <div>
                <label>Join the conversation</label>
                <textarea name="message" placeholder="Add a new comment"></textarea>
                </div>
                <Button text="comment" />
            </form>
        </section>
    )
}