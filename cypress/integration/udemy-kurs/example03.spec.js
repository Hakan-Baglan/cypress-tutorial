/// <reference types="cypress"/>

context("Tarayıcı fonksiyonları",()=>{
    const url1 = "https://test.iyikisordun.com/index2.html"
    const url2 = "https://test.iyikisordun.com/index3.html"
    
    it('Geri gelme', () => {
        cy.visit(url1)
        cy.visit(url2)
        cy.go("back") // cy.go(-1)
        cy.url().should("include","index2")
    })
    it('Geri gelme', () => {
        cy.go("forward") // cy.go(1)
        cy.url().should("include","index3")
    })
    it('Reload', () => {
      cy.pause()
      cy.reload()
    })
})