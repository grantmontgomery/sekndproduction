const { createYield } = require("typescript");

describe("Testing Seknd Application", () => {
  it("tests a visit to the site", () => {
    cy.visit("http://localhost:3000");
  });
});
