import './App.css';
import NavBar from "./component/navbar/NavBar";
import NewsList from "./component/newsCard/NewsList";
import SearchBar from "./component/searchBar/SearchBar";
import Footer from "./component/footer/Footer";

function App() {
  return (
      <div>
        <NavBar/>
        <SearchBar/>
        <NewsList/>
        <Footer/>
      </div>
  );
}

export default App;
