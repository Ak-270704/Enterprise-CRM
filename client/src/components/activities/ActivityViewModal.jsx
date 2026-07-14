export default function ActivityViewModal({

  open,

  activity,

  onClose,

}) {

  if (!open || !activity) return null;

  return (

    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,23,42,.55)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        backdropFilter: "blur(3px)",
      }}
    >

      <div
        style={{
          background: "#fff",
          width: "900px",
          maxWidth: "95%",
          borderRadius: "14px",
          padding: "30px",
          boxShadow: "0 20px 40px rgba(0,0,0,.25)",
        }}
      >

        <h3
          style={{
            marginTop: 0,
            marginBottom: "35px",
            color: "#1E3A8A",
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          Activity Details
        </h3>

        <div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      rowGap: "24px",
      columnGap: "40px",
      alignItems: "center",
    }}
  >

    <strong>Title</strong>

    <span style={{ textAlign: "right" }}>
      {activity.title}
    </span>

    <strong>Description</strong>

    <span style={{ textAlign: "right" }}>
      {activity.description || "-"}
    </span>

    <strong>Activity Type</strong>

    <span style={{ textAlign: "right" }}>
      {activity.activityType}
    </span>

    <strong>Lead</strong>

    <span style={{ textAlign: "right" }}>
      {activity.lead?.firstName
        ? `${activity.lead.firstName} ${activity.lead.lastName}`
        : "-"}
    </span>

    <strong>Customer</strong>

    <span style={{ textAlign: "right" }}>
      {activity.customer?.companyName || "-"}
    </span>

    <strong>Deal</strong>

    <span style={{ textAlign: "right" }}>
      {activity.deal?.title || "-"}
    </span>

    <strong>Created By</strong>

    <span style={{ textAlign: "right" }}>
      {activity.createdBy?.name || "-"}
    </span>

    <strong>Assigned To</strong>

    <span style={{ textAlign: "right" }}>
      {activity.assignedTo?.name || "-"}
    </span>

    <strong>Priority</strong>

    <span style={{ textAlign: "right" }}>
      {activity.priority}
    </span>

    <strong>Status</strong>

    <span style={{ textAlign: "right" }}>
      {activity.status}
    </span>

    <strong>Due Date</strong>

    <span style={{ textAlign: "right" }}>
      {activity.dueDate
        ? new Date(activity.dueDate).toLocaleDateString()
        : "-"}
    </span>

    <strong>Completed At</strong>

    <span style={{ textAlign: "right" }}>
      {activity.completedAt
        ? new Date(activity.completedAt).toLocaleDateString()
        : "-"}
    </span>

    <strong>Created At</strong>

    <span style={{ textAlign: "right" }}>
      {activity.createdAt
        ? new Date(activity.createdAt).toLocaleString()
        : "-"}
    </span>

    <strong>Updated At</strong>

    <span style={{ textAlign: "right" }}>
      {activity.updatedAt
        ? new Date(activity.updatedAt).toLocaleString()
        : "-"}
    </span>

  </div>

</div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "35px",
          }}
        >

          <button
            onClick={onClose}
            style={{
              background: "#2563EB",
              color: "#fff",
              border: "none",
              padding: "14px 40px",
              borderRadius: "10px",
              fontSize: "18px",
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