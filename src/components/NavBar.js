import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {


    return (
        <nav className="Nav-Bar">
        <NavLink className="nav-button" activeClassName="active" exact to="/">Home</NavLink>
        <NavLink className="nav-button" activeClassName="active" to="/song-form">Add New Song</NavLink>
        <NavLink className="nav-button" activeClassName="active" to="/playlist/all"> Playlist </NavLink>
        </nav>
    )
}

export default NavBar;