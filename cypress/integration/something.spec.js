// type definitions for Cypress object "cy"
/// <reference types="cypress" />

beforeEach(() => {
    cy.visit("/");
})

context('Input something', () => {

    
    it('input field is focused', () => {
        cy.focused()
            .should("have.attr", "data-testid", "forInput");
    });
    
    it('Able to type something', () => {
        const text = "moshe is the king";

        cy.get('[data-testid="forInput"]')
            .type(text)
            .should("have.value", text);
    });
}); 


context('Input blabal', () => {
    it('jjjjj', () => {
        cy.get('[data-testid="forInput"]')
            .type('sfsadfs{enter}'); 
    })
})
