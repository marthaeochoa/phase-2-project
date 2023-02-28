import React from "react";
import { NavLink, Link } from "react-router-dom";
import SongForm from "./SongForm";

function NavBar() {


    return (
        <nav className="Nav-Bar">
        <NavLink className="nav-button" exact to="/">Home</NavLink>
        <NavLink className="nav-button" to="/song-form">Add New Song</NavLink>
        </nav>
    )
}

export default NavBar;