import "./App.css";
import Banner from "./components/homePage/Banner";
import Footer from "./components/homePage/Footer";
import Models from "./components/homePage/models/Models";
import NavBar from "./components/homePage/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Models/>
      <Footer/>
    </>
  );
}

export default App;
