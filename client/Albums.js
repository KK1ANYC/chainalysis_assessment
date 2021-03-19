import React from 'react';
import Album from './Album';

const Albums = (props) => {
  const { albums } = props;

  return (
    <div id='albums' className='row wrap'>

      <Album albums={albums} />

    </div>
  );
};

export default Albums;
