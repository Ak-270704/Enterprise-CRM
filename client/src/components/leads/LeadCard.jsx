export default function LeadCard({
  lead,
  getStatusStyle,
  onEdit,
  onDelete,
  onView,
}) {
  return (
    <tr>
      <td>
        {lead.firstName} {lead.lastName}
      </td>

      <td>{lead.email}</td>

      <td>{lead.phone}</td>

      <td>{lead.company}</td>

      <td>
        <span
          style={{
            ...getStatusStyle(lead.status),
            padding: "6px 12px",
            borderRadius: "20px",
            fontWeight: "600",
            fontSize: "13px",
            display: "inline-block",
            minWidth: "110px",
            textAlign: "center",
          }}
        >
          {lead.status}
        </span>
      </td>

      <td>{lead.source}</td>

      <td>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      flexWrap: "nowrap",
      minWidth: "250px"
    }}
  >
    <button
      onClick={() => onView(lead)}
      style={{
        background: "#0EA5E9",
        color: "#fff",
        border: "none",
        padding: "8px 14px",
        borderRadius: "6px",
        cursor: "pointer",
        minWidth: "70px"
      }}
    >
      View
    </button>

    <button
      onClick={() => onEdit(lead)}
      style={{
        background: "#2563EB",
        color: "#fff",
        border: "none",
        padding: "8px 14px",
        borderRadius: "6px",
        cursor: "pointer",
        minWidth: "70px"
      }}
    >
      Edit
    </button>

    <button
      onClick={() => onDelete(lead._id)}
      style={{
        background: "#DC2626",
        color: "#fff",
        border: "none",
        padding: "8px 14px",
        borderRadius: "6px",
        cursor: "pointer",
        minWidth: "80px"
      }}
    >
      Delete
    </button>
  </div>
</td>
    </tr>
  );
}