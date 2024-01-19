import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { fetchMovies } from "../utils/fetchMovies";
import { thumbnailMovieIds } from "../hardcode/movieId";

export default function Thumbnail() {
  const [thumbnailMovies, setThumbnailMovies] = useState([]);

  useEffect(() => {
    fetchMovies(thumbnailMovieIds, setThumbnailMovies);
  }, []);

  return (
    <>
      <div className="mt30"></div>
      <h2 className="heading regular">Thumbnails</h2>
      <div className="mt10"></div>
      <h2 className="heading small">galleryView</h2>
      <div className="mt10"></div>
      <ul className="movie-list popular">
        {thumbnailMovies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </>
  );
}
