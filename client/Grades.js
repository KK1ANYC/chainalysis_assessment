import React from "react";

const Grades = ({ active, student }) => {
  return (
    <div className="subBox5">
      {active.includes(student.id) ? (
        <div className="grades">
          {student.grades.map((grade, idx) => {
            return (
              <div key={idx} className="grade">
                <p>Test {idx + 1}:</p>
                <p>{Number(grade)}%</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Grades;
