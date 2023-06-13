import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const ArticlesContext = createContext();

const ArticlesContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=apple&from=2023-06-07&to=2023-06-07&sortBy=popularity&apiKey=b983f6103551414eafeb34bb73618939"
      );

      setArticles(response.data.articles);
      setAllArticles(response.data.articles);
    };
    getArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, setArticles, allArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export { ArticlesContext, ArticlesContextProvider };
