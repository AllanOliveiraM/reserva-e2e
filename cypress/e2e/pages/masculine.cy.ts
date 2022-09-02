describe('Test Masculine page', () => {
  it('Verify Masculine render.', () => {
    cy.visit('/marketplace/masculine')

    cy.visualWait()

    cy.get('[data-cy="page-masculine"]').should('exist')
  })

  it('Verify Product cards render.', () => {
    cy.visit('/marketplace/masculine')

    cy.visualWait()

    cy.contains('Camiseta Bolso Xadrez Quadrilha')
  })
})
