import React from "react";
import "./MusicPlayer.css";
import { Track } from "react-spotify-api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faFastBackward,
  faFastForward,
} from "@fortawesome/free-solid-svg-icons";


function MusicPlayer({ id }) {
  const [songInfo, setSongInfo] = React.useState({
    currentTime: 0,
    duration: 0,
  });

  const timer = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <Track id={id}>
      {({ data, loading, error }) => {
        console.log(data);
        if (loading || !data) {
          return <div>Loading</div>;
        }

        return (
          <div className="player">
            <div className="timer-control">
              <p>Start Time</p>
              <input type="range" />
              <p>{data?.duration_ms}</p>
            </div>
            <div className="player-controls">
              <FontAwesomeIcon
                className="back-button"
                icon={faFastBackward}
                size="3x"
              />
              <FontAwesomeIcon
                className="play-button"
                icon={faPlayCircle}
                size="3x"
              />
              <FontAwesomeIcon
                className="forward-button"
                icon={faFastForward}
                size="3x"
              />
            </div>
          </div>
        );
      }}
    </Track>
  );
}

export default MusicPlayer;
