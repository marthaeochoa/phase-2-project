import React, {useState} from "react";

function SongForm () {
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("Pop")

   function handleTitleChange(event){
    setTitle(event.target.value)
   }

   function handleArtistChange(event){
    setArtist(event.target.value)
   }

   function handleGenreChange(event){
    setGenre(event.target.value)
   }

   function handleSubmit(event){
    event.preventDefault()
   }

   console.log(title, artist, genre)

    return(
        <form className="form">
         <h3>Add Your Music!</h3> 
         <label htmlFor="title">Title</label>
         <input 
         type="text" 
         name="title" 
         id="title" 
         placeholder="Song Title"
         onChange={handleTitleChange}
         value={title}
         />

         <label htmlFor="artist">Artist</label>
         <input 
         type="text" 
         name="artist" 
         id="artist" 
         placeholder="Artist Name"
         onChange={handleArtistChange}
         value={artist}
         />

         <label htmlFor="genre">Genre</label>

        <select name="genre" id="genre" value={genre} onChange={handleGenreChange}>
            <option value="pop">Pop</option>
            <option value="rnb">R&B</option>
            <option value="alternative">Alternative</option>
            <option value="reggaeton">Reggaeton</option>
            <option value="rap">Rap</option>
            
        </select>


         <button type="submit" onSubmit={handleSubmit}>Add Song</button>
        </form>
    )
}

export default SongForm;