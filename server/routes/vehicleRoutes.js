const express = require("express");

const router = express.Router();

let vehicles = [];

router.post("/", (req, res) => {

  const {
    vehicleNumber,
    brand,
    model,
    year
  } = req.body;

  const newVehicle = {
    id: Date.now(),
    vehicleNumber,
    brand,
    model,
    year
  };

  vehicles.push(newVehicle);

  res.json({
    message: "Vehicle Added Successfully",
    vehicles
  });

});

router.get("/", (req, res) => {

  res.json(vehicles);

});

router.put("/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const {
    vehicleNumber,
    brand,
    model,
    year
  } = req.body;

  vehicles = vehicles.map((vehicle) => {

    if (vehicle.id === id) {

      return {
        ...vehicle,
        vehicleNumber,
        brand,
        model,
        year
      };

    }

    return vehicle;

  });

  res.json({
    message: "Vehicle Updated Successfully",
    vehicles
  });

});

router.delete("/:id", (req, res) => {

  const id = parseInt(req.params.id);

  vehicles = vehicles.filter(
    (vehicle) => vehicle.id !== id
  );

  res.json({
    message: "Vehicle Deleted Successfully",
    vehicles
  });

});

module.exports = router;