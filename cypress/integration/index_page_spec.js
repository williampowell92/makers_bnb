describe('Index page', function() {
  beforeEach(function () {
    cy.visit('http://localhost:8000')
  })
  it('Displays a welcome message', function(){
    cy.contains('Welcome to MakersBnB').should('be.visible');
  })

  it('Has a submit button', function () {
    cy.get('form').submit();
    cy.contains('Welcome')
  })

  it('Submits text', function () {
    cy.get('.space_info')
      .type('Testing text')
      .should('have.value', 'Testing text')
  })
})
