export default function PipelineDealCard({
  deal,
}) {
  const currencySymbols = {
    INR: "₹",
    USD: "$",
    EUR: "€",
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
        cursor: "pointer",
        transition: "0.2s",
      }}
    >
      <h4
        style={{
          margin: 0,
          marginBottom: "8px",
          color: "#1E293B",
        }}
      >
        {deal.title}
      </h4>

      <div
        style={{
          color: "#64748B",
          fontSize: "14px",
          marginBottom: "6px",
        }}
      >
        {deal.customer?.companyName}
      </div>

      <div
        style={{
          fontWeight: "700",
          color: "#2563EB",
          marginBottom: "8px",
        }}
      >
        {currencySymbols[deal.currency] || "₹"}{" "}
        {Number(deal.value).toLocaleString()}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "13px",
        }}
      >
        <span>{deal.probability}%</span>

        <span
          style={{
            background:
              deal.status === "Won"
                ? "#DCFCE7"
                : deal.status === "Lost"
                ? "#FEE2E2"
                : "#DBEAFE",

            color:
              deal.status === "Won"
                ? "#15803D"
                : deal.status === "Lost"
                ? "#B91C1C"
                : "#1D4ED8",

            padding: "4px 10px",
            borderRadius: "20px",
            fontWeight: "600",
          }}
        >
          {deal.status}
        </span>
      </div>
    </div>
  );
}