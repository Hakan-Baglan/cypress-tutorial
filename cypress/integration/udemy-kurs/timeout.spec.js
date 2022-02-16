/// <reference types="cypress" />

context("Timeout",()=>{
    Cypress.config("defaultCommandTimeout",3000)
    it('Default Timeout Degistirme', () => {
        cy.get("[class='m-0 text-dark']",{ timeout:1000 }).should("have.text","Dashboard")
    })
})