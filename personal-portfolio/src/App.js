import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Brands } from "./components/Brands";
import { Projects } from "./components/Projects";
import Packages from "./components/Package";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Brands />
      <Projects />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
