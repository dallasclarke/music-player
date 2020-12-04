import React from "react";
import "./CurrentSong.css"
import { Track } from "react-spotify-api";

function CurrentSong ({id}) {
    
    return (
      <Track id={id}>
        {({ data, loading, error }) => {
        //   console.log(data);
          if (loading || !data) {
              return <div>Loading</div> 
          } 

          return (
          <div className="song">
            <img src={data.album.images[1].url} />
            <h1>{data.name}</h1>
            <h1>{data.artists.map(artist => `${artist?.name} `)}</h1>
          </div>)
        }}
      </Track>
    );
}

export default CurrentSong;