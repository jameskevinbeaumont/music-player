import React, { useState } from 'react';
// Import Styles
import './styles/App.scss';
// Import Components
import Player from './components/Player/Player';
import Song from './components/Song/Song';
// Import Util
import data from './util';

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong} />
    </div>
  );
}

export default App;
