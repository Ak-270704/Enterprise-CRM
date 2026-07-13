export default function UpcomingClosings({ deals }) {
  const upcomingDeals = [...deals]
    .filter(
      (deal) =>
        deal.expectedCloseDate &&
        deal.status === "Open"
    )
    .sort(
      (a, b) =>
        new Date(a.expectedCloseDate) -
        new Date(b.expectedCloseDate)
    )
    .slice(0, 5);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
        height: "100%",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: "20px",
          color: "#1E3A8A",
        }}
      >
        📅 Upcoming Closings
      </h3>

      {upcomingDeals.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            color: "#94A3B8",
            padding: "30px 0",
          }}
        >
          No upcoming deals
        </div>
      ) : (
        upcomingDeals.map((deal) => (
          <div
            key={deal._id}
            style={{
              paddingBottom: "15px",
              marginBottom: "15px",
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            <div
              style={{
                fontWeight: "600",
                color: "#1E293B",
                marginBottom: "5px",
              }}
            >
              {deal.title}
            </div>

            <div
              style={{
                color: "#64748B",
                fontSize: "14px",
                marginBottom: "5px",
              }}
            >
              {deal.customer?.companyName}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "14px",
              }}
            >
              <span
                style={{
                  color: "#2563EB",
                  fontWeight: "600",
                }}
              >
                {new Date(
                  deal.expectedCloseDate
                ).toLocaleDateString()}
              </span>

              <span
                style={{
                  color: "#16A34A",
                  fontWeight: "700",
                }}
              >
                {(deal.currency === "USD"
                  ? "$"
                  : deal.currency === "EUR"
                  ? "€"
                  : "₹") +
                  Number(deal.value).toLocaleString()}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}