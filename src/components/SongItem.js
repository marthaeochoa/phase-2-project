import React from "react";

function SongItem({ song, onSongDelete }) {

    const { id, title, artist, genre } = song 

    function handleDelete () {
        alert(`Are you sure you want to delete ${title}? This action can not be undone.`)
        onSongDelete(id);
        fetch(`https://song-json.onrender.com/Songs/${id}`, {
            method: "DELETE"
        })
    }

    return(
       <tr className="song">
        <td>{title}</td>
        <td>{artist}</td>
        <td>{genre}</td>
        <td className="delete-button">
            <button className="delete-button" onClick={handleDelete}> x </button>
        </td>
        </tr>
    )
}

export default SongItem;