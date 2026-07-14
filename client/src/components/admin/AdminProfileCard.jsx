import {
  FaUserShield,
} from "react-icons/fa";

export default function AdminProfileCard() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  return (

    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
        textAlign: "center",
      }}
    >

      <div
        style={{
          width: "90px",
          height: "90px",
          margin: "0 auto",
          borderRadius: "50%",
          background: "#DBEAFE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#2563EB",
          fontSize: "40px",
        }}
      >

        <FaUserShield />

      </div>

      <h3
        style={{
          marginBottom: "5px",
        }}
      >
        {user.name}
      </h3>

      <p
        style={{
          color: "#64748B",
          marginTop: 0,
        }}
      >
        {user.role}
      </p>

      <hr />
      <br />
      <p>

        <b>Email</b>
        <br />

        {user.email}

      </p>
      <br />
      <p>

        <b>Last Login</b>
        
        <br />

        {new Date().toLocaleString()}

      </p>

    </div>

  );

}