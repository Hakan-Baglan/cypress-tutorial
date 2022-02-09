/// <reference types="cypress"/>

context("4 islem",()=>{
    const s1 = 9
    const s2 = 6
    let sonuc
    it.skip('Toplama', () => {
        sonuc = s1 + s2
        assert.equal(sonuc,15,"Toplama sonuc kontrolu")
    })
    it.only('Cıkarma', () => {
        sonuc = s1 - s2
        assert.isTrue(sonuc===0,"Toplama sonuc kontrolu")
    })

    it('Text Kontrolu', () => {
        const text1 = "Cypress io"
        expect(text1).to.have.string("io")
    })

})