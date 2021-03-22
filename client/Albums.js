import React from 'react';
import Album from './Album';

const Albums = (props) => {
  const albums  = props.albums
  const selectAlbum = props.selectAlbum

  return (
    <div id='albums' className='row wrap'>

      {
      albums.map(album => <Album album={album} key={album.id} selectAlbum={selectAlbum} />)
      }

    </div>
  )
}

export default Albums;
