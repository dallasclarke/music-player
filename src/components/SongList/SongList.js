import React from "react";
import {Playlist} from "react-spotify-api";



const SongList = ({setSong}) => {
const trackList = (list) => {
//   console.log(list);
  return list.map((item) => <p key={item.track.id} onClick={() => setSong(item?.track?.id)}>{item?.track?.name}</p>);
};


    return <Playlist id={"37i9dQZEVXbMDoHDwVN2tF "}>
        {({data, loading, error}) => {
            // console.log(data)
            return data ? trackList(data.tracks.items) : <div>no data</div>
            }
        }      
    </Playlist>;
}

export default SongList;