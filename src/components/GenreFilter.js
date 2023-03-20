import React from "react"
import { Link } from "react-router-dom"

function GenreFilter ({ setGenre }) {


    return (
        <section >
        <div className="filter">
            <Link exact to={{pathname:"/playlist/all"}}>
                <button onClick={() => setGenre("")} >All</button>
            </Link>

            <Link exact to={{pathname: "/playlist/pop"}}>
            <button onClick={() => setGenre("Pop")}>Pop</button>
            </Link>

            <Link exact to={{pathname: "/playlist/rnb"}}>
            <button onClick={() => setGenre("RnB")}>RnB</button>
            </Link>

            <Link exact to={{pathname: "/playlist/altnerative"}}>
            <button onClick={() => setGenre("Alternative")}>Alternative</button>
            </Link>

            <Link exact to={{pathname: "/playlist/reggaeton"}}>
            <button onClick={() => setGenre("Reggaeton")}>Reggaeton</button>
            </Link>

            <Link exact to={{pathname: "/playlist/rap"}} >
            <button onClick={() => setGenre("Rap")}>Rap</button>
            </Link>

            <Link exact to={{pathname: "/playlist/rock"}} >
            <button onClick={() => setGenre("Rock")}>Rock</button>
            </Link>
        </div>
        </section>
    )
}

export default GenreFilter;