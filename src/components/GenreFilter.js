import React from "react"
import { NavLink } from "react-router-dom"

function GenreFilter ({ setGenre }) {


    return (
        <section >
        <div className="filter">
            <NavLink exact to={{pathname:"/playlist/all"}}>
                <button onClick={() => setGenre("")} >All</button>
            </NavLink>

            <NavLink exact to={{pathname: "/playlist/pop"}}>
            <button onClick={() => setGenre("Pop")}>Pop</button>
            </NavLink>

            <NavLink exact to={{pathname: "/playlist/rnb"}}>
            <button onClick={() => setGenre("RnB")}>RnB</button>
            </NavLink>

            <NavLink exact to={{pathname: "/playlist/altnerative"}}>
            <button onClick={() => setGenre("Alternative")}>Alternative</button>
            </NavLink>

            <NavLink exact to={{pathname: "/playlist/reggaeton"}}>
            <button onClick={() => setGenre("Reggaeton")}>Reggaeton</button>
            </NavLink>

            <NavLink exact to={{pathname: "/playlist/rap"}} >
            <button onClick={() => setGenre("Rap")}>Rap</button>
            </NavLink>

            <NavLink exact to={{pathname: "/playlist/rock"}} >
            <button onClick={() => setGenre("Rock")}>Rock</button>
            </NavLink>
        </div>
        </section>
    )
}

export default GenreFilter;