import {
  FaTachometerAlt,
  FaUserFriends,
  FaUsers,
  FaHandshake,
  FaTasks,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/login");

  };

  return (

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

      <NavLink to="/dashboard" className="menu-item">
        <FaTachometerAlt /> Dashboard
      </NavLink>

      <NavLink to="/leads" className="menu-item">
        <FaUserFriends /> Leads
      </NavLink>

      <NavLink to="/customers" className="menu-item">
        <FaUsers /> Customers
      </NavLink>

      <NavLink to="/deals" className="menu-item">
        <FaHandshake /> Deals
      </NavLink>

      <NavLink to="/activities" className="menu-item">
        <FaTasks /> Activities
      </NavLink>

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

  );

}