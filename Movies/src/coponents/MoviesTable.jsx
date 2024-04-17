import React from "react";
import Movie from "./Movie";
import myStyle from "./movies.module.css";

export default function MoviesTable({
  isLoading,
  filteredMovies,
  setFilteredMovies,
}) {
  return (
    <div className={myStyle.container}>
      <table className="">
        <thead>
          <tr>
            <th>Name</th>
            <th>Director</th>
            <th>Episode ID</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="4">
                <div className={myStyle.spinner_container}>
                  <h3>Loading the data, Please wait</h3>
                  <div className={myStyle.spinner}></div>
                </div>
              </td>
            </tr>
          ) : filteredMovies.length ? (
            filteredMovies.map((movie, index) => {
              return (
                <Movie
                  key={index}
                  movie={movie}
                  setFilteredMovies={setFilteredMovies}
                  filteredMovies={filteredMovies}
                />
              );
            })
          ) : (
            <tr>
              <td colSpan="4">
                <h3>There is no movie :(</h3>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
