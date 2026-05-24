const express = require("express");

const router = express.Router();

const db = require("../database/db");

router.post("/", (req, res) => {

  const {
    vehicleNumber,
    brand,
    model,
    year
  } = req.body;

  const sql = `
    
    INSERT INTO vehicles
    (
      vehicleNumber,
      brand,
      model,
      year
    )
    
    VALUES (?, ?, ?, ?)

  `;

  db.run(
    sql,
    [
      vehicleNumber,
      brand,
      model,
      year
    ],
    function(err) {

      if (err) {

        return res.status(500).json({
          message: err.message
        });

      }

      res.json({
        message: "Vehicle Added Successfully",
        id: this.lastID
      });

    }
  );

});

router.get("/", (req, res) => {

  const sql = `
    
    SELECT * FROM vehicles
    
  `;

  db.all(sql, [], (err, rows) => {

    if (err) {

      return res.status(500).json({
        message: err.message
      });

    }

    res.json(rows);

  });

});

router.put("/:id", (req, res) => {

  const id = req.params.id;

  const {
    vehicleNumber,
    brand,
    model,
    year
  } = req.body;

  const sql = `
    
    UPDATE vehicles
    
    SET
      vehicleNumber = ?,
      brand = ?,
      model = ?,
      year = ?
    
    WHERE id = ?

  `;

  db.run(
    sql,
    [
      vehicleNumber,
      brand,
      model,
      year,
      id
    ],
    function(err) {

      if (err) {

        return res.status(500).json({
          message: err.message
        });

      }

      res.json({
        message: "Vehicle Updated Successfully"
      });

    }
  );

});

router.delete("/:id", (req, res) => {

  const id = req.params.id;

  const sql = `
    
    DELETE FROM vehicles
    
    WHERE id = ?

  `;

  db.run(
    sql,
    [id],
    function(err) {

      if (err) {

        return res.status(500).json({
          message: err.message
        });

      }

      res.json({
        message: "Vehicle Deleted Successfully"
      });

    }
  );

});

module.exports = router;