export default function ActivityStats({ activities }) {

  const total = activities.length;

  const pending = activities.filter(
    (activity) => activity.status === "Pending"
  ).length;

  const completed = activities.filter(
    (activity) => activity.status === "Completed"
  ).length;

  const cancelled = activities.filter(
    (activity) => activity.status === "Cancelled"
  ).length;

  const highPriority = activities.filter(
    (activity) => activity.priority === "High"
  ).length;

  const cardStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,.08)",
  };

  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(180px,1fr))",
        gap: "18px",
        marginBottom: "25px",
      }}
    >

      <div style={cardStyle}>
        <h4>Total Activities</h4>
        <h2>{total}</h2>
      </div>

      <div style={cardStyle}>
        <h4>Pending</h4>
        <h2 style={{ color: "#F59E0B" }}>
          {pending}
        </h2>
      </div>

      <div style={cardStyle}>
        <h4>Completed</h4>
        <h2 style={{ color: "#16A34A" }}>
          {completed}
        </h2>
      </div>

      <div style={cardStyle}>
        <h4>Cancelled</h4>
        <h2 style={{ color: "#DC2626" }}>
          {cancelled}
        </h2>
      </div>

      <div style={cardStyle}>
        <h4>High Priority</h4>
        <h2 style={{ color: "#7C3AED" }}>
          {highPriority}
        </h2>
      </div>

    </div>

  );

}