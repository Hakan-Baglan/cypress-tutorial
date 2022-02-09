/// <reference types="cypress" />

context("Alert", () => {
  it("Alert üzerinde ki texti dogrulama", () => {
    cy.visit("https://test.iyikisordun.com/pages/UI/modals.html")
    cy.get(".card.card-outline.card-primary > .card-body > button:nth-of-type(1)").click()
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Cypress alert kontrol.")
    })
  })
})
