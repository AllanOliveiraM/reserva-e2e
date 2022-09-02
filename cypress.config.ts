import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1600,
  viewportHeight: 900,
  fixturesFolder: false,
  defaultCommandTimeout: 15000,
  requestTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
    baseUrl: 'http://localhost:3000',
  },
})
