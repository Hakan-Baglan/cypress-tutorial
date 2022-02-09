/// <reference types="cypress" />

context("Dropdown",()=>{

    it.skip('Select', () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
        cy.get("div:nth-of-type(2) > div:nth-of-type(1) > .form-group > .custom-select")
          .select("option 2").should("have.value","option 2")
    })

    it('Multi Select', () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
        cy.get("div:nth-of-type(3) > div:nth-of-type(1) > .form-group > .custom-select")
          .select(["option 1","option 2","option 3"])
          .invoke("val")
          .should("deep.equal",["option 1","option 2","option 3"])
    })
})