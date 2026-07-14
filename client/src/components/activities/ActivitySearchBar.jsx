export default function ActivitySearchBar({

  search,

  setSearch,

}) {

  return (

    <div
      style={{
        marginBottom: "20px",
      }}
    >

      <input
        type="text"
        placeholder="🔍 Search by title, type, status or priority..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px 16px",
          borderRadius: "8px",
          border: "1px solid #CBD5E1",
          fontSize: "15px",
          outline: "none",
        }}
      />

    </div>

  );

}