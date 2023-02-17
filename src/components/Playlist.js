import React from "react";
import SongItem from "./SongItem";

function Playlist ({songs}) {

    return (
        <section>
            <table>
            {
                songs.map(song => {
                    return (
                    <SongItem 
                    key={song.id} 
                    song={song} 
                    />
                 )
                })
            }
            </table>
        </section>
    )
}

export default Playlist;