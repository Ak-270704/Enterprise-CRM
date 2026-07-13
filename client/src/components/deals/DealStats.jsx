export default function DealStats({ deals }) {

  const totalDeals = deals.length;

  const openDeals = deals.filter(
    (deal) => deal.status === "Open"
  ).length;

  const wonDeals = deals.filter(
    (deal) => deal.status === "Won"
  ).length;

  const lostDeals = deals.filter(
    (deal) => deal.status === "Lost"
  ).length;

  // Total Pipeline Value
  const pipelineValue = deals.reduce(
    (sum, deal) => sum + Number(deal.value || 0),
    0
  );

  // Won Revenue
  const wonRevenue = deals
    .filter((deal) => deal.status === "Won")
    .reduce(
      (sum, deal) => sum + Number(deal.value || 0),
      0
    );

  // Average Deal Value
  const averageValue =
    totalDeals === 0
      ? 0
      : Math.round(pipelineValue / totalDeals);

  // Win Rate
  const closedDeals = wonDeals + lostDeals;

  const winRate =
    closedDeals === 0
      ? 0
      : Math.round((wonDeals / closedDeals) * 100);

  const cardStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,.08)",
    textAlign: "center",
  };

  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(190px,1fr))",
        gap: "18px",
        marginBottom: "25px",
      }}
    >

      <div style={cardStyle}>
        <h4>Total Deals</h4>
        <h2>{totalDeals}</h2>
      </div>

      <div style={cardStyle}>
        <h4>Open Deals</h4>
        <h2 style={{ color: "#2563EB" }}>
          {openDeals}
        </h2>
      </div>

      <div style={cardStyle}>
        <h4>Won Deals</h4>
        <h2 style={{ color: "#16A34A" }}>
          {wonDeals}
        </h2>
      </div>

      <div style={cardStyle}>
        <h4>Lost Deals</h4>
        <h2 style={{ color: "#DC2626" }}>
          {lostDeals}
        </h2>
      </div>

      <div style={cardStyle}>
        <h4>Pipeline Value</h4>
        <h2>
          ₹ {pipelineValue.toLocaleString()}
        </h2>
      </div>

      <div style={cardStyle}>
        <h4>Won Revenue</h4>
        <h2 style={{ color: "#16A34A" }}>
          ₹ {wonRevenue.toLocaleString()}
        </h2>
      </div>

      <div style={cardStyle}>
        <h4>Average Deal</h4>
        <h2>
          ₹ {averageValue.toLocaleString()}
        </h2>
      </div>

      <div style={cardStyle}>
        <h4>Win Rate</h4>
        <h2 style={{ color: "#F59E0B" }}>
          {winRate}%
        </h2>
      </div>

    </div>

  );

}