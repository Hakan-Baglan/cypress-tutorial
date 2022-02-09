/// <reference types="cypress" />


context("Form Elemanları",()=>{


    it.skip('Input box', () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
        cy.get("#exampleInputEmail1").clear()
    })

    it.skip('Input box', () => {
        cy.reload()
        cy.pause()
        cy.get("#exampleInputEmail1").type("ali_veli@gmail.com")
    })
    
    it.skip('Input box', () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
        cy.pause()
        cy.get("#exampleInputEmail1").should("have.value","ornek_email@test.com")
    })

    it.skip('Radio buttonu', () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
        cy.pause()
        cy.get("[type='radio']").check("radio_11",{force: true})
    })

    it('input', () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/advanced.html")
        cy.get("div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > .select2.select2-container.select2-container--default  span[role='combobox'] > span[role='presentation'] > b[role='presentation']").click()
        cy.get(".select2-dropdown.select2-dropdown--below  input[role='searchbox']").type("Alaska").type("{enter}")
    })

    it('checkbox', () => {
        cy.get("[type='checkbox'").check(["pr2","dg2"],{force: true}).should("be.checked")
    })

    it('Unchecked', () => {
        cy.get("[type='checkbox'").uncheck(["pr2","dg2"],{force: true}).should("not.be.checked")
    })

})