export default function DealDetailsModal({

  open,
  deal,
  onClose,

}) {

  if (!open || !deal) return null;

  const currencySymbol = {

    INR: "₹",

    USD: "$",

    EUR: "€",

  };

  const rowStyle = {

    display: "flex",

    justifyContent: "space-between",

    padding: "12px 0",

    borderBottom: "1px solid #E5E7EB",

  };

  const labelStyle = {

    fontWeight: "600",

    color: "#374151",

  };

  const valueStyle = {

    color: "#111827",

    textAlign: "right",

    maxWidth: "60%",

    wordBreak: "break-word",

  };

  return (

    <div

      style={{

        position: "fixed",

        inset: 0,

        background: "rgba(0,0,0,.5)",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        zIndex: 999,

      }}

    >

      <div

        style={{

          background: "#fff",

          width: "650px",

          maxWidth: "95%",

          borderRadius: "12px",

          padding: "25px",

          boxShadow: "0 10px 30px rgba(0,0,0,.25)",

        }}

      >

        <h2

          style={{

            marginBottom: "20px",

            color: "#1E3A8A",

          }}

        >

          Deal Details

        </h2>

        <div style={rowStyle}>

          <span style={labelStyle}>Title</span>

          <span style={valueStyle}>{deal.title}</span>

        </div>

        <div style={rowStyle}>

          <span style={labelStyle}>Customer</span>

          <span style={valueStyle}>

            {deal.customer?.companyName}

          </span>

        </div>

        <div style={rowStyle}>

          <span style={labelStyle}>Value</span>

          <span style={valueStyle}>

            {currencySymbol[deal.currency]} {deal.value}

          </span>

        </div>

        <div style={rowStyle}>

          <span style={labelStyle}>Currency</span>

          <span style={valueStyle}>{deal.currency}</span>

        </div>

        <div style={rowStyle}>

          <span style={labelStyle}>Stage</span>

          <span style={valueStyle}>{deal.stage}</span>

        </div>

        <div style={rowStyle}>

          <span style={labelStyle}>Probability</span>

          <span style={valueStyle}>

            {deal.probability}%

          </span>

        </div>

        <div style={rowStyle}>

          <span style={labelStyle}>Expected Close</span>

          <span style={valueStyle}>

            {deal.expectedCloseDate

              ? new Date(

                  deal.expectedCloseDate

                ).toLocaleDateString()

              : "-"}

          </span>

        </div>

        <div style={rowStyle}>

          <span style={labelStyle}>Status</span>

          <span style={valueStyle}>{deal.status}</span>

        </div>

        <div style={rowStyle}>

          <span style={labelStyle}>Description</span>

          <span style={valueStyle}>

            {deal.description || "-"}

          </span>

        </div>

        <div

          style={{

            textAlign: "right",

            marginTop: "25px",

          }}

        >

          <button

            onClick={onClose}

            style={{

              background: "#2563EB",

              color: "#fff",

              border: "none",

              padding: "10px 22px",

              borderRadius: "8px",

              cursor: "pointer",

            }}

          >

            Close

          </button>

        </div>

      </div>

    </div>

  );

}