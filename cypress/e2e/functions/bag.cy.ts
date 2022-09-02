describe('Test Bag modal', () => {
  it('Verify Bag render.', () => {
    cy.visit('/')

    cy.visualWait()

    cy.get('[data-cy="bag-button"]').should('exist').click()

    cy.contains('Conteúdo da sua bolsa')
  })

  it('Verify Product func in bag.', () => {
    cy.visit('/')

    cy.visualWait()

    cy.get('[data-cy="put-in-bag-5"]').should('exist').click()

    cy.get('[data-cy="bag-button"]').should('exist').click()

    cy.contains('Valor total: R$ 899,00')

    cy.get('[data-cy="remove-product-5"]').should('exist').click()

    cy.contains('Finalizar')

    cy.get('[data-cy="close-bag"]').should('exist').click()
  })
})
