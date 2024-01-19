import MovieItem from "./MovieItem";

export default function MovieList({ movies }) {
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
