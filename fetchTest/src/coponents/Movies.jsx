import React, { useEffect, useState } from "react";
import myStyle from "./movies.module.css";
import MoviesTable from "./MoviesTable";
import SearchBar from "./SearchBar";

// Component for displaying movies and performing filtering and deletion
export default function Movies() {
  // State variables
  const [movies, setMovies] = useState([]); // Array of all movies
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [filter, setFilter] = useState(""); // Filter input value
  const [filteredMovies, setFilteredMovies] = useState([]); // Filtered movies

  const api = "https://swapi.dev/api/films";

  // Function to fetch movies from the API
  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(api);
      const data = await res.json();
      if (data && data.results.length) {
        // Set movies and filteredMovies to the fetched data
        setMovies(data.results);
        setFilteredMovies(data.results);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  // Function to filter movies based on user input
  const handleFilteredMovies = () => {
    const filtered = movies.filter((movie) => {
      const searchString =
        `${movie.title} ${movie.director} ${movie.episode_id}`.toLowerCase();
      return searchString.includes(filter.toLowerCase());
    });
    setFilteredMovies(filtered);
  };

  // Fetch movies on component mount
  useEffect(() => {
    fetchMovies();
  }, []);

  // Handle movie filtering whenever the filter changes
  useEffect(() => {
    handleFilteredMovies();
  }, [filter]);

  // Console logs for debugging
  console.log("the user input: ", filter);
  console.log("filtered Movies: ", filteredMovies);

  // JSX to render the component
  return (
    <>
      {/** Search filter */}
      <SearchBar
        setFilter={setFilter}
        setFilteredMovies={setFilteredMovies}
        movies={movies}
      />
      {/** Movies table data */}
      <MoviesTable
        isLoading={isLoading}
        filteredMovies={filteredMovies}
        setFilteredMovies={setFilteredMovies}
      />
    </>
  );
}
