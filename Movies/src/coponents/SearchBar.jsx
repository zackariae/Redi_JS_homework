import React from "react";
import myStyle from "./movies.module.css";

export default function SearchBar({ setFilter, setFilteredMovies, movies }) {
  // Function to handle filter input change
  const handleFilter = (e) => {
    setFilter(e.target.value.trim());
  };

  // Function to reset filter and display all movies
  const handleResetBTN = () => {
    setFilteredMovies(movies);
    setFilter("");
  };

  return (
    <div className={myStyle.searchContainer}>
      <label className={myStyle.search_label} htmlFor="search">
        Filter
      </label>
      <input
        onChange={handleFilter}
        className={myStyle.search_bar}
        type="search"
      />
      <button onClick={handleResetBTN} className={myStyle.search_reset}>
        Reset
      </button>
    </div>
  );
}
