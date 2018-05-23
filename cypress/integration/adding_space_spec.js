describe('Adding a space', function() {
  it('Adds a space when you fill in the form', function() {
    cy.visit('http://localhost3000/');
    cy.get('.space_info')
      .type('My House')
    cy.get('form').submit()
    cy.contains('My house')
  })
})
