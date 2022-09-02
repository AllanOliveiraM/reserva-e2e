type CookieStore = {
  cookie: Cypress.Cookie | null
}

Cypress.Commands.add('visualWait', time => {
  if (Cypress.env('useVisualSpeeddown')) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(time || Cypress.env('timeMsToVisualWait') || 2000)
  }
})
