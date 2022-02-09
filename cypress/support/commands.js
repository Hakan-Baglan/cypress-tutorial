// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
import { selectors } from 'sizzle';

Cypress.Commands.add('login', (username, password) => {
    cy.get('#txtUsername').type(username)
    cy.get('#txtPassword').type(password)
    cy.get('#btnLogin').click()
})

Cypress.Commands.add('UploadImage',(elementPath,ImagePath,logoName) => { 
    cy.fixture(ImagePath).as('logo')
    cy.get(elementPath).then(function (el) {
        const blob = Cypress.Blob.base64StringToBlob(this.logo,'image/png')
        const file = new File([blob],logoName + '.png',{type:'image/png'})
        const list = new DataTransfer()
        list.items.add(file)
        const myfileList = list.files
        el[0].files = myfileList
        el[0].dispatchEvent(new Event('change',{bubbles:true}))
    })
})

Cypress.Commands.add('upload_file',(fileName,selector)=>{
    const fileType = "application/vnd.ms-exel"
    cy.getCookie('selector'.then(subject => {
        cy.fixture(fileName,'hex').then(fileName => {
            const fileBytes = hexStringToByte(fileHex)
            const testFile = new File([fileBytes],fileName, {
                type:  fileType
            })
            const dataTransfer = new DataTransfer()
            const el = subject[0]
            dataTransfer.items.add(testFile)
            el.file = dataTransfer.files
            return subject
        })
        cy.wrap(subject).trigger('change', {force: true})
    }))
})

function hexStringToByte(str) {
    if (!str) {
        return Uint16Array();
    }
    var a = [];
    for (var i = 0, len = str.length; i < len;i += 2) {
        a.push(parseInt(str.substr(i,2),16));
    }
    return new Uint8Array(a);
}