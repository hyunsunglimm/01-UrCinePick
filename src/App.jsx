import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Main from "./components/Main";
import MegaMenu from "./components/MegaMenu";
import "./scss/style.scss";

function App() {
  return (
    <>
      <Header />
      <MegaMenu />
      <Main />
      <Footer />
    </>
  );
}

export default App;
