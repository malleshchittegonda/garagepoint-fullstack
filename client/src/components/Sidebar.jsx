import {
  Link,
  useNavigate
} from "react-router-dom";

import "../styles/Sidebar.css";

function Sidebar() {

  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user"));

  const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div className="sidebar">

      <div>

        <h2 className="sidebar-logo">
          GaragePoint
        </h2>

        <div className="profile-section">

          <div className="profile-circle">
            {
              user?.name?.charAt(0)
            }
          </div>

          <h3>
            {user?.name}
          </h3>

          <p>
            {user?.role}
          </p>

        </div>

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

        </ul>

      </div>

      <button
        className="logout-btn"
        onClick={logout}
      >

        Logout

      </button>

    </div>

  );
}

export default Sidebar;