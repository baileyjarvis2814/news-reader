describe('News Reader Application', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/top-headlines*', { fixture: 'mockArticles.json' }).as('getArticles');
    cy.visit('http://localhost:3000/');
  });

  it('should display a list of articles', () => {
    cy.wait('@getArticles');
    cy.get('.article-card').should('have.length.greaterThan', 0);
  });

  it('should filter articles based on the search term', () => {
    cy.wait('@getArticles');
    cy.get('.search-bar input').type('Tesla');
    cy.get('.article-card').each(($el) => {
      cy.wrap($el).contains('Tesla');
    });
  });

  it('should navigate to the article detail page and display the correct content', () => {
    cy.wait('@getArticles');
    cy.get('.article-card').first().find('a').click();
    cy.url().should('include', '/article/');
    cy.get('h1').should('exist');
    cy.get('.back-button').should('exist');
  });

  it('should navigate back to the homepage when the back button is clicked', () => {
    cy.wait('@getArticles');
    cy.get('.article-card').first().find('a').click();
    cy.get('.back-button').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.article-card').should('have.length.greaterThan', 0);
  });
});
