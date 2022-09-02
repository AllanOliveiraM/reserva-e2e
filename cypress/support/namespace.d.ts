/// <reference types="cypress" />
/// <reference types="cypress-data-session" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Wait for visual only purposes. Is enabled by 'useVisualSpeeddown'
     * cypress environment variable in 'cypress.env.json' file. A custom global
     * default time can be defined in the 'cypress.env.json' file using the
     * 'timeMsToVisualWait' environment variable.
     */
    visualWait: (time?: number) => void
  }
}
