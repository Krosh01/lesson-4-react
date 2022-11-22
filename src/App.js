import AboutUs from "./Layout/about/AboutUs";
import Arrival from "./Layout/arrival/Arrival";
import Brand from "./Layout/brand/Brand";
import Footer from "./Layout/footer/Footer";
import Header from "./Layout/header/header";
import Popular from "./Layout/popular/Popular";
import Home from "./pages/Home/Home";
import './SCSS/style.scss'

function App() {
  return (
    <>
    <Header/>
    <main>
      <Brand/>
      <Arrival/>
      <Popular/>
      <AboutUs/>
      <Home/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
