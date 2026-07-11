import { useEffect, useState } from "react";
import API from "../../services/api";
import StatCard from "./StatCard";

export default function DashboardCards() {

  const [stats, setStats] = useState({
    totalLeads: 0,
    totalCustomers: 0,
    totalDeals: 0,
    totalActivities: 0,
  });
 useEffect(() => {

  const fetchStats = async () => {
    try {

      const res = await API.get("/dashboard/stats");

      setStats(res.data.data);

    } catch (err) {
      console.error(err);
    }
  };

  fetchStats();

}, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      <StatCard
        title="Total Leads"
        value={stats.totalLeads}
        color="#2563eb"
      />

      <StatCard
        title="Customers"
        value={stats.totalCustomers}
        color="#16a34a"
      />

      <StatCard
        title="Deals"
        value={stats.totalDeals}
        color="#ea580c"
      />

      <StatCard
        title="Activities"
        value={stats.totalActivities}
        color="#9333ea"
      />
    </div>
  );
}