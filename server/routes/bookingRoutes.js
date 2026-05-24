const express = require("express");

const router = express.Router();

const db = require("../database/db");

router.post("/", (req, res) => {

  const {
    vehicleNumber,
    serviceType,
    bookingDate,
    notes
  } = req.body;

  const sql = `
    
    INSERT INTO bookings
    (
      vehicleNumber,
      serviceType,
      bookingDate,
      notes,
      status
    )

    VALUES (?, ?, ?, ?, ?)

  `;

  db.run(
    sql,
    [
      vehicleNumber,
      serviceType,
      bookingDate,
      notes,
      "Pending"
    ],
    function(err) {

      if (err) {

        return res.status(500).json({
          message: err.message
        });

      }

      res.json({
        message: "Booking Created Successfully"
      });

    }
  );

});

router.get("/", (req, res) => {

  const sql = `
    
    SELECT * FROM bookings
    
    ORDER BY id DESC

  `;

  db.all(sql, [], (err, rows) => {

    if (err) {

      return res.status(500).json({
        message: err.message
      });

    }

    res.json(rows);

  });

  router.put("/:id", (req, res) => {

  const id = req.params.id;

  const {
    status,
    assignedMechanic
  } = req.body;

  const sql = `
    
    UPDATE bookings
    
    SET
      status = ?,
      assignedMechanic = ?
    
    WHERE id = ?

  `;

  db.run(
    sql,
    [
      status,
      assignedMechanic,
      id
    ],
    function(err) {

      if (err) {

        return res.status(500).json({
          message: err.message
        });

      }

      res.json({
        message:
          "Booking Updated Successfully"
      });

    }
  );

});

});

module.exports = router;