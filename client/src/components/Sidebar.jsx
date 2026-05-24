import { Link, useNavigate } from "react-router-dom";

import "../styles/Sidebar.css";

function Sidebar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div className="sidebar">

      <h2 className="sidebar-logo">
        GaragePoint
      </h2>

      <ul>

        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>

        <Link to="/vehicles">
          <li>Vehicles</li>
        </Link>

        <Link to="/bookings">
          <li>Bookings</li>
        </Link>

        <Link to="/invoice">
          <li>Invoices</li>
        </Link>

        <li onClick={logout}>
          Logout
        </li>

      </ul>

    </div>

  );
}

export default Sidebar;