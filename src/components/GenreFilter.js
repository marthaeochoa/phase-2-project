import React from "react"

function GenreFilter ({genre, handleClick}) {

function handleOnClick(){
    handleClick()
}

    return (
        <div className="filter">
            <button onClick={handleOnClick}>All</button>
            <button>Pop</button>
            <button>R&B</button>
            <button>Alternative</button>
            <button>Reggaeton</button>
            <button>Rap</button>
        </div>
    )
}

export default GenreFilter;