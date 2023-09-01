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

Cypress.Commands.add("login",() => {
cy.get('[data-test="avatar"]').should('be.visible').click()
cy.get('[data-test="login"]').should('be.visible').click()
cy.get('[data-test="emailLbl"]').should('be.visible')
cy.get('[data-test="emailInput"]').should('be.visible').type('test@gmail.com')
cy.get('[data-test="passwordLbl"]').should('be.visible')
cy.get('[data-test="passwordInput"]').should('be.visible').type('test12334')
cy.get('[data-test="loginBtn"]').should('be.visible').click({force: true})
})