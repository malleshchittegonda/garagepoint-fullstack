const Database = require("better-sqlite3");

const db = new Database("garagepoint.db");

console.log("SQLite Connected");

module.exports = db;