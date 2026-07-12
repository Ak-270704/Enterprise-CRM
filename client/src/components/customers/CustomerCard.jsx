export default function CustomerCard({
  customer,
  onEdit,
  onDelete,
  onView,
}) {
  return (
    <tr>
      <td
        style={{
          fontWeight: "600",
          wordBreak: "break-word",
        }}
      >
        {customer.companyName}
      </td>

      <td>{customer.contactPerson}</td>

      <td>{customer.industry}</td>

      <td
        style={{
          wordBreak: "break-word",
        }}
      >
        {customer.email}
      </td>

      <td>{customer.phone}</td>

      <td>
        <span
          style={{
            background: customer.isActive
              ? "#DCFCE7"
              : "#FEE2E2",
            color: customer.isActive
              ? "#15803D"
              : "#B91C1C",
            padding: "6px 12px",
            borderRadius: "20px",
            fontWeight: "600",
            fontSize: "13px",
            display: "inline-block",
            minWidth: "80px",
            textAlign: "center",
          }}
        >
          {customer.isActive ? "Active" : "Inactive"}
        </span>
      </td>

      <td>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={onView}
            style={{
              background: "#0EA5E9",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              minWidth: "65px",
            }}
          >
            View
          </button>

          <button
            onClick={onEdit}
            style={{
              background: "#2563EB",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              minWidth: "65px",
            }}
          >
            Edit
          </button>

          <button
            onClick={onDelete}
            style={{
              background: "#DC2626",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              minWidth: "70px",
            }}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}