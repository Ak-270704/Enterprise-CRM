export default function DealSearchBar({

  search,
  setSearch,

  stageFilter,
  setStageFilter,

  statusFilter,
  setStatusFilter,

  setCurrentPage

}) {

  return (

    <div
      style={{
        display: "flex",
        gap: "15px",
        marginBottom: "20px"
      }}
    >

      <input

        type="text"

        placeholder="Search Deal, Customer..."

        value={search}

        onChange={(e) => {

          setSearch(e.target.value);

          setCurrentPage(1);

        }}

        style={{

          flex: 1,

          padding: "10px",

          borderRadius: "8px",

          border: "1px solid #ccc"

        }}

      />

      <select

        value={stageFilter}

        onChange={(e) => {

          setStageFilter(e.target.value);

          setCurrentPage(1);

        }}

        style={{
          padding: "10px",
          borderRadius: "8px"
        }}

      >

        <option value="All">All Stages</option>

        <option>Lead</option>

        <option>Qualified</option>

        <option>Proposal</option>

        <option>Negotiation</option>

        <option>Won</option>

        <option>Lost</option>

      </select>

      <select

        value={statusFilter}

        onChange={(e) => {

          setStatusFilter(e.target.value);

          setCurrentPage(1);

        }}

        style={{
          padding: "10px",
          borderRadius: "8px"
        }}

      >

        <option value="All">All Status</option>

        <option>Open</option>

        <option>Won</option>

        <option>Lost</option>

      </select>

    </div>

  );

}