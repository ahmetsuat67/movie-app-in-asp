describe('movie-app-signup', () => {
    beforeEach(() => {
        cy.pause()
        cy.viewport(1200, 1200);
    });
    it('signup', () => {
     
      cy.visit('http://localhost:3000/')
      cy.get('[data-test="avatar"]').should('be.visible').click()            
      cy.get('[data-test="register"]').should('be.visible').click()
      cy.get('[data-test="signHeader"]').should('be.visible')
      cy.get('[data-test="firstNameLbl"]').should('be.visible')
      cy.get('[data-test="firstNameInput"]').should('be.visible').type('test')
      cy.get('[data-test="lastNameLbl"]').should('be.visible')
      cy.get('[data-test="lastNameInput"]').should('be.visible').type('test')
      cy.get('[data-test="emailLbl"]').should('be.visible')
      cy.get('[data-test="emailInput"]').should('be.visible').type('test@gmail.com')
      cy.get('[data-test="passwordLbl"]').should('be.visible')
      cy.get('[data-test="passwordInput"]').should('be.visible').type('test12334')
      cy.get('[data-test="registerBtn"]').should('be.visible').click()
      cy.wait(8000)
      cy.url().should('include', '/')
      cy.get('[data-test="avatar"]').should('be.visible').click()
      cy.get('[data-test="logout"]').should('be.visible').click()                    
      cy.get('[data-test="avatar"]').should('be.visible').click()
      cy.get('[data-test="login"]').should('be.visible').click()
      cy.get('[data-test="emailLbl"]').should('be.visible')
      cy.get('[data-test="emailInput"]').should('be.visible').type('test@gmail.com')
      cy.get('[data-test="passwordLbl"]').should('be.visible')
      cy.get('[data-test="passwordInput"]').should('be.visible').type('test12334')
      cy.get('[data-test="loginBtn"]').should('be.visible').click({force: true})
      cy.get('[data-test="avatar"]').should('be.visible').click()
      cy.get('[data-test="logout"]').should('be.visible').click()   

      
  
    })
  })