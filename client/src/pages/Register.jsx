import "../styles/Register.css";

function Register() {
  return (
    <div className="register-container">

      <div className="register-card">

        <h1>Create Account</h1>

        <p>
          Register to continue
        </p>

        <form>

          <input
            type="text"
            placeholder="Enter Name"
          />

          <input
            type="email"
            placeholder="Enter Email"
          />

          <input
            type="password"
            placeholder="Enter Password"
          />

          <select>
            <option>
              Customer
            </option>

            <option>
              Mechanic
            </option>

            <option>
              Garage Manager
            </option>
          </select>

          <button>
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;