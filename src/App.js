import './App.css';
import NavBar from "./component/navbar/NavBar";
import NewsList from "./component/newsCard/NewsList";
import Footer from "./component/footer/Footer";

function App() {
  return (
      <div>
        <NavBar/>
          <NewsList className={'allCards'}/>
          <Footer/>
      </div>
  );
}

export default App;
