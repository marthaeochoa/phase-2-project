import React, {useState} from "react";

function SongForm ({ onAddSong }) {
    const [formData, setFormData] = useState({
        title:"",
        artist:"",
        genre:" "
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

    fetch("http://localhost:3000/Songs", {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then((r) => r.json())
    .then((newSong) => {
         onAddSong(newSong);

    })

    alert("Song Added")

    setFormData({
        title:"",
        artist:"",
        genre:" "
    })
   }

    return(
        <form className="form" onSubmit={handleSubmit}>
         <h2>Add Your Music!</h2> 

         <label htmlFor="title"><h3>Title</h3></label>
         <input 
         type="text" 
         name="title" 
         id="title" 
         placeholder="Song Title"
         onChange={handleOnChange}
         value={formData.title}
         />

         <label htmlFor="artist"><h3>Artist</h3></label>
         <input 
         type="text" 
         name="artist" 
         id="artist" 
         placeholder="Artist Name"
         onChange={handleOnChange}
         value={formData.artist}
         />

         <label htmlFor="genre"><h3>Genre</h3></label>

        <select name="genre" id="genre" value={formData.genre} onChange={handleOnChange}>
            <option> </option>
            <option value="Pop">Pop</option>
            <option value="RnB">RnB</option>
            <option value="Alternative">Alternative</option>
            <option value="Reggaeton">Reggaeton</option>
            <option value="Rap">Rap</option>
            
        </select>


         <button type="submit">Add Song</button>
        </form>
    )
}

export default SongForm;