import React, { useState } from "react";
import { Form, Navbar } from "react-bootstrap";
import "./SearchBar.css";
import {FaRegCompass , FaHeart , FaUserAlt} from "react-icons/fa";


function SearchBar({searchPost}){
    const [search , setSearch] = useState("");

    function handleSearchInputChange(e){
      setSearch(e.target.value);
    } 

    function handleSubmit(e){
      e.preventDefault();
      // check if comment is not empty
      if(search.trim()){
        searchPost(e);
          //reset comment input
          setSearch("");
      }
  }

    return (
        <div className="Toolbar">
        <Navbar className="SearchBar">
        <img
        alt="Instagram"
        src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png"
        width="40"
        height="40"
        />
        <form onSubmit={handleSubmit} className="FormTxt">
        <Form.Control type="text" placeholder="Search" className="InputTxt"
        onChange={handleSearchInputChange}
        value = {search}/>
        </form>
        <FaRegCompass className="NavBarIcon"/>
        <FaHeart className="NavBarIcon"/>
        <FaUserAlt className="NavBarIcon"/>
      </Navbar>
        </div>
    )
}

export default SearchBar;