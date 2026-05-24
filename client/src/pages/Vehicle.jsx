import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";

import "../styles/Vehicle.css";

import API from "../services/api";

function Vehicle() {

  const [vehicleData, setVehicleData] = useState({
    vehicleNumber: "",
    brand: "",
    model: "",
    year: "",
  });

  const [vehicles, setVehicles] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {

    setVehicleData({
      ...vehicleData,
      [e.target.name]: e.target.value,
    });

  };

  const fetchVehicles = async () => {

    try {

      const res = await API.get("/vehicles");

      setVehicles(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchVehicles();

  }, []);

  const deleteVehicle = async (id) => {

  try {

    await API.delete(`/vehicles/${id}`);

    fetchVehicles();

  } catch (error) {

    console.log(error);

  }

};

    const editVehicle = (vehicle) => {

  setVehicleData({
    vehicleNumber: vehicle.vehicleNumber,
    brand: vehicle.brand,
    model: vehicle.model,
    year: vehicle.year,
  });

  setEditingId(vehicle.id);

};

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    if (editingId) {

      await API.put(
        `/vehicles/${editingId}`,
        vehicleData
      );

      alert("Vehicle Updated Successfully");

      setEditingId(null);

    } else {

      await API.post(
        "/vehicles",
        vehicleData
      );

      alert("Vehicle Added Successfully");

    }

    fetchVehicles();

    setVehicleData({
      vehicleNumber: "",
      brand: "",
      model: "",
      year: "",
    });

  } catch (error) {

    alert("Error");

  }

};

  return (

    <div className="vehicle-container">

      <Sidebar />

      <div className="vehicle-content">

        <h1>
          My Vehicles
        </h1>

        <div className="vehicle-sections">

          <div className="add-vehicle">

            <h2>
              Add Vehicle
            </h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="vehicleNumber"
                placeholder="Vehicle Number"
                value={vehicleData.vehicleNumber}
                onChange={handleChange}
              />

              <input
                type="text"
                name="brand"
                placeholder="Brand"
                value={vehicleData.brand}
                onChange={handleChange}
              />

              <input
                type="text"
                name="model"
                placeholder="Model"
                value={vehicleData.model}
                onChange={handleChange}
              />

              <input
                type="text"
                name="year"
                placeholder="Year"
                value={vehicleData.year}
                onChange={handleChange}
              />

              <button type="submit">
                {
                  editingId
                    ? "Update Vehicle"
                    : "Add Vehicle"
                }
              </button>

            </form>

          </div>

          <div className="vehicle-list">

            <h2>
              Vehicle List
            </h2>

            {

              vehicles.map((vehicle) => (

                <div
                  className="vehicle-card"
                  key={vehicle.id}
                >

                  <h3>
                    {vehicle.vehicleNumber}
                  </h3>

                  <p>
                    {vehicle.brand}
                  </p>

                  <p>
                    {vehicle.model}
                  </p>

                  <p>
                    {vehicle.year}
                  </p>

                  <button
                    className="edit-btn"
                    onClick={() => editVehicle(vehicle)}
                    >
                      Edit
                    </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteVehicle(vehicle.id)}
                    >
                      Delete
                    </button>

                </div>

              ))

            }

          </div>

        </div>

      </div>

    </div>

  );
}

export default Vehicle;