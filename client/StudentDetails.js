import React from "react";

const StudentDetails = ({ average, student }) => {
  return (
    <div>
      <div className="subBox4">
        <h2>
          {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
        </h2>
      </div>
      <div className="subBox3">
        <p>Email: {student.email}</p>
        <p>Company: {student.company}</p>
        <p>Skill: {student.skill}</p>
        <p>Average: {average(student.grades)}%</p>
      </div>
    </div>
  );
};

export default StudentDetails;
