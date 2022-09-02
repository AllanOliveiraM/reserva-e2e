describe('Test Favotites system', () => {
  it('Verify Favotites render.', () => {
    cy.visit('/marketplace/favorites')

    cy.visualWait()

    cy.contains(
      'Está meio vazio neste lugar... Adicione algumas coisinhas nos favoritos, você as verá aqui :)'
    )
  })

  it('Verify Favorites func.', () => {
    cy.visit('/')

    cy.visualWait()

    cy.get('[data-cy="add-favorite-5"]').should('exist').click()

    cy.visit('/marketplace/favorites')

    cy.contains('Jaqueta Casual Sarja')

    cy.get('[data-cy="add-favorite-5"]').should('exist').click()

    cy.contains(
      'Está meio vazio neste lugar... Adicione algumas coisinhas nos favoritos, você as verá aqui :)'
    )
  })
})
