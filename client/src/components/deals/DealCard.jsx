export default function DealCard({

  deal,

  onEdit,

  onDelete,

  onView

}) {

  const currencySymbol = {

    INR: "₹",

    USD: "$",

    EUR: "€"

  };

  return (

    <tr>

      <td
        style={{
          fontWeight: "600"
        }}
      >
        {deal.title}
      </td>

      <td>

        {deal.customer?.companyName}

      </td>

      <td>

        {currencySymbol[deal.currency]}

        {" "}

        {deal.value}

      </td>

      <td>

        {deal.stage}

      </td>

      <td>

        <span

          style={{

            background:

              deal.status === "Won"

                ? "#DCFCE7"

                : deal.status === "Lost"

                ? "#FEE2E2"

                : "#DBEAFE",

            color:

              deal.status === "Won"

                ? "#15803D"

                : deal.status === "Lost"

                ? "#B91C1C"

                : "#1D4ED8",

            padding: "6px 12px",

            borderRadius: "20px",

            fontWeight: "600",

            fontSize: "13px"

          }}

        >

          {deal.status}

        </span>

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

            cursor: "pointer"

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

            cursor: "pointer"

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

            cursor: "pointer"

          }}

        >

          Delete

        </button>

      </td>

    </tr>

  );

}