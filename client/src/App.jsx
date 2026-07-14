import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Customers from "./pages/Customers";
import Deals from "./pages/Deals";
import Activities from "./pages/Activities";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
function App() {
  return (
    <>

      <Routes>

        {/* Public Routes */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        {/* Protected Routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/leads"
          element={
            <ProtectedRoute>
              <Layout>
                <Leads />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <Layout>
                <Customers />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/deals"
          element={
            <ProtectedRoute>
              <Layout>
                <Deals />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/activities"
          element={
            <ProtectedRoute>
              <Layout>
                <Activities />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Layout>
        <Admin />
      </Layout>
    </ProtectedRoute>
  }
/>
        <Route path="*" element={<NotFound />} />

      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="colored"
      />

    </>
  );
}

export default App;