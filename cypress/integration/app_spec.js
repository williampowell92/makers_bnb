describe('My first test', function() {
  it('Displays hello world', function(){
    cy.visit('http://localhost:3000');
    cy.contains('Hello World').should('be.visible');
  });
});
