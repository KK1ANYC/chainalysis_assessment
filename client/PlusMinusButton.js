import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const PlusMinusButton = ({ active, setActive, student }) => {
  return (
    <div className="buttonDiv">
      {!active.includes(student.id) ? (
        <FaPlus
          type="button"
          className="button"
          onClick={() => {
            setActive([...active, student.id]);
          }}
        />
      ) : (
        <FaMinus
          type="button"
          className="button"
          onClick={() => {
            const activeStudentIds = active.filter((studentId) => {
              if (student.id !== studentId) {
                return studentId;
              }
            });
            setActive([...activeStudentIds]);
          }}
        />
      )}
    </div>
  );
};

export default PlusMinusButton;
