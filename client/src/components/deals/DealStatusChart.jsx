import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

export default function DealStatusChart({ deals }) {

  const data = [

    {
      name: "Open",
      value: deals.filter(
        (deal) => deal.status === "Open"
      ).length,
    },

    {
      name: "Won",
      value: deals.filter(
        (deal) => deal.status === "Won"
      ).length,
    },

    {
      name: "Lost",
      value: deals.filter(
        (deal) => deal.status === "Lost"
      ).length,
    },

  ];

  const COLORS = [

    "#2563EB",
    "#16A34A",
    "#DC2626",

  ];

  return (

    <div
      style={{
        flex: 1,
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
      }}
    >

      <h3
        style={{
          marginBottom: "20px",
        }}
      >
        Deal Status Distribution
      </h3>

      <ResponsiveContainer
        width="100%"
        height={320}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={110}
            label
          >

            {data.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index]}
              />

            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}