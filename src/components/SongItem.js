import React from "react";

function SongItem({ song, onSongDelete }) {

    const { id, title, artist, genre } = song 

    function handleDelete () {
        onSongDelete(id);
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