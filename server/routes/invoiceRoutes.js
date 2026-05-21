const express = require("express");
const db = require("../config/db");

const router = express.Router();

// Create Invoice
router.post("/", (req, res) => {
  const {
    booking_id,
    service_charge,
    spare_parts_cost
  } = req.body;

  const total =
    Number(service_charge) +
    Number(spare_parts_cost);

  const sql = `
    INSERT INTO invoices(
      booking_id,
      service_charge,
      spare_parts_cost,
      total
    )
    VALUES (?, ?, ?, ?)
  `;

  db.run(
    sql,
    [
      booking_id,
      service_charge,
      spare_parts_cost,
      total
    ],
    function (err) {
      if (err) {
        return res.status(500).json({
          message: err.message
        });
      }

      res.json({
        message: "Invoice Created",
        total
      });
    }
  );
});

// Get All Invoices
router.get("/", (req, res) => {
  db.all(
    `SELECT * FROM invoices`,
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({
          message: err.message
        });
      }

      res.json(rows);
    }
  );
});

module.exports = router;