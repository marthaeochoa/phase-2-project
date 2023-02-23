import React, {useState} from "react";

function SongForm ({ onAddSong }) {
    const [formData, setFormData] = useState({
        title:"",
        artist:"",
        genre:"Pop"
    })

    function handleOnChange(event){
        const { name, value } = event.target;

        setFormData(formData => {
            return {
                ...formData,
            [name]: value }
        })
    }

    console.log(formData)

   function handleSubmit(event){
    event.preventDefault();
    onAddSong(formData);
   }

    return(
        <form className="form" onSubmit={handleSubmit}>
         <h3>Add Your Music!</h3> 
         <label htmlFor="title">Title</label>
         <input 
         type="text" 
         name="title" 
         id="title" 
         placeholder="Song Title"
         onChange={handleOnChange}
         value={formData.title}
         />

         <label htmlFor="artist">Artist</label>
         <input 
         type="text" 
         name="artist" 
         id="artist" 
         placeholder="Artist Name"
         onChange={handleOnChange}
         value={formData.artist}
         />

         <label htmlFor="genre">Genre</label>

        <select name="genre" id="genre" value={formData.genre} onChange={handleOnChange}>
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