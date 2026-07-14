export default function ActivityCard({
  activity,
  onView,
  onEdit,
  onDelete,
}) {

  const priorityStyle = {

    Low: {
      background: "#DCFCE7",
      color: "#15803D",
    },

    Medium: {
      background: "#FEF3C7",
      color: "#B45309",
    },

    High: {
      background: "#FEE2E2",
      color: "#B91C1C",
    },

  };

  const statusStyle = {

    Pending: {
      background: "#DBEAFE",
      color: "#1D4ED8",
    },

    Completed: {
      background: "#DCFCE7",
      color: "#15803D",
    },

    Cancelled: {
      background: "#FEE2E2",
      color: "#B91C1C",
    },

  };

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const due = activity.dueDate
    ? new Date(activity.dueDate)
    : null;

  if (due) {
    due.setHours(0, 0, 0, 0);
  }

  const isOverdue =
    due &&
    due < today &&
    activity.status !== "Completed";

  const isToday =
    due &&
    due.getTime() === today.getTime() &&
    activity.status !== "Completed";

  return (

    <tr
      style={{
        background: isOverdue
          ? "#FEE2E2"
          : isToday
          ? "#FEF3C7"
          : "#fff",
      }}
    >

      <td>{activity.title}</td>

      <td>{activity.activityType}</td>

      <td>

        <span
          style={{
            ...statusStyle[activity.status],
            padding: "6px 12px",
            borderRadius: "20px",
            fontWeight: "600",
            fontSize: "13px",
          }}
        >
          {activity.status}
        </span>

      </td>

      <td>

        <span
          style={{
            ...priorityStyle[activity.priority],
            padding: "6px 12px",
            borderRadius: "20px",
            fontWeight: "600",
            fontSize: "13px",
          }}
        >
          {activity.priority}
        </span>

      </td>

      <td>

        <span
          style={{
            fontWeight: "600",
            color: isOverdue
              ? "#DC2626"
              : isToday
              ? "#D97706"
              : "#1E293B",
          }}
        >

          {activity.dueDate
            ? new Date(
                activity.dueDate
              ).toLocaleDateString()
            : "-"}

        </span>

        {isOverdue && (

          <span
            style={{
              marginLeft: "8px",
              color: "#DC2626",
              fontWeight: "700",
              fontSize: "12px",
            }}
          >
            🔴 Overdue
          </span>

        )}

        {isToday && (

          <span
            style={{
              marginLeft: "8px",
              color: "#D97706",
              fontWeight: "700",
              fontSize: "12px",
            }}
          >
            🟡 Today
          </span>

        )}

      </td>

      <td>

        <button
          onClick={onView}
          style={{
            background: "#0EA5E9",
            color: "#fff",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          View
        </button>

        <button
          onClick={onEdit}
          style={{
            marginLeft: "8px",
            background: "#2563EB",
            color: "#fff",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          style={{
            marginLeft: "8px",
            background: "#DC2626",
            color: "#fff",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>

      </td>

    </tr>

  );

}