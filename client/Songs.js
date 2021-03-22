import React from "react";

const Songs = (props) => {
  const { songs, artist, start, pause, currentSongId, songIsPlaying } = props;

  return (
    <>
      <table id="songs">
        <tbody>
          <tr className="gray">
            <td />
            <td>#</td>
            <td>Name</td>
            <td>Artist</td>
            <td>Genre</td>
          </tr>
          {songs.map((song, idx) => {
            //isPlaying is not switching from false to true & vice versa
            const isPlaying = (song.id === currentSongId && songIsPlaying)

            return (
              <tr key={song.id}>
                <td>
                  <i
                    className={ isPlaying ? 'fa fa-pause-circle' : 'fa fa-play-circle'}
                    onClick={ isPlaying ? pause : () => start(song)}
                  />
                </td>
                <td>{idx + 1}</td>
                <td>{song.name}</td>
                <td>{artist.name}</td>
                <td>{song.genre}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Songs;
