import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

import "../styles/Register.css";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post(
        "/auth/register",
        formData
      );

      alert(res.data.message);

      navigate("/login");

    } catch (error) {

      alert("Registration Failed");

    }

  };

  return (

    <div className="register-container">

      <div className="register-card">

        <h1>
          Create Account
        </h1>

        <p>
          Register to continue
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />

          <select
            name="role"
            onChange={handleChange}
          >

            <option value="customer">
              Customer
            </option>

            <option value="mechanic">
              Mechanic
            </option>

            <option value="manager">
              Garage Manager
            </option>

          </select>

          <button type="submit">
            Register
          </button>

        </form>

      </div>

    </div>

  );
}

export default Register;