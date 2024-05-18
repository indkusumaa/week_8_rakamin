const pool = require("../db-config");
const fs = require("fs");

//untuk membaca sql command yang ada pada file seeding.sql
const seedQuery = fs.readFileSync("db/seeding.sql", { encoding: "utf-8" });
// const seedQ = `INSERT INTO actor ( first_name, last_name, last_update) VALUES ('Leonardo','Dicaprio',NOW())`;
// console.log(seedQuery);

//query untuk melakukan seeding pada database dvdrental
pool.query(seedQuery, (err, res) => {
  console.log(err);
  console.log("Seeding Complete");
  pool.end();
});
