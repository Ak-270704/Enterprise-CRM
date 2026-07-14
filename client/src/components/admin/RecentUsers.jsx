export default function RecentUsers({

  users,

}) {

  return (

    <div
      style={{
        background:"#fff",
        padding:"20px",
        borderRadius:"12px",
        boxShadow:"0 2px 10px rgba(0,0,0,.08)"
      }}
    >

      <h3>Recent Users</h3>

      <table
        style={{
          width:"100%"
        }}
      >

        <thead>

          <tr>

            <th>Name</th>

            <th>Role</th>

          </tr>

        </thead>

        <tbody>

          {users.map(user=>(

            <tr key={user._id}>

              <td>{user.name}</td>

              <td>{user.role}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}