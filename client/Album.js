import React from 'react';


const Album = (props) => {
  const name = props.album.name
  const artworkUrl = props.album.artworkUrl
  const artist = props.album.artist.name
  const selectAlbum = props.selectAlbum
  const albumId = props.album.id

  return ( 
<>
    <div className='album'>
        <a onClick={() => selectAlbum(albumId) }>
          <img src={artworkUrl} />
          <p>{name}</p>
          <small>{artist}</small>
        </a>
    </div>
</>
  )
}

export default Album;
