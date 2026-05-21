const express = require("express");
const db = require("../config/db");

const router = express.Router();

//Create Booking
router.post("/", (req, res) => {
    const {
        vehicle_id,
        service_type,
        booking_date,
        mechanic_name
    } = req.body;

    const sql = `
        INSERT INTO service_bookings(
            vehicle_id,
            service_type,
            booking_date,
            status,
            mechanic_name
        )
        VALUES (?, ?, ?, ?, ?)
        `;

    db.run(
        sql,
        [
            vehicle_id,
            service_type,
            booking_date,
            "Booked",
            mechanic_name
        ],
        function (err) {
            if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            res.json({
                message: "Service Booked"
            });
        }
    );
});

//Get All Bookings
router.get("/", (req, res) => {
    db.all(
        `SELECT * FROM service_bookings`,
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

//Update Status
router.put("/:id/status", (req, res) => {
    const { status} = req.body;

    db.run(
        `
        UPDATE service_bookings
        SET status = ?
        WHERE id = ?
        `,
        [status, req.params.id],
        function (err) {
            if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            res.json({
                message: "Status Updated"
            });
        }
    );
});

module.exports = router;