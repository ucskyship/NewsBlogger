import React, { useEffect, useState } from "react";
import axios from 'axios'
import NewsCard from "./NewsCard";

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=b983f6103551414eafeb34bb73618939')
            console.log(response)
            setArticles(response.data.articles);
        }
        getArticles();
    },[])
    return(
        <div>
            {articles.map(article =>
                    <NewsCard
                        key={article.source.id}
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
            )}
        </div>
    )
}

export default NewsList;