import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import PlusMinusButton from "./PlusMinusButton";
import Grades from "./Grades";
import Tags from "./Tags";
import TagInput from "./TagInput";
import StudentDetails from "./StudentDetails";

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

  const arrStudentId = (tagGroup, searchTag) => {
    let arrOfIds = [];
    for (let i = 0; i < tagGroup.length; i++) {
      let tagObj = tagGroup[i];
      let tagString = tagObj.tags[tagObj.studentId].toString().toLowerCase();
      if (tagString.includes(searchTag.toLowerCase())) {
        arrOfIds.push(Number(tagObj.studentId));
      }
    }
    return arrOfIds;
  };

  return (
    <div id="main" className="row container">
      {students.length > 0 ? (
        <div className="allBox">
          <SearchBar setSearch={setSearch} setSearchTag={setSearchTag} />

          <div className="students">
            {students
              .filter((student) => {
                const fNameSearch = student.firstName
                  .toLowerCase()
                  .includes(search.toLowerCase());

                const lNameSearch = student.lastName
                  .toLowerCase()
                  .includes(search.toLowerCase());

                const arrId = arrStudentId(tagGroup, searchTag);

                const studentIdIncluded = arrId.includes(Number(student.id));

                if (search !== "" && searchTag === "") {
                  if (fNameSearch || lNameSearch) {
                    return student;
                  }
                } else if (search === "" && searchTag !== "") {
                  if (studentIdIncluded) {
                    return student;
                  }
                } else if (search !== "" && searchTag !== "") {
                  if (studentIdIncluded && (fNameSearch || lNameSearch)) {
                    return student;
                  }
                } else {
                  return student;
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
                      <StudentDetails average={average} student={student} />

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
