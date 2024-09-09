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

      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=4be2cca6e258406f96a6ac223ec374f9`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }

        const data = await response.json();
        const selectedArticle = data.articles.find(
          (article) => article.source.id === id || article.source.name === id
        );

        if (selectedArticle) {
          setArticle(selectedArticle);
        } else {
          setError('Article not found');
        }
      } catch (error) {
        setError('Failed to fetch articles. Please try again later.');
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
      {article && (
        <>
          <h1>{article.title}</h1>
          <p>By {article.author}</p>
          <img src={article.urlToImage} alt={article.title} />
          <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
          <p>{article.content}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read the full article at {article.source.name}
          </a>
        </>
      )}
    </div>
  );
};

export default ArticleDetail;
