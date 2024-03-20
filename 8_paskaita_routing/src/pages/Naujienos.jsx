import React, { useState, useEffect } from "react";
import NewsItem from "../components/NewsItem";
import "../components/Naujienos.css";
const Naujienos = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((articles) => {
        let randomArticles = [];

        for (let i = 0; i < 2; i++) {
          let randomId = Math.floor(Math.random() * 100 + 1);
          let foundArticle = articles.find((article) => article.id == randomId);
          randomArticles.push(foundArticle);
        }

        setNews(randomArticles);
      });
  }, []);

  return (
    <div className="articleContainer">
      {news.map((article) => {
        return <NewsItem key={article.id} article={article} />;
      })}
    </div>
  );
};

export default Naujienos;
