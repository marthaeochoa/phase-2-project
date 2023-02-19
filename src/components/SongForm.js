import React from "react";

function SongForm () {
    return(
        <form className="form">
         <h3>Add You Music!</h3> 
         <label htmlFor="title">Title</label>
         <input type="text" name="title" id="title"/>

         <label htmlFor="artist">Artist</label>
         <input type="text" name="artist" id="artist"/>

         <label htmlFor="genre">Genre</label>

        <select name="genre" id="genre">
            <option value="pop">Pop</option>
            <option value="rnb">R&B</option>
            <option value="alternative">Alternative</option>
            <option value="reggaeton">Reggaeton</option>
            <option value="rap">Rap</option>
            
        </select>


         <button type="submit">Add Song</button>
        </form>
    )
}

export default SongForm;