import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const ArticlesContext = createContext();

const ArticlesContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        // "https://gnews.io/api/v4/top-headlines?category=general&apikey=ac9fb33216075883d55f99aefbcb6053"
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
