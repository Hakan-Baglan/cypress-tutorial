/// <reference types="cypress" />

context("İframe", () => {
    const getIframeDocument = () => {
        return cy.get('iframe#FileFrame').its('0.contentDocument').should('exist')
    }
    const getIframeBody = () => {
        return getIframeDocument().its('body').should('not.be.undefined').then(cy.wrap)
    }
    it('', () => {
        cy.visit("https://test.iyikisordun.com/pages/UI/ribbons.html")
        getIframeBody().find('#name_').should('have.text','Cypress_')
        getIframeBody().find('#surname_').should('have.text','Test')
    });
})
