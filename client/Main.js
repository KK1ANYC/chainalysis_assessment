import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
import Albums from './Albums';
import Player from './Player';

const albums = [
  {
    "id": 1,
    "name": "No Dummy",
    "artworkUrl": "default-album.jpg",
    "artistId": 1,
    "artist": {
      "id": 1,
      "name": "The Crash Test Dummies"
    }
  },
  {
    "id": 2,
    "name": "I React to State",
    "artworkUrl": "default-album.jpg",
    "artistId": 1,
    "artist": {
      "id": 1,
      "name": "The Crash Test Dummies"
    }
  }
];

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      albums
    };
  }

  render () {
    return (
      <div id='main' className='row container'>

        <div id='app'>

          <div id='main' className='row container'>

            <Sidebar albums={this.state.albums} />

            <div className='container'>
              <Albums albums={this.state.albums} />
            </div>

            <Player />

          </div>
        </div>

      </div>
    )
  }
}
