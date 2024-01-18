export default function FavoriteView() {
  return (
    <>
      <h2 className="heading small  mt30">Favorite View</h2>
      <div className="mt10"></div>
      <ul className="movie-list fav">
        <li>
          <a href="">
            <div className="movie-list__info">
              <div className="movie-list__poster">
                <img
                  src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-image-12-1255x790.jpg"
                  alt=""
                />
              </div>
              <div className="movie-list__title">제목</div>
              <div className="movie-list__genre">Adventure, Drama, Sci-Fi</div>
              <div className="movie-list__plot">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore quae aliquam veritatis? In corporis provident
                consectetur ipsa ullam, doloremque quaerat, odio eligendi non
                qui aperiam nisi voluptatibus suscipit, perferendis laudantium?
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="movie-list__info">
              <div className="movie-list__poster">
                <img
                  src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-image-12-1255x790.jpg"
                  alt=""
                />
              </div>
              <div className="movie-list__title">제목</div>
              <div className="movie-list__genre">Adventure, Drama, Sci-Fi</div>
              <div className="movie-list__plot">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore quae aliquam veritatis? In corporis provident
                consectetur ipsa ullam, doloremque quaerat, odio eligendi non
                qui aperiam nisi voluptatibus suscipit, perferendis laudantium?
              </div>
            </div>
          </a>
        </li>
      </ul>
    </>
  );
}
