import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import Thumbnail from "./Thumbnail";
import { movieIds } from "../hardcode/movieId";
import { useEffect, useState } from "react";
import { fetchMovies } from "../utils/fetchMovies";

export default function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(movieIds, setMovies);
  }, []);

  return (
    <main>
      <div className="m0auto">
        <h3 className="sub-title">
          <strong>SUB TITLE</strong>
          <span>SUB TITLE TEXT</span>
        </h3>
        <div className="movie-list__title">제목</div>
        <div className="movie-list__year">2024</div>
        <Thumbnail />
        <SearchBar setMovies={setMovies} />
        {movies ? (
          <MovieList movies={movies} />
        ) : (
          <p style={{ fontSize: "50px", color: "white" }}>
            찾으시는 영화가 없습니다.
          </p>
        )}
      </div>
    </main>
  );
}
