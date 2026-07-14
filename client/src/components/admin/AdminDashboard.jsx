import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

import {
  FaUserPlus,
  FaUsers,
  FaHandshake,
  FaTasks,
} from "react-icons/fa";

import AdminStats from "./AdminStats";
import AdminCharts from "./AdminCharts";
import UserTable from "./UserTable";
import RecentUsers from "./RecentUsers";
import RecentActivities from "./RecentActivities";
import KPIProgress from "./KPIProgress";
import SystemOverview from "./SystemOverview";
import AdminProfileCard from "./AdminProfileCard";

export default function AdminDashboard() {

  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const [stats, setStats] = useState({

    totalUsers: 0,

    adminUsers: 0,

    managerUsers: 0,

    salesUsers: 0,

    totalLeads: 0,

    totalCustomers: 0,

    totalDeals: 0,

    totalActivities: 0,

    wonDeals: 0,

    openDeals: 0,

    lostDeals: 0,

    recentUsers: [],

    recentActivities: [],

  });

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard = async () => {

    try {

      const res = await API.get(
        "/admin/dashboard"
      );

      setStats(res.data.data);

    }

    catch (err) {

      console.error(err);

    }

  };

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {

    greeting = "Good Morning";

  }

  else if (hour < 17) {

    greeting = "Good Afternoon";

  }

  return (

    <div>

      {/* ================= Header ================= */}

      <div
        style={{

          display: "flex",

          justifyContent: "space-between",

          alignItems: "center",

          marginBottom: "30px",

          flexWrap: "wrap",

          gap: "20px",

        }}
      >

        <div>

          <h1
            style={{
              margin: 0,
              color: "#84a5ff",
            }}
          >
            {greeting}, {user.name} 👋
          </h1>

          <p
            style={{
              color: "#cde2ff",
              marginTop: "8px",
            }}
          >
            Welcome back to Enterprise CRM Dashboard
          </p>

        </div>

        <div
          style={{
            textAlign: "right",
          }}
        >

          <h3
            style={{
              margin: 0,
            }}
          >
            Administrator
          </h3>

          <p
            style={{
              color: "#c7deff",
              marginTop: "6px",
            }}
          >
            {user.email}
          </p>

        </div>

      </div>

      {/* ================= Quick Actions ================= */}

      <div
        style={{

          display: "flex",

          gap: "15px",

          flexWrap: "wrap",

          marginBottom: "30px",

        }}
      >

        <button
          onClick={() => navigate("/leads")}
          style={buttonStyle}
        >
          <FaUserPlus />
          New Lead
        </button>

        <button
          onClick={() => navigate("/customers")}
          style={buttonStyle}
        >
          <FaUsers />
          Customers
        </button>

        <button
          onClick={() => navigate("/deals")}
          style={buttonStyle}
        >
          <FaHandshake />
          Deals
        </button>

        <button
          onClick={() => navigate("/activities")}
          style={buttonStyle}
        >
          <FaTasks />
          Activities
        </button>

      </div>

      {/* ================= Dashboard Cards ================= */}

      <AdminStats
        stats={stats}
      />

      {/* ================= Charts ================= */}

      <AdminCharts
        stats={stats}
      />

      <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "20px",
    marginTop: "30px",
  }}
>

  <KPIProgress
    stats={stats}
  />

  <SystemOverview
    stats={stats}
  />

  <AdminProfileCard />

</div>

      {/* ================= Widgets ================= */}

      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "1fr 1fr",

          gap: "20px",

          marginTop: "30px",

        }}
      >

        <RecentUsers
          users={
            stats.recentUsers || []
          }
        />

        <RecentActivities
          activities={
            stats.recentActivities || []
          }
        />

      </div>

      {/* ================= User Management ================= */}

      <div
        style={{
          marginTop: "35px",
        }}
      >

        <UserTable />

      </div>

      {/* ================= Footer ================= */}

      <div
        style={{

          marginTop: "40px",

          textAlign: "center",

          color: "#cfe3ff",

          padding: "20px",

          borderTop:
            "1px solid #E2E8F0",

        }}
      >

        Enterprise CRM v1.0

        <br />

        Developed by

        <b> Akshat Kaushik</b>

      </div>

    </div>

  );

}

const buttonStyle = {

  display: "flex",

  alignItems: "center",

  gap: "10px",

  background: "#2563EB",

  color: "#fff",

  border: "none",

  padding: "12px 20px",

  borderRadius: "10px",

  cursor: "pointer",

  fontWeight: "600",

  transition: ".3s",

};