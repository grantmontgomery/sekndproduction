const now = new Date();
now.setDate(now.getDate() + 7);

const month = now.getMonth() + 1;
const date = now.getDate();
const year = now.getFullYear();

function setCorrectShortTime(hours) {
  switch (hours) {
    case 12:
      return "12:00 PM";
    case 24:
      return "12:00 AM";
    default:
      return now.getHours() > 12
        ? `${now.getHours() - 12}:00 PM`
        : `${now.getHours()}:00 AM`;
  }
}

const startDateTime = `${month}/${date}/${year}, ${setCorrectShortTime(
  now.getHours()
)}`;

const future = new Date(startDateTime);

future.setHours(future.getHours() + 7);

const futureMonth = future.getMonth() + 1;
const futureDate = future.getDate();
const futureYear = future.getFullYear();

const endDateTime = `${futureMonth}/${futureDate}/${futureYear}, ${setCorrectShortTime(
  future.getHours()
)}`;

describe("Full query", () => {
  it("makes a full ALL type query in las vegas", () => {
    cy.visit("http://localhost:3000");
    cy.get(".SearchIcon_searchIcon__1og0f").click();
    cy.get(".WhereInput_where__1i22D > input").type("las vegas");
    cy.get(".WhereInput_where__1i22D > select").select("Within 5 miles");
    cy.get(".PlacesInput_places__2Ok5m > input").type("bars");
    cy.get(".WhenInput_from__15wDW").type(startDateTime);
    cy.get(".SearchBox_searchBox__3awOS").click();
    cy.get(".WhenInput_to__2hwtq").clear().type(endDateTime);
    cy.get(".SearchBox_searchBox__3awOS").click();
    cy.get(".SearchBox_searchButton__2okpi").click();
  });
});
