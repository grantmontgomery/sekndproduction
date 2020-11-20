const sqlite = require("sqlite");

async function setUp() {
  const db = await sqlite.open("./mydb.sqlite");
  await db.migrate({ force: "last" });
}

setUp();
