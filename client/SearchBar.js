import React from "react";

const SearchBar = ({ setSearch, setSearchTag }) => {
  return (
    <div className="searchInputBox">
      <input
        className="searchInput"
        type="text"
        placeholder="Search by name"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <input
        className="searchInput"
        type="text"
        placeholder="Search by tag"
        onChange={(event) => {
          setSearchTag(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;


