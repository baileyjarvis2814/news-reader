import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';
import SearchBar from '../components/SearchBar';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchArticles } from '../api/newsApi';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);

      try {
        const data = await fetchArticles();
        setArticles(data);
      } catch (error) {
        setError('Failed to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>News Reader</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ArticleList articles={filteredArticles} />
    </div>
  );
};

export default Home;
