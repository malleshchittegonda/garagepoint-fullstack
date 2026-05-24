import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        GaragePoint
      </div>

      <div className="nav-links">

        <a href="/">Home</a>

        <a href="/">Services</a>

        <a href="/">About</a>

        <a href="/">Contact</a>

      </div>

      <div className="nav-buttons">

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="register-btn">
            Register
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;