import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="dashboard-content">

        <div className="dashboard-top">

          <h1>
            Dashboard
          </h1>

          <div className="profile-box">
            Mallesh
          </div>

        </div>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h3>Total Bookings</h3>
            <p>18</p>
          </div>

          <div className="dashboard-card">
            <h3>Completed Services</h3>
            <p>11</p>
          </div>

          <div className="dashboard-card">
            <h3>Pending Services</h3>
            <p>7</p>
          </div>

          <div className="dashboard-card">
            <h3>Total Vehicles</h3>
            <p>12</p>
          </div>

        </div>

        <div className="booking-table">

          <h2>
            Recent Bookings
          </h2>

          <table>

            <thead>

              <tr>
                <th>Service</th>
                <th>Vehicle</th>
                <th>Date</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>General Service</td>
                <td>TS09 EE 1234</td>
                <td>25 May 2026</td>

                <td>
                  <span className="completed">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>Brake Service</td>
                <td>TS10 XY 9876</td>
                <td>26 May 2026</td>

                <td>
                  <span className="pending">
                    Pending
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;