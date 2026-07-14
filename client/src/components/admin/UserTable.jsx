import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../../services/api";

import UserCard from "./UserCard";
import UserModal from "./UserModal";
import UserSearchBar from "./UserSearchBar";
import UserStats from "./UserStats";

export default function UserTable() {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const [search, setSearch] = useState("");

  const [roleFilter, setRoleFilter] = useState("All");

  const [statusFilter, setStatusFilter] = useState("All");

  const [sortOrder, setSortOrder] = useState("Newest");

  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  const fetchUsers = async () => {

    try {

      const res = await API.get("/admin/users");

      setUsers(res.data.data || []);

    }

    catch (err) {

      console.error(err);

      toast.error("Unable to load users");

    }

    finally {

      setLoading(false);

    }

  };
   useEffect(() => {

    fetchUsers();

  }, []);

  useEffect(() => {

  setCurrentPage(1);

}, [

  search,

  roleFilter,

  statusFilter,

  sortOrder,

]);

  const deleteUser = async (id) => {

  const selected = users.find(

    (u) => u._id === id

  );

  if (

    !window.confirm(

      `Delete ${selected?.name}?`

    )

  )

    return;

  try {

    await API.delete(

      `/admin/users/${id}`

    );

    toast.success(

      "User deleted successfully"

    );

    fetchUsers();

  }

  catch (err) {

    console.error(err);

    toast.error(

      "Unable to delete user"

    );

  }

};

  if (loading) {

    return <h3>Loading Users...</h3>;

  }

  const filteredUsers = users

    .filter((user) => {

      const keyword = search.toLowerCase();

      const matchesSearch =

        user.name?.toLowerCase().includes(keyword) ||

        user.email?.toLowerCase().includes(keyword);

      const matchesRole =

        roleFilter === "All" ||

        user.role === roleFilter;

      const matchesStatus =

        statusFilter === "All" ||

        (statusFilter === "Active" && user.isActive) ||

        (statusFilter === "Inactive" && !user.isActive);

      return (

        matchesSearch &&

        matchesRole &&

        matchesStatus

      );

    })

    .sort((a, b) => {

      if (sortOrder === "Newest") {

        return new Date(b.createdAt) -

          new Date(a.createdAt);

      }

      if (sortOrder === "Oldest") {

        return new Date(a.createdAt) -

          new Date(b.createdAt);

      }

      if (sortOrder === "A-Z") {

        return a.name.localeCompare(b.name);

      }

      return b.name.localeCompare(a.name);

    });

  const totalPages = Math.max(

  1,

  Math.ceil(

    filteredUsers.length /

    usersPerPage

  )

);

  const indexOfLast =

    currentPage * usersPerPage;

  const indexOfFirst =

    indexOfLast - usersPerPage;

  const currentUsers =

    filteredUsers.slice(

      indexOfFirst,

      indexOfLast

    );
      return (

    <>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,.08)"
        }}
      >

        <h2
          style={{
            marginTop: 0,
            marginBottom: "20px"
          }}
        >
          User Management
        </h2>

        <UserStats users={filteredUsers} />

        <UserSearchBar

          search={search}

          setSearch={setSearch}

        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            gap: "12px",
            flexWrap: "wrap"
          }}
        >

          <div
            style={{
              display: "flex",
              gap: "10px"
            }}
          >

            <select

              value={roleFilter}

              onChange={(e) =>

                setRoleFilter(e.target.value)

              }

            >

              <option value="All">

                All Roles

              </option>

              <option value="Admin">

                Admin

              </option>

              <option value="Manager">

                Manager

              </option>

              <option value="Sales">

                Sales

              </option>

            </select>

            <select

              value={statusFilter}

              onChange={(e) =>

                setStatusFilter(e.target.value)

              }

            >

              <option value="All">

                All Status

              </option>

              <option value="Active">

                Active

              </option>

              <option value="Inactive">

                Inactive

              </option>

            </select>

            <select

              value={sortOrder}

              onChange={(e) =>

                setSortOrder(e.target.value)

              }

            >

              <option value="Newest">

                Newest

              </option>

              <option value="Oldest">

                Oldest

              </option>

              <option value="A-Z">

                Name A-Z

              </option>

              <option value="Z-A">

                Name Z-A

              </option>

            </select>

          </div>

        </div>

        <table
          className="lead-table"
          style={{
            width: "100%"
          }}
        >

          <thead>

            <tr
              style={{
                background: "#1E3A8A",
                color: "#fff"
              }}
            >

              <th>Name</th>

              <th>Email</th>

              <th>Role</th>

              <th>Status</th>

              <th>Created</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {

              currentUsers.length === 0 ?

              (

                <tr>

                  <td colSpan="6">

                    No Users Found

                  </td>

                </tr>

              )

              :

              (

                currentUsers.map((user) => (

                  <UserCard

                    key={user._id}

                    user={user}

                    onView={() => {

                      setSelectedUser(user);

                      setOpen(true);

                    }}

                    onEdit={() => {

                      setSelectedUser(user);

                      setOpen(true);

                    }}

                    onDelete={() =>

                      deleteUser(user._id)

                    }

                  />

                ))

              )

            }

          </tbody>

        </table>
                <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "20px"
          }}
        >

          <button

            disabled={currentPage === 1}

            onClick={() =>

              setCurrentPage(

                currentPage - 1

              )

            }

          >

            Previous

          </button>

          <span>

            Page {currentPage} of {totalPages}

          </span>

          <button

            disabled={

              currentPage === totalPages

            }

            onClick={() =>

              setCurrentPage(

                currentPage + 1

              )

            }

          >

            Next

          </button>

        </div>

      </div>

      <UserModal

        open={open}

        user={selectedUser}

        onClose={() => {

          setOpen(false);

          setSelectedUser(null);

        }}

        onSuccess={fetchUsers}

      />

    </>

  );

}