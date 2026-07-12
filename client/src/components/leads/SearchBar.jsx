export default function SearchBar({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  setCurrentPage,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Search by Name, Email, Company, Phone..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <select
        value={statusFilter}
        onChange={(e) => {
          setStatusFilter(e.target.value);
          setCurrentPage(1);
        }}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      >
        <option value="All">All Status</option>
        <option value="New">New</option>
        <option value="Contacted">Contacted</option>
        <option value="Qualified">Qualified</option>
        <option value="Proposal Sent">Proposal Sent</option>
        <option value="Negotiation">Negotiation</option>
        <option value="Converted">Converted</option>
        <option value="Lost">Lost</option>
      </select>
    </div>
  );
}