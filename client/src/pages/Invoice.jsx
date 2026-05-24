import {
  useState,
  useEffect
} from "react";

import Sidebar from "../components/Sidebar";

import "../styles/Invoice.css";

import API from "../services/api";

import jsPDF from "jspdf";

function Invoice() {

  const [bookings, setBookings] =
    useState([]);

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

  const downloadInvoice = (booking) => {

    const doc = new jsPDF();

    doc.setFontSize(22);

    doc.text(
      "GaragePoint Invoice",
      20,
      20
    );

    doc.setFontSize(14);

    doc.text(
      `Vehicle: ${booking.vehicleNumber}`,
      20,
      50
    );

    doc.text(
      `Service: ${booking.serviceType}`,
      20,
      65
    );

    doc.text(
      `Date: ${booking.bookingDate}`,
      20,
      80
    );

    doc.text(
      `Status: ${booking.status}`,
      20,
      95
    );

    doc.text(
      `Mechanic: ${
        booking.assignedMechanic
        || "Not Assigned"
      }`,
      20,
      110
    );

    doc.text(
      "Service Charge: ₹2500",
      20,
      140
    );

    doc.text(
      "Thank you for choosing GaragePoint!",
      20,
      180
    );

    doc.save(
      `${booking.vehicleNumber}_invoice.pdf`
    );

  };

  return (

    <div className="invoice-container">

      <Sidebar />

      <div className="invoice-content">

        <h1>
          Invoices
        </h1>

        <div className="invoice-grid">

          {

            bookings.map((booking) => (

              <div
                className="invoice-card"
                key={booking.id}
              >

                <h2>
                  {booking.vehicleNumber}
                </h2>

                <p>
                  {booking.serviceType}
                </p>

                <p>
                  {booking.bookingDate}
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

                <button
                  onClick={() =>
                    downloadInvoice(booking)
                  }
                >

                  Download PDF

                </button>

              </div>

            ))

          }

        </div>

      </div>

    </div>

  );
}

export default Invoice;