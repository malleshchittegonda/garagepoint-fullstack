const express = require("express");

const router = express.Router();

const db = require("../database/db");

router.get("/", (req, res) => {

  const analytics = {};

  db.get(
    "SELECT COUNT(*) AS totalVehicles FROM vehicles",
    [],
    (err, vehicleData) => {

      analytics.totalVehicles =
        vehicleData.totalVehicles;

      db.get(
        "SELECT COUNT(*) AS totalBookings FROM bookings",
        [],
        (err, bookingData) => {

          analytics.totalBookings =
            bookingData.totalBookings;

          db.get(
            `
            SELECT COUNT(*) AS completedServices
            
            FROM bookings
            
            WHERE status = 'Completed'
            `,
            [],
            (err, completedData) => {

              analytics.completedServices =
                completedData.completedServices;

              db.get(
                "SELECT COUNT(*) AS totalUsers FROM users",
                [],
                (err, userData) => {

                  analytics.totalUsers =
                    userData.totalUsers;

                  res.json(analytics);

                }
              );

            }
          );

        }
      );

    }
  );

});

module.exports = router;