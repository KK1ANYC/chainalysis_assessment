import React from 'react';


const Album = (props) => {
  const name = props.album.name
  const artworkUrl = props.album.artworkUrl
  const artist = props.album.artist.name

  return (
<>
    <div className='album'>
        <a>
          <img src={artworkUrl} />
          <p>{name}</p>
          <small>{artist}</small>
        </a>
    </div>
</>
  )
}

export default Album;
