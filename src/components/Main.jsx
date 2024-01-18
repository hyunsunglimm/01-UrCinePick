import DetailPage from "./DetailPage";
import FavoriteView from "./FavoriteView";
import ListView from "./ListView";
import MovieList from "./MovieList";
import Thumbnail from "./Thumbnail";

export default function Main() {
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
        <MovieList />
        <ListView />
        <FavoriteView />

        <DetailPage />
      </div>
    </main>
  );
}
