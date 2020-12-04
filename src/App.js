import React from "react";

import "./App.css";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import CurrentSong from "./components/CurrentSong/CurrentSong";


function App() {
  return (
    <div className="app">
      <CurrentSong />
      <MusicPlayer />
    </div>
  );
}

export default App;
