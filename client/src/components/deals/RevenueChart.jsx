import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function RevenueChart({ deals }) {

  const stages = [
    "Lead",
    "Qualified",
    "Proposal",
    "Negotiation",
    "Won",
    "Lost",
  ];

  const data = stages.map((stage) => ({

    stage,

    revenue: deals
      .filter((deal) => deal.stage === stage)
      .reduce(
        (sum, deal) =>
          sum + Number(deal.value || 0),
        0
      ),

  }));

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
        Revenue by Stage
      </h3>

      <ResponsiveContainer
        width="100%"
        height={320}
      >

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="stage" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="revenue"
            fill="#2563EB"
            radius={[6,6,0,0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}