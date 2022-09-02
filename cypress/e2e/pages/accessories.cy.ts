describe('Test Accessories page', () => {
  it('Verify Accessories render.', () => {
    cy.visit('/marketplace/accessories')

    cy.visualWait()

    cy.get('[data-cy="page-accessories"]').should('exist')
  })

  it('Verify Product cards render.', () => {
    cy.visit('/marketplace/accessories')

    cy.visualWait()

    cy.contains('Mochila Office')
  })
})
