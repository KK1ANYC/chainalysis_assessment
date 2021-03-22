import React from 'react';
import Album from './Album'
import Songs from './Songs'


const SingleAlbum = (props) => {
  const { album } = props


  return (
<>
    <div id='single-album' className='column'>
      <Album album={album}/>
      <Songs songs={album.songs} artist={album.artist} />
    </div>
</>
  )
}

export default SingleAlbum;
