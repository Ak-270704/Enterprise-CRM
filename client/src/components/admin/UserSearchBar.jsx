export default function UserSearchBar({

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

        placeholder="Search by Name or Email..."

        value={search}

        onChange={(e) =>
          setSearch(e.target.value)
        }

        style={{

          width: "100%",

          padding: "12px",

          border: "1px solid #CBD5E1",

          borderRadius: "8px",

          fontSize: "15px",

          outline: "none",

          boxSizing: "border-box",

        }}

      />

    </div>

  );

}