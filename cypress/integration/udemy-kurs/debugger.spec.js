/// <reference types="cypress" />

context("Hata Ayıklama Yontemleri",()=>{
    it('Pause,Debugger ve Debug', () => {
        cy.get("[for='todoCheck1']").click()
        cy.get(".todo-list.ui-sortable > li:nth-of-type(1)").should("have.class","done")
        cy.get("li:nth-of-type(3) > .text").invoke("text").then((str)=>{
            str = str.trim()
            cy.log(str)
        })
        cy.get("[for='todoCheck4']").click()
    });
})