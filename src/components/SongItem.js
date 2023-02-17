import React from "react";

function SongItem({song}) {
    return(
       <tr className="song">
        <td>{song.name}</td>
        <td>{song.artist}</td>
        <td>{song.genre}</td>
        </tr>
    )
}

export default SongItem;