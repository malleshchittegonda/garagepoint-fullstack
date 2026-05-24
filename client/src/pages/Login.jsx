import "../styles/Login.css";

function Login() {
  return (
    <div className="login-container">

      <div className="overlay">

        <div className="login-card">

          <h1>Welcome Back</h1>

          <p>
            Login to your account
          </p>

          <form>

            <input
              type="email"
              placeholder="Enter Email"
            />

            <input
              type="password"
              placeholder="Enter Password"
            />

            <button>
              Login
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;