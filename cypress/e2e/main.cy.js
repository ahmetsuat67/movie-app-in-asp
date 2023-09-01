describe('movie-app-main', () => {
  beforeEach(() => {
    
    cy.viewport(1200, 1200);
});
    it('main', () => {
     
      cy.visit('http://localhost:3000/')

      cy.url().should('include', '/')
      cy.login().click()
      cy.get('[data-test="movieImg"]').should('be.visible')
      cy.get('[data-test="overviewHeader"]').should('be.visible')
      cy.get('[data-test="overviewText"]').should('be.visible')
      cy.get('[data-test="voteAverage"]').should('be.visible')
      cy.get('[data-test="movieCreed III"]').should('be.visible').click()
      cy.get('[data-test="movieImg"]').should('be.visible')
      cy.get('[data-test="movieHeader"]').should('be.visible')
      cy.get('[data-test="videoSection"]').should('be.visible').click()
       cy.login()
      

      

      





      
  
  
  
    })
  })