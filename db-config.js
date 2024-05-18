//local database credentiols
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dvdrental",
  password: "050799",
  port: 5432,
});

module.exports = pool;
