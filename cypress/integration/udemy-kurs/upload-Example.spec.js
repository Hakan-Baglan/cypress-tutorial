/// <reference types="cypress" />

context("Upload",()=>{

    it('File Upload', () => {
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
        // cy.get("#exampleInputFile").attachFile("upload/nx.txt")
        cy.UploadImage("#exampleInputFile","upload/corba.png","corba")
        cy.get(".input-group [for]").should("have.text","corba.png")
    });
})