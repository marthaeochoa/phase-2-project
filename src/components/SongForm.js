import React from "react";

function SongForm () {
    return(
        <form>
         <h3>Add You Music!</h3> 
         <label htmlFor="title">Title</label>
         <input type="text" name="title" id="title"/>

         <label htmlFor="artist">Artist</label>
         <input type="text" name="artist" id="artist"/>

         <button type="submit">Add Song</button>
        </form>
    )
}

export default SongForm;