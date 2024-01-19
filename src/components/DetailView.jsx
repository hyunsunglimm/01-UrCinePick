export default function DetailView({ headerSearchMovies }) {
  return (
    <>
      <h2 className="heading small  mt30">Favorite View</h2>
      <div className="mt10"></div>
      <ul className="movie-list fav">
        {headerSearchMovies.map((movie) => (
          <li key={movie.imdbID}>
            <a href="">
              <div className="movie-list__info">
                <div className="movie-list__poster">
                  <img src={movie.Poster.replace("300", "700")} alt="" />
                </div>
                <div className="movie-list__title">{movie.Title}</div>
                <div className="movie-list__genre">
                  Adventure, Drama, Sci-Fi
                </div>
                <div className="movie-list__plot">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Inventore quae aliquam veritatis? In corporis provident
                  consectetur ipsa ullam, doloremque quaerat, odio eligendi non
                  qui aperiam nisi voluptatibus suscipit, perferendis
                  laudantium?
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
