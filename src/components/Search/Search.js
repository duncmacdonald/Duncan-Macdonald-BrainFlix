import React from "react";
import magnify from'../../assets/icons/search.svg';
import './Search.css';


export default function Search() {
    return(
        <form>
            <img src={magnify} alt='search'></img>
            <input type="text" className="search" defaultValue="Search" />
        </form>
        
    )
}