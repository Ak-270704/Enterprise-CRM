export default function CustomerSearchBar({
  search,
  setSearch,
  industryFilter,
  setIndustryFilter,
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
        placeholder="Search Company, Contact, Email, Phone..."
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
        value={industryFilter}
        onChange={(e) => {
          setIndustryFilter(e.target.value);
          setCurrentPage(1);
        }}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      >
        <option value="All">All Industries</option>
        <option value="IT">IT</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Finance">Finance</option>
        <option value="Education">Education</option>
        <option value="Retail">Retail</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Real Estate">Real Estate</option>
        <option value="Other">Other</option>
      </select>

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
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
    </div>
  );
}