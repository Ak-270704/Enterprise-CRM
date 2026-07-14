import {
  FaTachometerAlt,
  FaUserFriends,
  FaUsers,
  FaHandshake,
  FaTasks,
  FaSignOutAlt,
  FaUserShield,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import AdminLoginModal from "./admin/AdminLoginModal";

export default function Sidebar() {

  const [adminOpen, setAdminOpen] = useState(false);

  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/login");

  };

  return (

    <>

      <div
        style={{
          width: "250px",
          background: "#1e293b",
          color: "white",
          minHeight: "100vh",
          padding: "20px"
        }}
      >

        <h2
          style={{
            marginBottom: "30px",
            textAlign: "center"
          }}
        >
          Enterprise CRM
        </h2>

        <NavLink
          to="/dashboard"
          className="menu-item"
        >
          <FaTachometerAlt /> Dashboard
        </NavLink>

        <NavLink
          to="/leads"
          className="menu-item"
        >
          <FaUserFriends /> Leads
        </NavLink>

        <NavLink
          to="/customers"
          className="menu-item"
        >
          <FaUsers /> Customers
        </NavLink>

        <NavLink
          to="/deals"
          className="menu-item"
        >
          <FaHandshake /> Deals
        </NavLink>

        <NavLink
          to="/activities"
          className="menu-item"
        >
          <FaTasks /> Activities
        </NavLink>

        {/* Admin Panel */}

        <button
          onClick={() => setAdminOpen(true)}
          className="menu-item"
          style={{
            width: "100%",
            background: "transparent",
            border: "none",
            color: "white",
            textAlign: "left",
            cursor: "pointer",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 0",
          }}
        >
          <FaUserShield />
          Admin Panel
        </button>

        <button
          onClick={handleLogout}
          style={{
            marginTop: "40px",
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          <FaSignOutAlt /> Logout
        </button>

      </div>

      <AdminLoginModal
        open={adminOpen}
        onClose={() => setAdminOpen(false)}
      />

    </>

  );

}