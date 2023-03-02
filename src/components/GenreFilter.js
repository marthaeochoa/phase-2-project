import React from "react"
import { NavLink } from "react-router-dom"

function GenreFilter ({ setGenre }) {

    return (
        <div className="filter">
            <NavLink to={{pathname:"/playlist/all"}}>
                <button onClick={() => setGenre("")} >All</button>
            </NavLink>

            <NavLink to={{pathname: "/playlist/pop"}}>
            <button onClick={() => setGenre("Pop")}>Pop</button>
            </NavLink>

            <NavLink to={{pathname: "/playlist/rnb"}}>
            <button onClick={() => setGenre("RnB")}>RnB</button>
            </NavLink>

            <NavLink to={{pathname: "/playlist/altnerative"}}>
            <button onClick={() => setGenre("Alternative")}>Alternative</button>
            </NavLink>

            <NavLink to={{pathname: "/playlist/reggaeton"}}>
            <button onClick={() => setGenre("Reggaeton")}>Reggaeton</button>
            </NavLink>

            <NavLink to={{pathname: "/playlist/rnb"}} >
            <button onClick={() => setGenre("Rap")}>Rap</button>
            </NavLink>

            <NavLink to={{pathname: "/playlist/rock"}} >
            <button onClick={() => setGenre("Rock")}>Rock</button>
            </NavLink>
        </div>

    )
}

export default GenreFilter;