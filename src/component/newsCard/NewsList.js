import React, { useContext } from "react";
import NewsCard from "./NewsCard";
import "./Card.css";
import "../paginate/Paginate";
import { ArticlesContext } from "../../context";
import emptyState from '../../assets/emptyState.png'

const NewsList = () => {
  const { articles } = useContext(ArticlesContext);
  console.log("articles from news list", articles);
  if (articles.length < 1) {
    return (
      <div className={"emptyState"}>
        <img src={emptyState} alt={"Nothing Found"}/>
        <p className={"notFound"}>
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
