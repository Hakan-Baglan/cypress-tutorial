/// <reference types="cypress" />

before(() => {
  // spec dosyasındaki bütün testler koşmadan önce 1 kez çalıştırılır.
})

beforeEach(() => {
  // Her bir testten önce çalıştırılır.
  const userName = "cypress_test_1@gmail.com"
  const password = "admin_123"
  cy.visit(Cypress.config("baseUrl"))
  cy.login(userName, password)
})

after(() => {
  // spec dosyasındaki bütün testler tamamlandığında sadece 1 kez çalıştırılır.
})

afterEach(() => {
  // Her bir testten sonra sadece 1 kez çalıştırılır.
})

context("Before-After", () => {
  it("1. Widget", () => {
    cy.get(".bg-info.small-box > .inner > h3").should("have.text", "150")
  })
  it("2. Widget", () => {
    cy.get(":nth-child(2) > .small-box > .inner > h3").should("have.text","53%")
  })
  it("3. Widget", () => {
    cy.get(":nth-child(3) > .small-box > .inner > h3").should("have.text","44")
  })
  it("4. Widget", () => {
    cy.get(":nth-child(4) > .small-box > .inner > h3").should("have.text","65")
  })
})
