import axios from "axios";
import MovieItem from "./MovieItem";
import { useEffect, useState } from "react";

const paramId = [
  "tt1798709",
  "tt0206634",
  "tt2194499",
  "tt0816711",
  "tt1375666",
  "tt2543164",
  "tt0816692",
  "tt2582802",
  "tt0359950",
  "tt0770828",
  "tt0259711",
  "tt0112579",
  "tt7653254",
  "tt0335266",
  "tt1454468",
];

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const responses = await Promise.all(
        paramId.map((id) =>
          axios.get(`https://omdbapi.com/?apikey=ef297970&i=${id}`)
        )
      );
      const movieData = responses.map((response) => response.data);
      setMovies(movieData);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <h2 className="heading small mt30">cardView</h2>
      <div className="mt10"></div>
      <ul className="movie-list">
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </>
  );
}
