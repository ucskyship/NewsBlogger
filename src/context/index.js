import React, { createContext, useState } from 'react';

const ArticlesContext = createContext();

const ArticlesContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  return (
    <ArticlesContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export { ArticlesContext, ArticlesContextProvider };
