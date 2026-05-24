const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./database/garagepoint.db",
  (err) => {

    if (err) {
      console.log(err.message);
    } else {
      console.log("SQLite Connected");
    }

  }
);

db.serialize(() => {

  db.run(`
    
    CREATE TABLE IF NOT EXISTS vehicles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      vehicleNumber TEXT,
      brand TEXT,
      model TEXT,
      year TEXT
    )

  `);

  db.run(`

  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT
  )

`);

    db.run(`

  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vehicleNumber TEXT,
    serviceType TEXT,
    bookingDate TEXT,
    notes TEXT,
    status TEXT,
    assignedMechanic TEXT
  )

`);

});

module.exports = db;