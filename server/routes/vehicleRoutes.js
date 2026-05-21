const express = require("express");
const db = require("../config/db");

const router = express.Router();

//Add Vehicle
router.post("/",(req, res) => {
    const {
        customer_id,
        vehicle_number,
        brand,
        model
    } = req.body;

    const sql = `
        INSERT INTO vehicles(
            customer_id,
            vehicle_number,
            brand,
            model
        )
        VALUES(?, ?, ?, ?)
    `;

    db.run(
        sql,
        [
            customer_id,
            vehicle_number,
            brand,
            model
        ],
        function (err) {
            if(err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            res.json({
                message: "Vehicle Added"
            });
        }
    );
});

//Get Vehicles
router.get("/",(req, res) => {
    db.all(
        `SELECT * FROM vehicles`,
        [],
        (err, rows) => {
            if(err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            res.json(rows);
        }
    );
});
module.exports = router;