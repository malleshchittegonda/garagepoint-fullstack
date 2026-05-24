import Sidebar from "../components/Sidebar";
import "../styles/Invoice.css";

function Invoice() {
  return (
    <div className="invoice-container">

      <Sidebar />

      <div className="invoice-content">

        <div className="invoice-top">

          <h1>
            Invoice & Billing
          </h1>

          <div className="profile-box">
            Mallesh
          </div>

        </div>

        <div className="invoice-card">

          <div className="invoice-header">

            <div>
              <h2>GaragePoint</h2>

              <p>
                Vehicle Service Invoice
              </p>
            </div>

            <div>
              <h3>Invoice #1024</h3>

              <p>Date: 26 May 2026</p>
            </div>

          </div>

          <div className="customer-details">

            <div>
              <h4>Customer</h4>

              <p>Mallesh</p>

              <p>TS09 EE 1234</p>
            </div>

            <div>
              <h4>Service Details</h4>

              <p>General Service</p>

              <p>Oil Change Included</p>
            </div>

          </div>

          <table>

            <thead>

              <tr>
                <th>Service</th>
                <th>Cost</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>General Service</td>
                <td>₹2500</td>
              </tr>

              <tr>
                <td>Oil Change</td>
                <td>₹1200</td>
              </tr>

              <tr>
                <td>Brake Check</td>
                <td>₹800</td>
              </tr>

            </tbody>

          </table>

          <div className="invoice-total">

            <h2>
              Total: ₹4500
            </h2>

          </div>

          <button className="download-btn">
            Download Invoice
          </button>

        </div>

      </div>

    </div>
  );
}

export default Invoice;