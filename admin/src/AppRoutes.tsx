import { Navigate, Route, Routes } from "react-router-dom";
import RequireAuth from "./features/auth/RequireAuth";
import Dashboard from "./features/dashboard";
import Login from "./features/login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRoutes;
