// src/pages/ArticleDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams();

  // Here, we would fetch the article data using the ID from the URL params
  // For now, we will return a placeholder
  return (
    <div>
      <h1>Article Detail</h1>
      <p>Details of article with ID: {id}</p>
      {/* More article details will go here */}
    </div>
  );
};

export default ArticleDetail;
