import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to get query parameter from URL
  const getQueryParam = (param) => {
    return new URLSearchParams(location.search).get(param);
  };

  // Initialize search state with query parameter from URL
  const [search, setSearch] = useState(() => {
    const query = getQueryParam("query");
    return query ? query : "";
  });

  // Update URL when search input changes
  const handleSearchChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    navigate(`?query=${newSearch}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search Task"
        value={search}
        onChange={handleSearchChange}
      />
      <button className="search-button">Search</button>
    </form>
  );
};
