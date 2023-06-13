import React, { useEffect, useContext } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import "./Card.css";
import "../paginate/Paginate";
import { ArticlesContext } from "../../context";

const NewsList = () => {
  const { articles } = useContext(ArticlesContext);
  console.log("articles from news list", articles);
  if (articles.length < 1) {
    return (
      <div className={"allCards"}>
        <p
          style={{
            border: "solid 1px red",
          }}
        >
          Nothing Found
        </p>
      </div>
    );
  }

  return (
    <div className={"allCards"}>
      {articles.map((article, index) => (
        <NewsCard
          key={index}
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
        />
      ))}
    </div>
  );
};
export default NewsList;
