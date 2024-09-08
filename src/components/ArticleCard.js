import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  const articleId = article.source.id || article.source.name;

  return (
    <div className="article-card">
      <img src={article.urlToImage} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
      <Link to={`/article/${articleId}`}>Read More</Link>
    </div>
  );
};

export default ArticleCard;
