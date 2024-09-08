import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticleDetails = async () => {
      setLoading(true);

      const cachedArticles = localStorage.getItem('articles');
      if (cachedArticles) {
        const articles = JSON.parse(cachedArticles);
        const selectedArticle = articles.find((article) => article.source.id === id || article.source.name === id);

        if (selectedArticle) {
          setArticle(selectedArticle);
        } else {
          setError('Article not found');
        }
      } else {
        setError('No cached articles found. Please reload the homepage.');
      }

      setLoading(false);
    };

    loadArticleDetails();
  }, [id]);

  if (loading) return <div>Loading article...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="article-detail">
      <button onClick={() => navigate(-1)} className="back-button">Back</button>
      <h1>{article.title}</h1>
      <p>By {article.author}</p>
      <img src={article.urlToImage} alt={article.title} />
      <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read the full article at {article.source.name}
      </a>
    </div>
  );
};

export default ArticleDetail;
