//polco assignment

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { fetchRobots, deleteRobot } from "../redux/robots";

export class Polco extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  async componentDidMount() {
	try {
      const res = await axios.get(
      "https://api.hatchways.io/assessment/students"
    );
      const students = res.data;
      this.setState({ students });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    // const { data } = students;
    console.log("students", this.students);

	  return ()
  }
}

// const mapState = (state) => {
//   return {
//     robots: state.robots.allRobots,
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     getRobots: () => dispatch(fetchRobots()),
//     deleteRobot: (robot) => dispatch(deleteRobot(robot)),
//   };
// };

// export default connect(mapState, mapDispatch)(Polco);

