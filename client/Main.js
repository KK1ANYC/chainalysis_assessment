import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import Albums from "./Albums";
import Player from "./Player";
import SingleAlbum from "./SingleAlbum";

const albums = [
  {
    id: 1,
    name: "No Dummy",
    artworkUrl: "default-album.jpg",
    artistId: 1,
    artist: {
      id: 1,
      name: "The Crash Test Dummies",
    },
  },
  {
    id: 2,
    name: "I React to State",
    artworkUrl: "default-album.jpg",
    artistId: 1,
    artist: {
      id: 1,
      name: "The Crash Test Dummies",
    },
  },
];

const AUDIO = document.createElement("audio");

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      selectedAlbum: {},
      currentSongId: 0,
      songIsPlaying: false
    };
    this.selectAlbum = this.selectAlbum.bind(this);
    this.deselectAlbum = this.deselectAlbum.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
  }

  start(song) {
    AUDIO.src = song.audioUrl;
    AUDIO.load();
    AUDIO.play();
    this.setState({
      currentSongId: song.id,
      songIsPlaying: true,
    });
  }

  pause() {
    AUDIO.pause();
    this.setState({
      songIsPlaying: false
    });
  }

  async componentDidMount() {
    try {
      const res = await axios.get("/api/albums");
      const albums = res.data;
      this.setState({ albums });
    } catch (err) {
      console.log(err);
    }
  }

  async selectAlbum(albumId) {
    try {
      const res = await axios.get(`/api/albums/${albumId}`);
      const selectedAlbum = res.data;
      this.setState({ selectedAlbum });
    } catch (err) {
      console.log(err);
    }
  }

  deselectAlbum() {
    this.setState({ selectedAlbum: {} });
  }

  render() {
    const { albums, selectedAlbum } = this.state;

    return (
      <div id="main" className="row container">
        <Sidebar deselectAlbum={this.deselectAlbum} />
        <div className="container">
          {selectedAlbum.id ? (
            <SingleAlbum
              album={selectedAlbum}
              start={this.start}
              pause={this.pause}
              currentSongId={this.state.currentSongId}
              songIsPlaying={this.state.songIsPlaying}
            />
          ) : (
            <Albums albums={albums} selectAlbum={this.selectAlbum} />
          )}
        </div>
        <Player />
      </div>
    );
  }
}
