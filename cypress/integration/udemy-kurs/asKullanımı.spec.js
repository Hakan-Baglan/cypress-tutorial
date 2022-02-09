/// <reference types="cypress" />


context("as kullanımı",()=>{
    it.skip('checkbox', () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
        cy.get("[type='checkbox']").check("option1",{force: true}).should("be.checked")
    })
    it('checkbox', () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
        cy.get("[type='checkbox']").as("option1")
        cy.wait(2000)
        cy.get("@option1").check("option1",{force: true}).should("be.checked")
    })
})