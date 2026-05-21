const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.get("/summary", (req, res) => {
  db.all(
    `SELECT * FROM service_bookings`,
    [],
    (err, bookings) => {
      if (err) {
        return res.status(500).json({
          message: err.message
        });
      }

      db.all(
        `SELECT * FROM invoices`,
        [],
        (err, invoices) => {
          if (err) {
            return res.status(500).json({
              message: err.message
            });
          }

          const totalBookings =
            bookings.length;

          const completedServices =
            bookings.filter(
              (item) =>
                item.status === "Delivered"
            ).length;

          const pendingServices =
            bookings.filter(
              (item) =>
                item.status !== "Delivered"
            ).length;

          const totalRevenue =
            invoices.reduce(
              (sum, invoice) =>
                sum + invoice.total,
              0
            );

          res.json({
            totalBookings,
            completedServices,
            pendingServices,
            totalRevenue
          });
        }
      );
    }
  );
});

module.exports = router;