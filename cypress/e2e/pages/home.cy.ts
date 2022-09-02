describe('Test Home page', () => {
  it('Verify Home render.', () => {
    cy.visit('/')

    cy.visualWait()

    cy.get('[data-cy="page-home"]').should('exist')
  })

  it('Verify Product cards render.', () => {
    cy.visit('/')

    cy.visualWait()

    cy.contains('Jaqueta Casual Sarja')
  })
})
