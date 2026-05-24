import Sidebar from "../components/Sidebar";
import "../styles/Booking.css";

function Booking() {
  return (
    <div className="booking-container">

      <Sidebar />

      <div className="booking-content">

        <div className="booking-top">

          <h1>
            Service Booking
          </h1>

          <div className="profile-box">
            Mallesh
          </div>

        </div>

        <div className="booking-sections">

          <div className="booking-form">

            <h2>
              Book New Service
            </h2>

            <form>

              <select>
                <option>
                  Select Vehicle
                </option>

                <option>
                  TS09 EE 1234
                </option>

                <option>
                  AP39 AB 5678
                </option>
              </select>

              <select>
                <option>
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
              />

              <textarea
                placeholder="Additional Notes"
              ></textarea>

              <button>
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
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>TS09 EE 1234</td>
                  <td>Oil Change</td>
                  <td>26 May 2026</td>

                  <td>
                    <span className="pending">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>AP39 AB 5678</td>
                  <td>Brake Service</td>
                  <td>28 May 2026</td>

                  <td>
                    <span className="completed">
                      Completed
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Booking;