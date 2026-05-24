import {
  useState,
  useEffect
} from "react";

import Sidebar from "../components/Sidebar";

import "../styles/Booking.css";

import API from "../services/api";

function Booking() {

  const [bookingData, setBookingData] =
    useState({
      vehicleNumber: "",
      serviceType: "",
      bookingDate: "",
      notes: "",
    });

  const [bookings, setBookings] =
    useState([]);

  const handleChange = (e) => {

    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });

  };

  const fetchBookings = async () => {

    try {

      const res = await API.get(
        "/bookings"
      );

      setBookings(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchBookings();

  }, []);

  const updateBooking = async (id) => {

  try {

    await API.put(
      `/bookings/${id}`,
      {
        status: "Completed",
        assignedMechanic: "Ramesh"
      }
    );

    fetchBookings();

  } catch (error) {

    console.log(error);

  }

};

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/bookings",
        bookingData
      );

      alert(
        "Booking Created Successfully"
      );

      fetchBookings();

      setBookingData({
        vehicleNumber: "",
        serviceType: "",
        bookingDate: "",
        notes: "",
      });

    } catch (error) {

      alert("Booking Failed");

    }

  };

  return (

    <div className="booking-container">

      <Sidebar />

      <div className="booking-content">

        <div className="booking-top">

          <h1>
            Service Booking
          </h1>

        </div>

        <div className="booking-sections">

          <div className="booking-form">

            <h2>
              Book Service
            </h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="vehicleNumber"
                placeholder="Vehicle Number"
                value={bookingData.vehicleNumber}
                onChange={handleChange}
              />

              <select
                name="serviceType"
                value={bookingData.serviceType}
                onChange={handleChange}
              >

                <option value="">
                  Select Service
                </option>

                <option>
                  General Service
                </option>

                <option>
                  Oil Change
                </option>

                <option>
                  Brake Service
                </option>

              </select>

              <input
                type="date"
                name="bookingDate"
                value={bookingData.bookingDate}
                onChange={handleChange}
              />

              <textarea
                name="notes"
                placeholder="Additional Notes"
                value={bookingData.notes}
                onChange={handleChange}
              ></textarea>

              <button type="submit">
                Book Service
              </button>

            </form>

          </div>

          <div className="booking-history">

            <h2>
              Booking History
            </h2>

            <table>

              <thead>

                <tr>
                  <th>Vehicle</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Mechanic</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {

                  bookings.map((booking) => (

                    <tr key={booking.id}>

                      <td>
                        {booking.vehicleNumber}
                      </td>

                      <td>
                        {booking.serviceType}
                      </td>

                      <td>
                        {booking.bookingDate}
                      </td>

                      <td>

                        <span className="pending">

                          <td>

  <span
    className={
      booking.status === "Completed"
      ? "completed"
      : "pending"
    }
  >

    {booking.status}

  </span>

</td>

<td>

  {
    booking.assignedMechanic
      || "Not Assigned"
  }

</td>

<td>

  <button
    className="complete-btn"
    onClick={() =>
      updateBooking(booking.id)
    }
  >

    Complete

  </button>

</td>

                        </span>

                      </td>

                    </tr>

                  ))

                }

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Booking;