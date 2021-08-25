import React from "react";

const Tags = ({ tagGroup, student }) => {
  return (
    <div className="tags">
      {tagGroup.map((tag, idx) => {
        return Number(student.id) === Number(tag.studentId) ? (
          <span className="spanTag" key={idx}>
            {tag.tags[student.id]}
          </span>
        ) : (
          <div key={idx}></div>
        );
      })}
    </div>
  );
};

export default Tags;
