import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import PlusMinusButton from "./PlusMinusButton";
import Grades from "./Grades";
import Tags from "./Tags";
import TagInput from "./TagInput";


const Main = () => {
  const [students, setStudents] = useState([]);
  const [active, setActive] = useState([]);
  const [tags, setTags] = useState({});
  const [tagGroup, setTagGroup] = useState([]);
  const [search, setSearch] = useState("");
  const [searchTag, setSearchTag] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://api.hatchways.io/assessment/students"
      );
      const data = res.data.students;
      setStudents(data);
    };
    getData();
  }, []);

  const average = (testScores) => {
    const total = testScores.reduce((accum, testScore) => {
      return accum + Number(testScore);
    }, 0);
    return total / testScores.length;
  };

  return (
    <div id="main" className="row container">
      {students.length > 0 ? (
        <div className="allBox">
          <SearchBar setSearch={setSearch} setSearchTag={setSearchTag} />

          <div className="students">
            {students
              .filter((student) => {
                if (search === "" && searchTag === "") {
                  return student;
                } else if (search !== "" && searchTag === "") {
                  if (
                    student.firstName
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    student.lastName
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return student;
                  }
                } else if (search === "" && searchTag !== "") {
                  let arrId = [];
                  for (let i = 0; i < tagGroup.length; i++) {
                    if (
                      tagGroup[i].tags[tagGroup[i].studentId]
                        .toString()
                        .toLowerCase()
                        .includes(searchTag.toLowerCase())
                    ) {
                      arrId.push(Number(tagGroup[i].studentId));
                    }
                  }
                  if (arrId.includes(Number(student.id))) {
                    return student;
                  }
                } else if (search !== "" && searchTag !== "") {
                  let arrId = [];
                  for (let i = 0; i < tagGroup.length; i++) {
                    if (
                      tagGroup[i].tags[tagGroup[i].studentId]
                        .toString()
                        .toLowerCase()
                        .includes(searchTag.toLowerCase())
                    ) {
                      arrId.push(Number(tagGroup[i].studentId));
                    }
                  }
                  if (
                    (arrId.includes(Number(student.id)) &&
                      student.firstName
                        .toLowerCase()
                        .includes(search.toLowerCase())) ||
                    (arrId.includes(Number(student.id)) &&
                      student.lastName
                        .toLowerCase()
                        .includes(search.toLowerCase()))
                  ) {
                    return student;
                  }
                }
              })
              .map((student) => (
                <div key={student.id}>
                  <div className="subBox1">
                    <div className="imgBox">
                      <img
                        src={student.pic}
                        alt={student.firstName}
                        className="image"
                      />
                    </div>

                    <div className="subBox2">
                      <div className="subBox4">
                        <h2>
                          {student.firstName.toUpperCase()}{" "}
                          {student.lastName.toUpperCase()}
                        </h2>
                      </div>

                      <div className="subBox3">
                        <p>Email: {student.email}</p>
                        <p>Company: {student.company}</p>
                        <p>Skill: {student.skill}</p>
                        <p>Average: {average(student.grades)}%</p>
                      </div>

                      <Grades student={student} active={active} />

                      <div className="tagBox">
                        <Tags tagGroup={tagGroup} student={student} />

                        <div>
                          <TagInput
                            student={student}
                            tags={tags}
                            setTags={setTags}
                            setTagGroup={setTagGroup}
                            tagGroup={tagGroup}
                          />
                        </div>
                      </div>
                    </div>

                    <PlusMinusButton
                      student={student}
                      setActive={setActive}
                      active={active}
                    />
                  </div>
                  <hr />
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div>There are no students in the database.</div>
      )}
    </div>
  );
};

export default Main;
