export default function MegaMenu({ isMegaMenuOpen, setIsMegaMenuOpen }) {
  return (
    <div className={`megamenu ${isMegaMenuOpen && "open"}`}>
      <button
        className="btn-close"
        aria-label="닫기"
        onClick={() => setIsMegaMenuOpen(false)}
      ></button>
      <nav>
        <ul className="megamenu__list">
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
      <div className="bg-mega"></div>
    </div>
  );
}
