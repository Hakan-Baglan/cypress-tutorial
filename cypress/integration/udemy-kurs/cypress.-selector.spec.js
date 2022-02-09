/// <reference types="cypress"/>

context("cypress selector",()=>{
    const email1 = "asdffsf@asads.com"
    const password1 = "1234"
    ////
    const email2 = "cypress_test_1@gmail.com"
    const password2 = "admin_123"
    it('Hatalı Login ', () => {
        cy.visit(Cypress.config("baseUrl"))

        cy.get('[type="email"]').type(email1)
        cy.get('[type="password"]').type(password1)
        cy.wait(2*1000)
        cy.get('.btn').click()
        cy.get('#fail').should("include.text","Girdiğiniz bilgiler hatalıdır.")
    });

    it('Login ', () => {
        cy.visit(Cypress.config("baseUrl"))

        cy.get('[type="email"]').type(email2)
        cy.get('[type="password"]').type(password2)
        cy.wait(2*1000)
        cy.get('.btn').click()
        cy.get('.m-0').should('have.text','Dashboard')
        cy.url().should('include','index.php')
    });
})