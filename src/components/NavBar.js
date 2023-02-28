import React from "react";

function NavBar() {


    return (
        <section className="Nav-Bar">
        <button className="nav-button">Home</button>
        <button className="nav-button" 
        onClick={handleNavBarClick}>Add New Song</button>
        </section>
    )
}

export default NavBar;