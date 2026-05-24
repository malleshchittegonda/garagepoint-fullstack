import {
  useState,
  useEffect
} from "react";

import Sidebar from "../components/Sidebar";

import "../styles/Dashboard.css";

import API from "../services/api";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Dashboard() {

  const [analytics, setAnalytics] =
    useState({
      totalVehicles: 0,
      totalBookings: 0,
      completedServices: 0,
      totalUsers: 0,
    });

  const [recentBookings, setRecentBookings] =
    useState([]);

  const fetchAnalytics = async () => {

    try {

      const res = await API.get(
        "/dashboard"
      );

      setAnalytics(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  const fetchBookings = async () => {

    try {

      const res = await API.get(
        "/bookings"
      );

      setRecentBookings(
        res.data.slice(0, 5)
      );

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchAnalytics();

    fetchBookings();

  }, []);

  const chartData = [
    {
      name: "Vehicles",
      count: analytics.totalVehicles,
    },
    {
      name: "Bookings",
      count: analytics.totalBookings,
    },
    {
      name: "Completed",
      count: analytics.completedServices,
    },
    {
      name: "Users",
      count: analytics.totalUsers,
    },
  ];

  return (

    <div className="dashboard-container">

      <Sidebar />

      <div className="dashboard-content">

        <div className="welcome-section">

  <div>

    <h1>
      Welcome Back 👋
    </h1>

    <p>
      Manage vehicles, bookings and
      garage analytics easily.
    </p>

  </div>

</div>

        <div className="stats-grid">

          <div className="stat-card">
            <h2>
              {analytics.totalVehicles}
            </h2>
            <p>Total Vehicles</p>
          </div>

          <div className="stat-card">
            <h2>
              {analytics.totalBookings}
            </h2>
            <p>Total Bookings</p>
          </div>

          <div className="stat-card">
            <h2>
              {analytics.completedServices}
            </h2>
            <p>Completed Services</p>
          </div>

          <div className="stat-card">
            <h2>
              {analytics.totalUsers}
            </h2>
            <p>Total Users</p>
          </div>

        </div>

        <div className="dashboard-lower">

          <div className="chart-card">

            <h2>
              Analytics Overview
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <BarChart data={chartData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar dataKey="count" />

              </BarChart>

            </ResponsiveContainer>

          </div>

          <div className="recent-bookings">

            <h2>
              Recent Bookings
            </h2>

            {

              recentBookings.map((booking) => (

                <div
                  className="booking-item"
                  key={booking.id}
                >

                  <h3>
                    {booking.vehicleNumber}
                  </h3>

                  <p>
                    {booking.serviceType}
                  </p>

                  <span
                    className={
                      booking.status ===
                      "Completed"
                        ? "completed"
                        : "pending"
                    }
                  >

                    {booking.status}

                  </span>

                </div>

              ))

            }

          </div>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;