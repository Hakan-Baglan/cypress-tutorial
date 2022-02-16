// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath')

before(() => {
    // spec dosyasındaki bütün testler koşmadan önce 1 kez çalıştırılır.
  })
  
  beforeEach(() => {
    // Her bir testten önce çalıştırılır.
    const userName = "cypress_test_1@gmail.com"
    const password = "admin_123"
    cy.visit(Cypress.config("baseUrl"))
    cy.login(userName, password)
    cy.url().should("include","index.php")
  })
  
  after(() => {
    // spec dosyasındaki bütün testler tamamlandığında sadece 1 kez çalıştırılır.
  })
  
  afterEach(() => {
    // Her bir testten sonra sadece 1 kez çalıştırılır.
  })