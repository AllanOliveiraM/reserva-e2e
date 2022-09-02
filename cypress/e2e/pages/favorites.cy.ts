describe('Test Favorites page', () => {
  it('Verify Favorites render.', () => {
    cy.visit('/marketplace/favorites')

    cy.visualWait()

    cy.get('[data-cy="page-favorites"]').should('exist')
  })

  it('Verify Product cards render.', () => {
    cy.visit('/marketplace/favorites')

    cy.visualWait()

    cy.contains(
      'Está meio vazio neste lugar... Adicione algumas coisinhas nos favoritos, você as verá aqui :)'
    )
  })
})
