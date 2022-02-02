import React from "react";
import magnify from'../../assets/icons/search.svg';
import './Search.css';

//This is the search bar used in the header
export default function Search() {
    return(
        <form className="search">
            <img src={magnify} alt='search' className="search__logo"></img>
            <input type="text" className="search__input" placeholder="Search" />
        </form>
        
    )
}