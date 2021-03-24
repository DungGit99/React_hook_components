import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");


  return (
    <input
      type="text"
      className="form-control"
      style={{ width: "240px" }}
      placeholder="Search"
    // value={search}
    // onChange={e => onInputChange(e.target.value)}
    />
  );
};

export default Search;