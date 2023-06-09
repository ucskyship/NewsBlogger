import React from "react";
import './App.css';
import NavBar from "./component/navbar/NavBar";
import NewsList from "./component/newsCard/NewsList";
import Footer from "./component/footer/Footer";

function App() {
  return (
      <div>
          <NavBar/>
          <div className={'news'}><h1> News </h1></div>
          <NewsList className={'allCards'}/>
          <Footer/>
      </div>
  );
}

export default App;
