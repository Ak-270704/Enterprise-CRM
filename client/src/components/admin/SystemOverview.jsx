import {
  FaServer,
  FaDatabase,
  FaUsers,
  FaTasks,
} from "react-icons/fa";

export default function SystemOverview({

  stats,

}) {

  const Item = ({
    icon,
    title,
    value,
  }) => (

    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        marginBottom: "20px",
      }}
    >

      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "#DBEAFE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#2563EB",
        }}
      >

        {icon}

      </div>

      <div>

        <h4
          style={{
            margin: 0,
          }}
        >
          {title}
        </h4>

        <p
          style={{
            margin: "5px 0 0",
            color: "#64748B",
          }}
        >
          {value}
        </p>

      </div>

    </div>

  );

  return (

    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
      }}
    >

      <h3
        style={{
          marginTop: 0,
        }}
      >
        System Overview
      </h3>

      <Item

        icon={<FaServer />}

        title="Server"

        value="🟢 Online"

      />

      <Item

        icon={<FaDatabase />}

        title="Database"

        value="🟢 MongoDB Connected"

      />

      <Item

        icon={<FaUsers />}

        title="Total Users"

        value={stats.totalUsers}

      />

      <Item

        icon={<FaTasks />}

        title="Activities"

        value={stats.totalActivities}

      />

    </div>

  );

}