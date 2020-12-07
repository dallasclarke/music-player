import React, {useRef} from "react";
import "./MusicPlayer.css";
import { Track } from "react-spotify-api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faFastBackward,
  faFastForward,
} from "@fortawesome/free-solid-svg-icons";


function MusicPlayer({ id, isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = React.useState({
    currentTime: 0,
    duration: 0,
  });

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const playSong = () => {
    // console.log(audioRef)
    audioRef.current.play();
  }

  const timeConverter = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

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
              <p>{timeConverter(data?.duration_ms)}</p>
            </div>
            <div className="player-controls">
              <FontAwesomeIcon
                className="back-button"
                icon={faFastBackward}
                size="3x"
              />
              <FontAwesomeIcon
                className="play-button"
                onClick={playSongHandler}
                icon={isPlaying ? faPauseCircle : faPlayCircle}
                size="3x"
              />
              <FontAwesomeIcon
                className="forward-button"
                icon={faFastForward}
                size="3x"
              />
            </div>
            <audio ref={audioRef} src={data.preview_url}></audio>
          </div>
        );
      }}
    </Track>
  );
}

export default MusicPlayer;
