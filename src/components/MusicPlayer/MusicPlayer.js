import React from "react";
import "./MusicPlayer.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faFastBackward,
  faFastForward,
} from "@fortawesome/free-solid-svg-icons";

function MusicPlayer() {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="player-controls">
        <FontAwesomeIcon className="back-button" icon={faFastBackward} size="3x" />
        <FontAwesomeIcon className="play-button" icon={faPlayCircle} size="3x" />
        <FontAwesomeIcon className="forward-button" icon={faFastForward} size="3x" />
      </div>
    </div>
  );
}

export default MusicPlayer;
