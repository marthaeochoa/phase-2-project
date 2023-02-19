import React from "react";
import SongItem from "./SongItem";

function Playlist ({songs}) {

    return (
        <section>
            <table className="song-table">
            <tr>
                    <td><h3>Title</h3></td>
                    <td><h3>Artist</h3></td>
                    <td><h3>Genre</h3></td>
             </tr>
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