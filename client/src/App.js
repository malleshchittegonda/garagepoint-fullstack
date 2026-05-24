import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Vehicle from "./pages/Vehicle";
import Booking from "./pages/Booking";
import Invoice from "./pages/Invoice";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/vehicles"
          element={<Vehicle />}
        />

        <Route
          path="/bookings"
          element={<Booking />}
        />

        <Route
          path="/invoice"
          element={<Invoice />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;