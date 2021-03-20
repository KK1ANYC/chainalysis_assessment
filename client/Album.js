import React from 'react';

const Album = (props) => {
  const { albums } = props;


  return (
    <div className='album'>

      {albums.map(album => {
        return (
          <a key={album.id}>
            <img src='default-album.jpg' />
            <p>{album.name}</p>
            <small>{album.artist.name}</small>
        </a>
        )
      })}

    </div>
  );
};

export default Album;
