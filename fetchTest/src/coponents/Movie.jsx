import React from "react";
import myStyle from "./movies.module.css";

export default function Movie({ movie, setFilteredMovies, filteredMovies }) {
  // Function to handle movie deletion
  const handleDelete = (movieToDelete) => {
    const updatedMovies = filteredMovies.filter(
      (movie) => movie !== movieToDelete
    );
    setFilteredMovies(updatedMovies);
  };
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.director}</td>
      <td>{movie.episode_id}</td>
      <td>
        <button onClick={() => handleDelete(movie)}>Delete</button>
      </td>
    </tr>
  );
}
