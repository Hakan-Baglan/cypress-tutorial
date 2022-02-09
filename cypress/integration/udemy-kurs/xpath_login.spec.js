/// <reference types="cypress"/>

context("Xpath",()=>{
    const emailInputXPath = "//input[@type='email' and @name='username']"
    const passInputXPath = "//input[@type='password' and @name='password']"
    const btnXPath = "//input[@type='submit']"
    it('Xpath Login', () => {
        cy.visit(Cypress.config("baseUrl"))
        cy.xpath(emailInputXPath).type("cypress_test_1@gmail.com")
        cy.xpath(passInputXPath).type("admin_123")
        cy.xpath(btnXPath).click()
    })
})