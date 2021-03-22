import React from "react";
import Album from "./Album";
import Songs from "./Songs";

const SingleAlbum = (props) => {
  const { album, start, pause, currentSongId, songIsPlaying } = props;

  return (
    <>
      <div id="single-album" className="column">
        <Album album={album} />
        <Songs
          songs={album.songs}
          artist={album.artist}
          start={start}
          pause={pause}
          currentSongId={currentSongId}
          songIsPlaying={songIsPlaying}
        />
      </div>
    </>
  );
};

export default SingleAlbum;
