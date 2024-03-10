describe("My Cypress Test", () => {
    it("screenshot homepage", () => {
      cy.visit("https://stg-provider.ihx.in");
      cy.argosScreenshot("homepage");
    });
  });