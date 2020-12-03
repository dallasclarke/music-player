import React from "react";

import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import CurrentSong from "./components/CurrentSong/CurrentSong";


function App() {
  return (
    <div className="App">
      <CurrentSong />
      <MusicPlayer />
    </div>
  );
}

export default App;
