const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = `
    INSERT INTO users(name, email, password, role)
    VALUES (?, ?, ?, ?)
  `;

  db.run(
    sql,
    [name, email, hashedPassword, role],
    function (err) {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.json({
        message: "User Registered",
      });
    }
  );
});

//Login
router.post("/login", (req, res) => {
    const {email, password} = req.body;

    db.get(
        `SELECT * FROM users WHERE email = ?`,
        [email],
        async (err, user) => {
            if (err) {
                return res.status(500).json({
                    message: err.message,
                });
            }

            if (!user) {
                return res.status(404).json({
                    message: "User not found",
                });
            }

            const isMatch = await bcrypt.compare(
                password,
                user.password
            );

            if (!isMatch) {
                return res.status(400).json({
                    message: "Invalid password",
                });
            }

            const token = jwt.sign(
                {
                    id: user.id,
                    role: user.role,
                },
                "garagepointsecret"
            );

            res.json({
                message: "Login Success",
                token,
                user,
            });
        }
    );
});

module.exports = router;