import React from "react";

const TagInput = ({ tags, setTags, setTagGroup, tagGroup, student }) => {
  return (
    <input
      type="text"
      className="tagInput"
      placeholder="Add a tag"
      value={tags[student.id] || ""}
      name={student.id}
      onChange={(event) => {
        setTags({
          [event.target.name]: event.target.value,
        });
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          setTagGroup([
            ...tagGroup,
            {
              studentId: student.id,
              tags: {
                [event.target.name]: event.target.value,
              },
            },
          ]);
          setTags("");
        }
      }}
    />
  );
};

export default TagInput;
