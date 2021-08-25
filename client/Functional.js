// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaPlus, FaMinus } from "react-icons/fa";

// const Main = () => {
//   const [students, setStudents] = useState([]);
//   const [search, setSearch] = useState("");
//   const [active, setActive] = useState([]);
//   const [tags, setTags] = useState({});
//   const [tagGroup, setTagGroup] = useState([]);
//   const [searchTag, setSearchTag] = useState("");

//   useEffect(() => {
//     const getData = async () => {
//       const res = await axios.get(
//         "https://api.hatchways.io/assessment/students"
//       );
//       const data = res.data.students;
//       setStudents(data);
//     };
//     getData();
//   }, []);

//   const average = (arr) => {
//     let total = arr.reduce((accum, cv) => {
//       return accum + Number(cv);
//     }, 0);
//     return total / arr.length;
//   };

//   return (
//     <div id="main" className="row container">
//       {students.length > 0 ? (
//         <div className="allBox">
//           <div className="searchInputBox">
//             <input
//               className="searchInput"
//               type="text"
//               placeholder="Search by name"
//               onChange={(event) => {
//                 setSearch(event.target.value);
//               }}
//             />

//             <input
//               className="searchInput"
//               type="text"
//               placeholder="Search by tag"
//               onChange={(event) => {
//                 setSearchTag(event.target.value);
//               }}
//             />
//           </div>

//           <div className="students">
//             {students
//               .filter((student) => {
//                 if (search === "" && searchTag === "") {
//                   return student;
//                 } else if (search !== "" && searchTag === "") {
//                   if (
//                     student.firstName
//                       .toLowerCase()
//                       .includes(search.toLowerCase()) ||
//                     student.lastName
//                       .toLowerCase()
//                       .includes(search.toLowerCase())
//                   ) {
//                     return student;
//                   }
//                 } else if (search === "" && searchTag !== "") {
//                   let arrId = [];
//                   for (let i = 0; i < tagGroup.length; i++) {
//                     if (
//                       tagGroup[i].tags[tagGroup[i].studentId]
//                         .toString()
//                         .toLowerCase()
//                         .includes(searchTag.toLowerCase())
//                     ) {
//                       arrId.push(Number(tagGroup[i].studentId));
//                     }
//                   }
//                   if (arrId.includes(Number(student.id))) {
//                     return student;
//                   }
//                 } else if (search !== "" && searchTag !== "") {
//                   let arrId = [];
//                   for (let i = 0; i < tagGroup.length; i++) {
//                     if (
//                       tagGroup[i].tags[tagGroup[i].studentId]
//                         .toString()
//                         .toLowerCase()
//                         .includes(searchTag.toLowerCase())
//                     ) {
//                       arrId.push(Number(tagGroup[i].studentId));
//                     }
//                   }
//                   if (
//                     (arrId.includes(Number(student.id)) &&
//                       student.firstName
//                         .toLowerCase()
//                         .includes(search.toLowerCase())) ||
//                     (arrId.includes(Number(student.id)) &&
//                       student.lastName
//                         .toLowerCase()
//                         .includes(search.toLowerCase()))
//                   ) {
//                     return student;
//                   }
//                 }
//               })
//               .map((student) => (
//                 <div key={student.id}>
//                   <div className="subBox1">
//                     <div className="imgBox">
//                       <img
//                         src={student.pic}
//                         alt={student.firstName}
//                         className="image"
//                       />
//                     </div>

//                     <div className="subBox2">
//                       <div className="subBox4">
//                         <h2>
//                           {student.firstName.toUpperCase()}{" "}
//                           {student.lastName.toUpperCase()}
//                         </h2>
//                       </div>

//                       <div className="subBox3">
//                         <p>Email: {student.email}</p>
//                         <p>Company: {student.company}</p>
//                         <p>Skill: {student.skill}</p>
//                         <p>Average: {average(student.grades)}%</p>
//                       </div>

//                       <div className="subBox5">
//                         {active.includes(student.id) ? (
//                           <div className="grades">
//                             {student.grades.map((grade, idx) => {
//                               return (
//                                 <div key={idx} className="grade">
//                                   <p>Test {idx + 1}:</p>
//                                   <p>{Number(grade)}%</p>
//                                 </div>
//                               );
//                             })}
//                           </div>
//                         ) : (
//                           <div />
//                         )}
//                       </div>

//                       <div className="tagBox">
//                         <div className="tags">
//                           {tagGroup.map((tag, idx) => {
//                             return Number(student.id) ===
//                               Number(tag.studentId) ? (
//                               <span className="spanTag">
//                                 {tag.tags[student.id]}
//                               </span>
//                             ) : (
//                               <div></div>
//                             );
//                           })}
//                         </div>

//                         <div key={student.id}>
//                           <input
//                             type="text"
//                             className="tagInput"
//                             placeholder="Add a tag"
//                             value={tags[student.id] || ""}
//                             name={student.id}
//                             onChange={(event) => {
//                               setTags({
//                                 [event.target.name]: event.target.value,
//                               });
//                             }}
//                             onKeyDown={(event) => {
//                               if (event.key === "Enter") {
//                                 setTagGroup([
//                                   ...tagGroup,
//                                   {
//                                     studentId: student.id,
//                                     tags: {
//                                       [event.target.name]: event.target.value,
//                                     },
//                                   },
//                                 ]);
//                                 setTags("");
//                               }
//                             }}
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     <div className="buttonDiv">
//                       {!active.includes(student.id) ? (
//                         <FaPlus
//                           type="button"
//                           className="button"
//                           onClick={() => {
//                             setActive([...active, student.id]);
//                           }}
//                         />
//                       ) : (
//                         <FaMinus
//                           type="button"
//                           className="button"
//                           onClick={() => {
//                             let arr = active.filter((cv) => {
//                               if (student.id !== cv) {
//                                 return cv;
//                               }
//                             });
//                             setActive([...arr]);
//                           }}
//                         />
//                       )}
//                     </div>
//                   </div>
//                   <hr />
//                 </div>
//               ))}
//           </div>
//         </div>
//       ) : (
//         <div>There are no students in the database.</div>
//       )}
//     </div>
//   );
// };

// export default Main;
