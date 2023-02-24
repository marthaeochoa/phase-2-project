import React from "react";
import SongForm from "./SongForm";

function NavBar({ onAddSong }) {
 
    function handleNavBarClick () {
    <SongForm onAddSong={onAddSong} />
    }

    return (
        <section className="Nav-Bar">
        <button className="nav-button">Home</button>
        <button className="nav-button" 
        onClick={handleNavBarClick}>Add New Song</button>
        </section>
    )
}

export default NavBar;