import React from "react";


function Playlist ({songs}) {

const songList = songs.map(song => {
    return (
    <Playlist
    key={song.id}
    name={song.name}
    artist={song.artist}
    genre={song.genre} />
)});

console.log(songs, "in playlist")
    return (
        <ul>{songList}</ul>
    )
}

export default Playlist;