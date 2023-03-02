import React from "react"

function GenreFilter ({ setGenre }) {

    return (
        <div className="filter">
            <button onClick={() => setGenre("")} >All</button>
            <button onClick={() => setGenre("Pop")}>Pop</button>
            <button onClick={() => setGenre("RnB")}>RnB</button>
            <button onClick={() => setGenre("Alternative")}>Alternative</button>
            <button onClick={() => setGenre("Reggaeton")}>Reggaeton</button>
            <button onClick={() => setGenre("Rap")}>Rap</button>
            <button onClick={() => setGenre("Rock")}>Rock</button>
        </div>

    )
}

export default GenreFilter;