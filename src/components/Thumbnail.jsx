import axios from "axios";
import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const thumbnailMovieIds = ["tt0119643", "tt0452694"];

export default function Thumbnail() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const responses = await Promise.all(
        thumbnailMovieIds.map((id) =>
          axios.get(`https://omdbapi.com/?apikey=ef297970&i=${id}`)
        )
      );
      const thumbnailMovies = responses.map((response) => response.data);
      setMovies(thumbnailMovies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="mt30"></div>
      <h2 className="heading regular">Thumbnails</h2>
      <div className="mt10"></div>
      <h2 className="heading small">galleryView</h2>
      <div className="mt10"></div>
      <ul className="movie-list card">
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </>
  );
}
