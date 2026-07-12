export default function CustomerDetailsModal({
  open,
  customer,
  onClose,
}) {
  if (!open || !customer) return null;

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
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0 15px 35px rgba(0,0,0,.25)",
        }}
      >
        <h2
          style={{
            marginBottom: "25px",
            color: "#1E3A8A",
          }}
        >
          Customer Details
        </h2>

        <div
          style={{
            border: "1px solid #E5E7EB",
            borderRadius: "10px",
            padding: "20px",
            background: "#F9FAFB",
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            rowGap: "14px",
            columnGap: "20px",
          }}
        >
          <strong>Company</strong>
          <span>{customer.companyName}</span>

          <strong>Contact Person</strong>
          <span>{customer.contactPerson}</span>

          <strong>Email</strong>
          <span>{customer.email}</span>

          <strong>Phone</strong>
          <span>{customer.phone}</span>

          <strong>Industry</strong>
          <span>{customer.industry}</span>

          <strong>Status</strong>
          <span>
            {customer.isActive ? "Active" : "Inactive"}
          </span>

          <strong>Address</strong>
          <span>{customer.address || "-"}</span>

          <strong>City</strong>
          <span>{customer.city || "-"}</span>

          <strong>State</strong>
          <span>{customer.state || "-"}</span>

          <strong>Country</strong>
          <span>{customer.country || "-"}</span>

          <strong>Postal Code</strong>
          <span>{customer.postalCode || "-"}</span>
        </div>

        <div
          style={{
            marginTop: "25px",
            textAlign: "right",
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