import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
import Albums from './Albums';
import Player from './Player';
import SingleAlbum from './SingleAlbum'

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
      albums: [],
      selectedAlbum:
    }
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/albums')
      const albums = res.data
      this.setState({albums})
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <div className='container'>
          <Albums albums={this.state.albums} />
          <SingleAlbum album={this.state.selectedAlbum} />
        </div>
        <Player />
      </div>
    )
  }
}
