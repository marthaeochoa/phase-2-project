import React, { useState, useEffect } from 'react';
import './App.css';
import GenreFilter from './components/GenreFilter';
import Playlist from './components/Playlist';
import SongForm from './components/SongForm';

function App() {
  const [songs, setSongs] = useState([])
  const [genre, setGenre] = useState('All')

  useEffect(() => {
  fetch('http://localhost:3000/Songs')
  .then(r => r.json())
  .then((songs) => setSongs(songs));
  }, []);

  function handleClick (){

  }

  function onAddSong(newSong){
    setSongs(songs => {
      return [...songs, newSong]
    })
  }

  
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <SongForm onAddSong={onAddSong} />
      <GenreFilter genre={genre} />
      <Playlist songs={songs}/>
      
    
    </div>
  );
}

export default App;
