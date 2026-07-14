export default function KPIProgress({ stats }) {

  const totalDeals = stats.totalDeals || 1;

  const won =
    (stats.wonDeals / totalDeals) * 100;

  const open =
    (stats.openDeals / totalDeals) * 100;

  const lost =
    (stats.lostDeals / totalDeals) * 100;

  const Progress = ({
    title,
    value,
    color,
  }) => (

    <div
      style={{
        marginBottom: "22px",
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
          fontWeight: "600",
        }}
      >

        <span>{title}</span>

        <span>{value.toFixed(0)}%</span>

      </div>

      <div
        style={{
          height: "12px",
          background: "#E2E8F0",
          borderRadius: "20px",
        }}
      >

        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: color,
            borderRadius: "20px",
            transition: ".5s",
          }}
        />

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
        KPI Progress
      </h3>

      <Progress

        title="Won Deals"

        value={won}

        color="#16A34A"

      />

      <Progress

        title="Open Deals"

        value={open}

        color="#2563EB"

      />

      <Progress

        title="Lost Deals"

        value={lost}

        color="#DC2626"

      />

    </div>

  );

}