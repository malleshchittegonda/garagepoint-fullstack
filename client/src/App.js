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
import ProtectedRoute from "./components/ProtectedRoute";

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
          element={<ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>}
        />

        <Route
          path="/vehicles"
          element={<ProtectedRoute>
      <Vehicle />
    </ProtectedRoute>}
        />

        <Route
          path="/bookings"
          element={<ProtectedRoute>
      <Booking />
    </ProtectedRoute>}
        />

        <Route
          path="/invoice"
          element={<ProtectedRoute>
      <Invoice />
    </ProtectedRoute>}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;