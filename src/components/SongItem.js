import React from "react";

function SongItem({ song }) {
    return(
       <tr className="song">
        <td>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.genre}</td>
        </tr>
    )
}

export default SongItem;