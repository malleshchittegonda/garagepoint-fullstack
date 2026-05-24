const express = require("express");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const router = express.Router();

const db = require("../database/db");

const SECRET_KEY = "garagepoint_secret";

router.post("/register", async (req, res) => {

  const {
    name,
    email,
    password,
    role
  } = req.body;

  try {

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const sql = `
      
      INSERT INTO users
      (
        name,
        email,
        password,
        role
      )
      
      VALUES (?, ?, ?, ?)

    `;

    db.run(
      sql,
      [
        name,
        email,
        hashedPassword,
        role
      ],
      function(err) {

        if (err) {

          return res.status(500).json({
            message: err.message
          });

        }

        res.json({
          message: "User Registered Successfully"
        });

      }
    );

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }

});

router.post("/login", (req, res) => {

  const {
    email,
    password
  } = req.body;

  const sql = `
    
    SELECT * FROM users
    
    WHERE email = ?

  `;

  db.get(
    sql,
    [email],
    async (err, user) => {

      if (err) {

        return res.status(500).json({
          message: err.message
        });

      }

      if (!user) {

        return res.status(400).json({
          message: "User Not Found"
        });

      }

      const isMatch =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!isMatch) {

        return res.status(400).json({
          message: "Invalid Password"
        });

      }

      const token = jwt.sign(
        {
          id: user.id,
          role: user.role
        },
        SECRET_KEY,
        {
          expiresIn: "1d"
        }
      );

      res.json({
        message: "Login Successful",
        token,
        user: {
          id: user.id,
          name: user.name,
          role: user.role
        }
      });

    }
  );

});

module.exports = router;