# News Reader Application

## Overview

The **News Reader Application** is a front-end web application built with **React** that fetches and displays the latest news articles from the **News API**. The application provides users with a list of news articles, detailed views for each article, search functionality, and responsive navigation. It also includes features like error handling, and end-to-end testing with **Cypress**.

## Features

- **List of Articles**: Displays a list of news articles with their headline, image, description, and date.
- **Detailed Article View**: Provides detailed information for each article, including title, author, source, publication date, content, and a link to the full article.
- **Search Functionality**: Allows users to filter articles by keywords.
- **Error Handling**: Handles errors gracefully.
- **End-to-End Testing**: Uses Cypress for automated testing to ensure robust functionality.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For client-side routing.
- **Fetch API**: For making network requests to the News API.
- **Cypress**: For end-to-end testing.
- **HTML5**: For structuring the application's user interface.

## Getting Started

### Prerequisites

- **Node.js**: Make sure you have Node.js (version 14.x or higher) and npm installed on your machine.

### Installation

1. **Clone the Repository**

   git clone git@github.com:baileyjarvis2814/news-reader.git
   
   cd news-reader

2. **Install Dependencies**

   npm install

3. **Obtain a News API Key**

   Sign up for a free API key from the News API.
   Replace data in const api_key variable in src/api/newsApi.js with your actual API key.

4. **Start the Development Server**

   npm start
   The application will run on http://localhost:3000.

### Running Cypress Tests
Open Cypress Test Runner

npx cypress open
Run the Tests

Select the news_reader_spec.cy.js test file from the Cypress Test Runner and run the tests.

### Usage
   Homepage: Displays a list of articles fetched from the News API. You can use the search bar to filter articles by keywords.

   Article Details: Click on the "Read More" link for any article to navigate to its detail view, which includes more comprehensive information.

   Back Button: Use the "Back" button to return to the homepage from an article detail view.

   Modify API Requests: Adjust parameters in src/api/newsApi.js to fetch articles based on different countries, categories, or keywords.

### Acknowledgments
   News API for providing the news data.

   React for the front-end framework.

   Cypress for end-to-end testing tools.
