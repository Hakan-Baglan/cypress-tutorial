/// <reference types="cypress"/>


context("ilk testimiz",()=>{
    it('visit', () => {
        cy.visit(Cypress.config("baseUrl"))
    })
    it('Url dogrulama', () => {
        cy.url().should("include",Cypress.config("baseUrl"))
        cy.get("body > form > div > h1").should("have.text","Dashboard")
    })

    it('Protokol Dogrulama', () => {
        cy.location("protocol").should("eq","https:")
    })
})