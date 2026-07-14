import {
  FaUsers,
  FaUserFriends,
  FaHandshake,
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaChartLine,
} from "react-icons/fa";

export default function AdminStats({ stats }) {

  const cards = [

    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: <FaUsers size={30} />,
      bg: "#EFF6FF",
      color: "#2563EB",
    },

    {
      title: "Total Leads",
      value: stats.totalLeads,
      icon: <FaUserFriends size={30} />,
      bg: "#F0FDF4",
      color: "#16A34A",
    },

    {
      title: "Customers",
      value: stats.totalCustomers,
      icon: <FaUsers size={30} />,
      bg: "#FEFCE8",
      color: "#CA8A04",
    },

    {
      title: "Deals",
      value: stats.totalDeals,
      icon: <FaHandshake size={30} />,
      bg: "#EEF2FF",
      color: "#4F46E5",
    },

    {
      title: "Activities",
      value: stats.totalActivities,
      icon: <FaTasks size={30} />,
      bg: "#FDF4FF",
      color: "#C026D3",
    },

    {
      title: "Won Deals",
      value: stats.wonDeals,
      icon: <FaCheckCircle size={30} />,
      bg: "#DCFCE7",
      color: "#15803D",
    },

    {
      title: "Open Deals",
      value: stats.openDeals,
      icon: <FaClock size={30} />,
      bg: "#DBEAFE",
      color: "#2563EB",
    },

    {
      title: "Lost Deals",
      value: stats.lostDeals,
      icon: <FaTimesCircle size={30} />,
      bg: "#FEE2E2",
      color: "#DC2626",
    },

  ];

  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
        marginBottom: "30px",
      }}
    >

      {cards.map((card, index) => (

        <div
          key={index}
          style={{
            background: "#fff",
            borderRadius: "14px",
            padding: "22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 4px 15px rgba(0,0,0,.08)",
            transition: ".3s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "translateY(-6px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "translateY(0px)";
          }}
        >

          <div>

            <p
              style={{
                margin: 0,
                color: "#64748B",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              {card.title}
            </p>

            <h2
              style={{
                margin: "10px 0 0",
                color: "#0F172A",
                fontSize: "32px",
              }}
            >
              {card.value}
            </h2>

          </div>

          <div
            style={{
              background: card.bg,
              color: card.color,
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {card.icon}
          </div>

        </div>

      ))}

      <div
        style={{
          gridColumn: "1 / -1",
          background: "#1E3A8A",
          color: "#fff",
          borderRadius: "14px",
          padding: "22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        <div>

          <h2
            style={{
              margin: 0,
            }}
          >
            CRM Performance
          </h2>

          <p
            style={{
              marginTop: "8px",
              opacity: 0.9,
            }}
          >
            Monitor overall business performance
            and sales growth.
          </p>

        </div>

        <FaChartLine
          size={55}
        />

      </div>

    </div>

  );

}