import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Main from "./components/Main";
import MegaMenu from "./components/MegaMenu";
import "./scss/style.scss";
import { useState } from "react";

function App() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [headerSearchMovies, setHeaderSearchMovies] = useState([]);

  return (
    <>
      <Header
        setIsMegaMenuOpen={setIsMegaMenuOpen}
        setHeaderSearchMovies={setHeaderSearchMovies}
      />
      <MegaMenu
        isMegaMenuOpen={isMegaMenuOpen}
        setIsMegaMenuOpen={setIsMegaMenuOpen}
      />
      <Main headerSearchMovies={headerSearchMovies} />
      <Footer />
    </>
  );
}

export default App;
