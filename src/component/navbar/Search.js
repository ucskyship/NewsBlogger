import React, { useState, useContext } from "react";
import { ArticlesContext } from "../../context";
import icon from "../../assets/searchIcon.svg";
import "./SearchBar.css";
const Search = () => {
  const { setArticles, articles, allArticles } = useContext(ArticlesContext);
  const [value, setValue] = useState("");

  const performSearch = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
    if (e.target.value === "") {
      console.log("all arts");
      console.log(allArticles);
      setArticles(allArticles);
      return;
    }
    const filterArts = articles.filter((article) =>
      article.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log("filtered arts", filterArts);

    setArticles(filterArts);
  };
  return (
    <div className={"container"}>
      <input
        className={"inputField"}
        type={"text"}
        placeholder={"Search here..."}
        value={value}
        onChange={(e) => performSearch(e)}
      />
      <img
        //   onClick={performSearch}
        className={"searchIcon"}
        src={icon}
        alt={"icon"}
      />
    </div>
  );
};

export default Search;
