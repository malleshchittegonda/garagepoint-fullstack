import { Link } from "react-router-dom";

import "../styles/Sidebar.css";

function Sidebar() {
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

        <Link to="/">
          <li>Logout</li>
        </Link>

      </ul>

    </div>
  );
}

export default Sidebar;