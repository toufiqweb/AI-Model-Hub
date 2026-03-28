import { Suspense } from "react";
import "./App.css";
import Banner from "./components/homePage/Banner";
import Footer from "./components/homePage/Footer";
import Models from "./components/homePage/models/Models";
import NavBar from "./components/homePage/NavBar";


const modelFetch = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

function App() {

  const modelPromise = modelFetch()

  return (
    <>
      <NavBar />
      <Banner />

      <Suspense fallback={<div className="min-h-[40vh] w-7xl mx-auto flex justify-center items-center"><span className="loading loading-ring loading-xl"></span></div>}>
        
        <Models modelPromise={modelPromise}/>

      </Suspense>

      <Footer/>
    </>
  );
}

export default App;
