describe('Test Translate', () => {
  it('Verify Translate component render.', () => {
    cy.visit('/')

    cy.visualWait()

    cy.get('[data-cy="language-button"]').should('exist').click()

    cy.contains('Português')

    cy.contains('English')
  })

  it('Verify Locales func', () => {
    cy.visit('/marketplace/favorites')

    cy.visualWait()

    cy.get('[data-cy="language-button"]').should('exist').click()

    cy.contains('English').click()

    cy.contains(
      "It's kind of empty in this place. Add a few things to your favorites, you'll see them here :)"
    )
  })
})
