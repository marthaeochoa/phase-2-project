import React from "react";
import SongItem from "./SongItem";

function Playlist ({songs, onSongDelete}) {

function renderSongs(songs){

    return songs.map(song => {
        return (
        <SongItem 
        key={song.id} 
        song={song} 
        onSongDelete={onSongDelete}
        />
     )
    })
}

    return (
        <section>
            <table>
            <tr>
                    <td className="headers"><h3>Title</h3></td>
                    <td className="headers"><h3>Artist</h3></td>
                    <td className="headers"><h3>Genre</h3></td>
                    <td className="headers-button"></td>
             </tr>
             {renderSongs(songs)}
            </table>
        </section>
    )
}

export default Playlist;