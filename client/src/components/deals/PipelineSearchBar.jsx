export default function PipelineSearchBar({
  search,
  setSearch,
}) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "18px",
        borderRadius: "12px",
        marginBottom: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
      }}
    >
      <input
        type="text"
        placeholder="🔍 Search deals by title, customer, stage or status..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "14px 18px",
          border: "1px solid #CBD5E1",
          borderRadius: "10px",
          fontSize: "15px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}