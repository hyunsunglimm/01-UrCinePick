import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import Thumbnail from "./Thumbnail";
import { movieIds } from "../hardcode/movieId";
import { useEffect, useState } from "react";
import { fetchMovies } from "../utils/fetchMovies";
import DetailView from "./DetailView";

export default function Main({ headerSearchMovies }) {
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

        {headerSearchMovies.length > 0 ? (
          <DetailView headerSearchMovies={headerSearchMovies} />
        ) : (
          <MovieList movies={movies} />
        )}
      </div>
    </main>
  );
}
