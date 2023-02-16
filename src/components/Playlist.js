import React from "react";
import SongItem from "./SongItem";

function Playlist ({songs}) {

    return (
        <section>
            <ul>
            {
                songs.map(song => {
                    return <SongItem key={song.id} song={song} />
                })
            }
            </ul>
        </section>
    )
}

export default Playlist;