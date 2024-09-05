import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';
import SearchBar from '../components/SearchBar';
import mockData from '../mock/mockArticles.json'; // Will create this mock data file next

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Use mock data initially
  useEffect(() => {
    setArticles(mockData.articles); // Adjust to use the 'articles' array from the mock data
  }, []);

  // Filter articles based on search term
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>News Reader</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ArticleList articles={filteredArticles} />
    </div>
  );
};

export default Home;
