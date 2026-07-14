export default function UserStats({

  users,

}) {

  const totalUsers = users.length;

  const admins = users.filter(

    (u) => u.role === "Admin"

  ).length;

  const managers = users.filter(

    (u) => u.role === "Manager"

  ).length;

  const sales = users.filter(

    (u) => u.role === "Sales"

  ).length;

  const activeUsers = users.filter(

    (u) => u.isActive

  ).length;

  const inactiveUsers =

    totalUsers - activeUsers;

  const cardStyle = {

    flex: 1,

    minWidth: "170px",

    background: "#fff",

    padding: "18px",

    borderRadius: "10px",

    boxShadow:

      "0 2px 10px rgba(0,0,0,.08)",

    textAlign: "center",

  };

  return (

    <div

      style={{

        display: "flex",

        gap: "15px",

        flexWrap: "wrap",

        marginBottom: "25px",

      }}

    >

      <div style={cardStyle}>

        <h3>{totalUsers}</h3>

        <p>Total Users</p>

      </div>

      <div style={cardStyle}>

        <h3>{admins}</h3>

        <p>Admins</p>

      </div>

      <div style={cardStyle}>

        <h3>{managers}</h3>

        <p>Managers</p>

      </div>

      <div style={cardStyle}>

        <h3>{sales}</h3>

        <p>Sales</p>

      </div>

      <div style={cardStyle}>

        <h3>{activeUsers}</h3>

        <p>Active</p>

      </div>

      <div style={cardStyle}>

        <h3>{inactiveUsers}</h3>

        <p>Inactive</p>

      </div>

    </div>

  );

}
