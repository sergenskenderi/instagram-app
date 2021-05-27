import React from "react";
import { Form, Navbar } from "react-bootstrap";
import "./SearchBar.css";
import {FaRegCompass , FaHeart , FaUserAlt} from "react-icons/fa";


function SearchBar(){
    return (
        <div className="Toolbar">
        <Navbar className="SearchBar">
        <img
        alt="Instagram"
        src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png"
        width="40"
        height="40"
        />
        <Form.Control type="text" placeholder="Search" className="InputTxt"/>
        <FaRegCompass className="NavBarIcon"/>
        <FaHeart className="NavBarIcon"/>
        <FaUserAlt className="NavBarIcon"/>
      </Navbar>
        </div>
    )
}

export default SearchBar;