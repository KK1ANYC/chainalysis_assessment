import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await axios.get(
        "https://api.hatchways.io/assessment/students"
      );
      const data = res.data;
      this.setState({ data });
    } catch (err) {
      console.log(err);
    }
    this.forceUpdate();
  }

  render() {
    let { data } = this.state;
    let students = data.students || []

    console.log("students obj arr", students);

    function average(arr) {
      let total = arr.reduce((accum, cv) => {
        return accum + Number(cv);
      }, 0);
      return total / arr.length;
    }

    return (
      <div id="main" className="row container">
        {students.length > 0 ? (
          <div className="allBox">
            {students.map((student) => (
              <div key={student.id} className="allBox1">
                <img
                  src={student.pic}
                  alt={student.name}
                  className="image"
                />
                <h2>{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</h2>
                <h5>Email: {student.email}</h5>
                <h5>Company: {student.company}</h5>
                <h5>Skill: {student.skill}</h5>
                <h5>Average: {average(student.grades)}%</h5>
              </div>
            ))}
          </div>
        ) : (
          <div>There are no students in the database.</div>
        )}
      </div>
    );
  }
}

// import React from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
// import Sidebar from "./Sidebar";
// import Albums from "./Albums";
// import Player from "./Player";
// import SingleAlbum from "./SingleAlbum";

// const albums = [
//   {
//     id: 1,
//     name: "No Dummy",
//     artworkUrl: "default-album.jpg",
//     artistId: 1,
//     artist: {
//       id: 1,
//       name: "The Crash Test Dummies",
//     },
//   },
//   {
//     id: 2,
//     name: "I React to State",
//     artworkUrl: "default-album.jpg",
//     artistId: 1,
//     artist: {
//       id: 1,
//       name: "The Crash Test Dummies",
//     },
//   },
// ];

// const AUDIO = document.createElement("audio");

// export default class Main extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       albums: [],
//       selectedAlbum: {},
//       currentSongId: 0,
//       songIsPlaying: false
//     };
//     this.selectAlbum = this.selectAlbum.bind(this);
//     this.deselectAlbum = this.deselectAlbum.bind(this);
//     this.start = this.start.bind(this);
//     this.pause = this.pause.bind(this);
//   }

//   start(song) {
//     AUDIO.src = song.audioUrl;
//     AUDIO.load();
//     AUDIO.play();
//     this.setState({
//       currentSongId: song.id,
//       songIsPlaying: true,
//     });
//   }

//   pause() {
//     AUDIO.pause();
//     this.setState({
//       songIsPlaying: false
//     });
//   }

//   async componentDidMount() {
//     try {
//       const res = await axios.get("/api/albums");
//       const albums = res.data;
//       this.setState({ albums });
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   async selectAlbum(albumId) {
//     try {
//       const res = await axios.get(`/api/albums/${albumId}`);
//       const selectedAlbum = res.data;
//       this.setState({ selectedAlbum });
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   deselectAlbum() {
//     this.setState({ selectedAlbum: {} });
//   }

//   render() {
//     const { albums, selectedAlbum } = this.state;

//     return (
//       <div id="main" className="row container">
//         <Sidebar deselectAlbum={this.deselectAlbum} />
//         <div className="container">
//           {selectedAlbum.id ? (
//             <SingleAlbum
//               album={selectedAlbum}
//               start={this.start}
//               pause={this.pause}
//               currentSongId={this.state.currentSongId}
//               songIsPlaying={this.state.songIsPlaying}
//             />
//           ) : (
//             <Albums albums={albums} selectAlbum={this.selectAlbum} />
//           )}
//         </div>
//         <Player />
//       </div>
//     );
//   }
// }
