import React from "react";
import { SpotifyApiContext } from "react-spotify-api";
import { makeStyles } from "@material-ui/core/styles";
import {Grid, Paper} from "@material-ui/core";
import cookie from "react-cookies";

import "./App.css";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import CurrentSong from "./components/CurrentSong/CurrentSong";
import SongList from "./components/SongList/SongList";
import VirtualizedList from './components/SongList/ListStyling';
import defaultSong from "./utils";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "3cd7985d72ce4ccc985472026a64d57b";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-email",
  "user-read-private",
  "streaming",
  "user-modify-playback-state",
];

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px'
  },
  paper: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    background: theme.palette.success.light,
  }
}));


const App = () => {
  const classes = useStyles();

  const [token, setToken] = React.useState();
  const [song, setSong] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    let _token = cookie.load("token");
    if (hash.access_token) {
      _token = hash.access_token;
    }

    if (_token) {
      setToken(_token);
      cookie.save("token", _token, { path: "/" });
    }
  }, [hash.access_token]);
  // console.log(token)
  // console.log(song)
  return (
    <>
      {token ? (
        <div className="app">
          <SpotifyApiContext.Provider value={token}>
            <>
            <Grid container spacing={5} className={classes.grid}>
              <div>
                <SongList setSong={setSong} />
              </div>
              <div>
                <CurrentSong id={song} />
                <MusicPlayer 
                id={song} 
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
                />
              </div>
              </Grid>
            </>
          </SpotifyApiContext.Provider>
        </div>
      ) : (
        <a
          href={`${authEndpoint}/?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            "%20"
          )}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      )}
    </>
  );
};

export default App;
