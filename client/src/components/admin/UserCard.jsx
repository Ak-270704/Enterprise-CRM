export default function UserCard({

  user,

  onView,

  onEdit,

  onDelete,

}) {

  const roleStyle = {

    Admin: {

      background: "#FEE2E2",

      color: "#B91C1C",

    },

    Manager: {

      background: "#DBEAFE",

      color: "#1D4ED8",

    },

    Sales: {

      background: "#DCFCE7",

      color: "#15803D",

    },

  };

  const statusStyle = user.isActive

    ? {

        background: "#DCFCE7",

        color: "#15803D",

      }

    : {

        background: "#FEE2E2",

        color: "#B91C1C",

      };

  return (

    <tr>

      <td>

        {user.name}

      </td>

      <td>

        {user.email}

      </td>

      <td>

        <span

          style={{

            ...(roleStyle[user.role] || {

              background: "#E5E7EB",

              color: "#374151",

            }),

            padding: "6px 12px",

            borderRadius: "20px",

            fontWeight: "600",

            fontSize: "13px",

          }}

        >

          {user.role}

        </span>

      </td>

      <td>

        <span

          style={{

            ...statusStyle,

            padding: "6px 12px",

            borderRadius: "20px",

            fontWeight: "600",

            fontSize: "13px",

          }}

        >

          {user.isActive ? "Active" : "Inactive"}

        </span>

      </td>

      <td>

        {

          user.createdAt

            ?

            new Date(

              user.createdAt

            ).toLocaleDateString()

            :

            "-"

        }

      </td>

      <td>

        <button

          onClick={onView}

          style={{

            background: "#0EA5E9",

            color: "#fff",

            border: "none",

            padding: "8px 12px",

            borderRadius: "6px",

            cursor: "pointer",

          }}

        >

          View

        </button>

        <button

          onClick={onEdit}

          style={{

            marginLeft: "8px",

            background: "#2563EB",

            color: "#fff",

            border: "none",

            padding: "8px 12px",

            borderRadius: "6px",

            cursor: "pointer",

          }}

        >

          Edit

        </button>

        <button

          onClick={onDelete}

          style={{

            marginLeft: "8px",

            background: "#DC2626",

            color: "#fff",

            border: "none",

            padding: "8px 12px",

            borderRadius: "6px",

            cursor: "pointer",

          }}

        >

          Delete

        </button>

      </td>

    </tr>

  );

}