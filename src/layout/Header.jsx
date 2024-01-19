import { useState } from "react";
import { fetchSearchMovies } from "../utils/fetchMovies";

export default function Header({ setIsMegaMenuOpen, setHeaderSearchMovies }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchText = formData.get("text");

    fetchSearchMovies({ text: searchText }, setHeaderSearchMovies);
    setIsSearchOpen(false);

    // 검색 후 입력 필드 제거
    setTimeout(() => {
      e.target.reset();
    }, 1000);
  }

  return (
    <header className="header">
      <h1>
        <a href="#/">UrCinePick</a>
      </h1>
      <button
        className="btn-menu"
        aria-label="메뉴"
        onClick={() => setIsMegaMenuOpen(true)}
      ></button>
      <nav>
        <ul className="gnb">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Movies</a>
          </li>
          <li>
            <a href="">Favorite</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Search</a>
          </li>
        </ul>
      </nav>
      <div className="utillity">
        <button
          className="btn-search"
          aria-label="검색"
          onClick={() => setIsSearchOpen(true)}
        ></button>
        <button className="btn-insta" aria-label="인스타그램"></button>
        <button className="btn-facebook" aria-label="페이스북"></button>
        <button className="btn-watcha" aria-label="왓챠피디아"></button>
      </div>
      <dialog className="search" open={isSearchOpen}>
        <form onSubmit={submitHandler}>
          <input
            type="search"
            placeholder="Movie here to search."
            name="text"
          />
          <button
            type="submit"
            className="btn-search"
            aria-label="검색"
          ></button>
        </form>
        <button
          className="btn-close"
          aria-label="닫기"
          onClick={() => setIsSearchOpen(false)}
        ></button>
        <p className="txt-type1">
          엔터키를 누르시면 검색이 됩니다. 페이지로 돌아가고 싶으시다면 ESC키
          또는 닫기버튼을 눌러주세요.
        </p>
      </dialog>
    </header>
  );
}
