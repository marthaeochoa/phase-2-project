import React from "react";

function SongItem({song}) {
    return(
        <li>{song.name}, {song.artist}            {song.genre}</li>
    )
}

export default SongItem;