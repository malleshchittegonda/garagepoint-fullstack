const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/service-bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("GaragePoint API Running");
});

db.serialize(() => {
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
        CREATE TABLE IF NOT EXISTS vehicles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_id INTEGER,
        vehicle_number TEXT,
        brand TEXT,
        model TEXT
        )
      `);

    db.run(`
        CREATE TABLE IF NOT EXISTS service_bookings (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          vehicle_id INTEGER,
          service_type TEXT,
          booking_date TEXT,
          status TEXT,
          mechanic_name TEXT
        )
      `);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});