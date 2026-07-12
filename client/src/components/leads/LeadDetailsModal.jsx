export default function LeadDetailsModal({
  open,
  lead,
  onClose,
}) {
  if (!open || !lead) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "550px",
          maxWidth: "90%",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        <h1
          style={{
            marginBottom: "25px",
            color: "#1E3A8A",
          }}
        >
          Lead Details
        </h1>

        <div
          style={{
            lineHeight: "2",
            fontSize: "18px",
          }}
        >
          <p>
            <strong>Name:</strong>{" "}
            {lead.firstName} {lead.lastName}
          </p>

          <p>
            <strong>Email:</strong> {lead.email}
          </p>

          <p>
            <strong>Phone:</strong> {lead.phone}
          </p>

          <p>
            <strong>Company:</strong> {lead.company}
          </p>

          <p>
            <strong>Status:</strong> {lead.status}
          </p>

          <p>
            <strong>Source:</strong> {lead.source}
          </p>

          <p>
            <strong>Notes:</strong>{" "}
            {lead.notes || "No Notes"}
          </p>
        </div>

        <div
          style={{
            textAlign: "right",
            marginTop: "30px",
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
              fontWeight: "600",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}