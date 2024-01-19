import MovieItem from "./MovieItem";

export default function MovieList({ movies }) {
  return (
    <>
      <h2 className="heading small mt30">cardView</h2>
      <div className="mt10"></div>
      <ul className="movie-list">
        {movies.length === 0 && (
          <p style={{ fontSize: "50px", color: "white" }}>
            찾으시는 영화가 없습니다.
          </p>
        )}
        {movies.length > 0 &&
          movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)}
      </ul>
    </>
  );
}
