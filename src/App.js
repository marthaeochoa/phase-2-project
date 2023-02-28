import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import GenreFilter from './components/GenreFilter';
import Playlist from './components/Playlist';
import SongForm from './components/SongForm';


function App() {
  const [songs, setSongs] = useState([]);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    let url;
    if (genre) {
      url = `http://localhost:3000/Songs?genre=${genre}`
    } else {
      url = "http://localhost:3000/Songs"
    };
  fetch(url)
  .then(r => r.json())
  .then((songs) => setSongs(songs));
  }, [genre]);


  function onAddSong(newSong){
    setSongs(songs => {
      return [...songs, newSong]
    })
  }

  
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Switch>
        <Route exact path="/">
        <GenreFilter setGenre={setGenre} />
        <Playlist songs={songs}/>
        </Route>
        <Route path="/song-form">
        <SongForm onAddSong={onAddSong} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
