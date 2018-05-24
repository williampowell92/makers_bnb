describe('Adding a space', function() {
  beforeEach(function () {
    cy.visit('http://localhost:8000');
  })

  it('adds space to index page', function() {
    cy.get('.link-form').click()
    cy.url().should('eq', 'http://localhost:8000/spaces/new')
    cy.get('.space-name')
      .type("Igor's house")
    cy.get('form').submit()
    cy.url().should('eq', 'http://localhost:8000/')
    cy.contains("Igor's house")
  })
})
