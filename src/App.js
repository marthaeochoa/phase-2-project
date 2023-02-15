import React, { useState } from 'react';
import './App.css';
import GenreFilter from './components/GenreFilter';
import Playlist from './components/Playlist';
import SongForm from './components/SongForm';

function App() {
  const [songs, setSongs] = useState([])

  fetch('http://localhost:3000/Songs')
  .then(r => r.json())
  .then((songs) => setSongs(songs) )
  console.log(songs, "in App")
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Project</h1>
      </header>
      <GenreFilter />
      <SongForm />
      <Playlist songs={songs}/>
      
    
    </div>
  );
}

export default App;
