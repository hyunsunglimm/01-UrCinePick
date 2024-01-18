export default function Ui() {
  return (
    <>
      {/* 텍스트 */}
      <div className="mt30"></div>
      <h2 className="heading regular">Typography</h2>
      <div className="mt10"></div>
      <h2 className="heading large">heading large</h2>
      <h2 className="heading regular">heading regular</h2>
      <h2 className="heading small">heading small</h2>
      <p className="txt-type1">txt-type1 txt-type1 txt-type1</p>
      <p className="txt-type2">txt-type2 txt-type2 txt-type2</p>
      <h3 className="sub-title">
        <strong>SUB TITLE</strong>
        <span>SUB TITLE TEXT</span>
      </h3>

      {/* 버튼 */}
      <div className="mt30"></div>
      <h2 className="heading regular">Button</h2>
      <div className="mt10"></div>
      <button className="btn regular pink">SEARCH</button>
      <div className="mt30"></div>

      {/* 폼 */}
      <h2 className="heading regular">Form</h2>
      <div className="mt10"></div>
      <input type="text" placeholder="placeholder" className="input" />
      <br />
      <select name="" id="type" className="select">
        <option value="">select</option>
      </select>

      {/* 썸네일 */}
      <div className="mt30"></div>
      <h2 className="heading regular">Thumbnails</h2>
      <div className="mt10"></div>
      <h2 className="heading small">galleryView</h2>
      <div className="mt10"></div>
      <ul className="movie-list">
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
              <div className="movie-list__year">2024</div>
            </div>
          </a>
        </li>
      </ul>
    </>
  );
}
