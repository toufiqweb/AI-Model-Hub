import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/homePage/Banner";
import Footer from "./components/homePage/Footer";
import Models from "./components/homePage/models/Models";
import NavBar from "./components/homePage/NavBar";
import Tabs from "./components/tabs/Tabs";
import Cart from "./components/homePage/cart/Cart";


const modelFetch = async () => {
  const res = await fetch("/models.json")
  return res.json()
}
const modelPromise = modelFetch()

function App() {

  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);


  // console.log(carts);
  
  return (
    <>
      <NavBar />
      <Banner />

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} carts={carts}/>

      {
        activeTab === "model"?  
         <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>
        :  
        <Cart carts={carts} setCarts={setCarts}/> 
      }
     
      

      <Footer/>
    </>
  );
}

export default App;



// <Suspense fallback={
//           <div className="min-h-[40vh] w-7xl mx-auto flex justify-center items-center">
//             <span className="loading loading-ring loading-xl"></span>
//           </div>}>
          
//           <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>
//           </Suspense> 
          