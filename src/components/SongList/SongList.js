import React from "react";
import { Playlist } from "react-spotify-api";

import "./SongList.css";
import VirtualizedList from "./ListStyling";

const SongList = ({ setSong }) => {
  const trackList = (list) => {
    //   console.log(list);
    return list.map((item) => (
      <p key={item.track.id} onClick={() => setSong(item?.track?.id)}>
        {item?.track?.name}
      </p>
    ));
  };

  return (
    <div className="songs">
      <Playlist id={"37i9dQZEVXbMDoHDwVN2tF "}>
        {({ data, loading, error }) => {
          // console.log(data)
          return data ? trackList(data.tracks.items) : <div>no data</div>;
        }}
      </Playlist>
    </div>
  );
};

export default SongList;
