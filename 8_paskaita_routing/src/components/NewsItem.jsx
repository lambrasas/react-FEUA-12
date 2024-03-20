import React from "react";
import PropTypes from "prop-types";
import "./NewsItem.css";
const NewsItem = ({ article }) => {
  return (
    <div className="article">
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  );
};
NewsItem.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
export default NewsItem;
