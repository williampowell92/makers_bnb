describe('Index page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000');
  });

  it('Displays a welcome message', () => {
    cy.contains('Welcome to MakersBnB').should('be.visible');
  });

  it('has a link to /spaces/new', () => {
    cy.get('.link-form').contains('Submit space for rent');
  });
});
