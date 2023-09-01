describe("movie-app-navbar", () => {
  beforeEach(() => {
    cy.pause();
    cy.viewport(1200, 1200);
  });
  it("navbar", () => {
    cy.visit("http://localhost:3000/");
    cy.title().should("eq", "React App");
    cy.get('[data-test="movieNav"]').should("be.visible");
    cy.get('[data-test="switchMode"]').should("be.visible");
    cy.get('[data-test="avatar"]').should("be.visible").click();
    cy.get('[data-test="register"]').should("be.visible");
    cy.get('[data-test="login"]').should("be.visible");
    cy.get('[data-test="logout"]').should("be.visible");
    cy.get('[data-test="avatar"]').should("be.visible").click();
    cy.get('[data-test="logout"]').should("be.visible").click();
  });
});
