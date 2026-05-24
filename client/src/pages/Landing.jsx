import Navbar from "../components/Navbar";
import "../styles/Landing.css";

function Landing() {
  return (
    <div>

      <Navbar />

      <section className="hero">

        <div className="hero-left">

          <h1>
            Your Vehicle,
            <br />
            Our Responsibility
          </h1>

          <p>
            Book your next service with trusted garages.
            Fast, reliable and hassle-free.
          </p>

          <button>
            Book a Service
          </button>

        </div>

        <div className="hero-right">

          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200"
            alt="car"
          />

        </div>

      </section>

      <section className="features">

        <div className="feature-card">
          <h3>Quality Service</h3>

          <p>
            We provide high quality vehicle servicing.
          </p>
        </div>

        <div className="feature-card">
          <h3>Expert Technicians</h3>

          <p>
            Skilled mechanics for all vehicle types.
          </p>
        </div>

        <div className="feature-card">
          <h3>Easy Booking</h3>

          <p>
            Book your vehicle service online easily.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Landing;