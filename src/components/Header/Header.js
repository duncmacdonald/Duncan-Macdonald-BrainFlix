import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import React from "react";
import './Header.css';
import logo from "../../assets/icons/BrainFlix-logo.svg";
import mo from '../../assets/images/Mohan-muruge.jpg';

//White bar at top of page
export default function Header(){
    return (
        <header className="header">
            <Link to="/"><img src={logo} className="header__logo" alt="Brainflix logo"></img></Link>
            <Search className="header__search"/>
            <Avatar image={mo} className="header__avatar"/>
            <Link to="/upload"><Button text="upload" /></Link>
        </header>
    )
    
}