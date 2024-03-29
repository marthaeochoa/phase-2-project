import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import GenreFilter from './components/GenreFilter';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Playlist from './components/Playlist';
import SongForm from './components/SongForm';


function App() {
  const [songs, setSongs] = useState([]);
  const [genre, setGenre] = useState("");
  
  useEffect(() => {
    let url;
    if (genre) {
      url = `https://song-json.onrender.com/Songs?genre=${genre}`
    } else {
      url = "https://song-json.onrender.com/Songs"
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

  function onSongDelete (songId) {
    console.log('deleting a song', songId);
    setSongs(songs => songs.filter(Song => Song.id !== songId))
}

  
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/">
        <Home />
        </Route>

        <Route path="/playlist">

        <GenreFilter setGenre={setGenre} />
        <Playlist songs={songs} onSongDelete={onSongDelete} />
        </Route>

        <Route path="/song-form">
        <SongForm onAddSong={onAddSong} />
        </Route>
        
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
