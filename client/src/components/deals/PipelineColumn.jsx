import PipelineDealCard from "./PipelineDealCard";

export default function PipelineColumn({
  title,
  deals,
  color,
}) {

  const currencySymbols = {
    INR: "₹",
    USD: "$",
    EUR: "€",
  };

  // Calculate total value of deals in this stage
  const totalValue = deals.reduce(
    (sum, deal) => sum + Number(deal.value || 0),
    0
  );

  // Choose currency symbol (assumes same currency within a stage)
  const currency =
    deals.length > 0
      ? currencySymbols[deals[0].currency] || "₹"
      : "₹";

  return (

    <div
      style={{
        minWidth: "300px",
        background: "#F8FAFC",
        borderRadius: "14px",
        padding: "16px",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
        flexShrink: 0,
      }}
    >

      {/* Header */}

      <div
        style={{
          borderBottom: `3px solid ${color}`,
          paddingBottom: "12px",
          marginBottom: "16px",
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

          <h3
            style={{
              margin: 0,
              color,
              fontSize: "18px",
            }}
          >
            {title}
          </h3>

          <span
            style={{
              background: color,
              color: "#fff",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "600",
            }}
          >
            {deals.length}
          </span>

        </div>

        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
            color: "#64748B",
            fontSize: "14px",
          }}
        >

          <span>
            {deals.length} Deal{deals.length !== 1 ? "s" : ""}
          </span>

          <span
            style={{
              fontWeight: "700",
              color: "#0F172A",
            }}
          >
            {currency} {totalValue.toLocaleString()}
          </span>

        </div>

      </div>

      {/* Cards */}

      <div
        style={{
          minHeight: "500px",
        }}
      >

        {

          deals.length === 0

          ?

          (

            <div
              style={{
                textAlign: "center",
                color: "#94A3B8",
                marginTop: "50px",
                fontStyle: "italic",
              }}
            >
              No Deals
            </div>

          )

          :

          deals.map((deal) => (

            <PipelineDealCard
              key={deal._id}
              deal={deal}
            />

          ))

        }

      </div>

    </div>

  );

}