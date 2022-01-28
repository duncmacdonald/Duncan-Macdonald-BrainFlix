import { render } from "@testing-library/react";
import Search from "../Search/Search";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import React from "react";
import './Header.css';
import logo from "../../assets/icons/BrainFlix-logo.svg";
import mo from '../../assets/images/Mohan-muruge.jpg';

export default function Header(){
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="Brainflix logo"></img>
            <Search className="headder__search"/>
            <Avatar image={mo} className="header__avatar"/>
            <Button icon="../../assets/icons/upload.svg" text="upload" />
        </header>
    )
    
}