export default function MovieItem({ movie }) {
  return (
    <li>
      <a href="">
        <div className="movie-list__info">
          <div className="movie-list__poster">
            <img src={movie.Poster} alt="" />
          </div>
          <div className="movie-list__title">{movie.Title}</div>
          <div className="movie-list__year">{movie.Year}</div>
        </div>
      </a>
    </li>
  );
}
