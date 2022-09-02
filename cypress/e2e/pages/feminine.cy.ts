describe('Test Feminine page', () => {
  it('Verify Feminine render.', () => {
    cy.visit('/marketplace/feminine')

    cy.visualWait()

    cy.get('[data-cy="page-feminine"]').should('exist')
  })

  it('Verify Product cards render.', () => {
    cy.visit('/marketplace/feminine')

    cy.visualWait()

    cy.contains('Casaco Tricot Prata')
  })
})
