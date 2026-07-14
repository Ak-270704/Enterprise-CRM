import {
  Pie
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
);

export default function LeadChart({

  data,

}) {

  const chartData = {

    labels: [

      "New",

      "Contacted",

      "Qualified",

      "Proposal",

      "Negotiation",

      "Won",

      "Lost",

    ],

    datasets: [

      {

        data: [

          data?.New || 0,

          data?.Contacted || 0,

          data?.Qualified || 0,

          data?.Proposal || 0,

          data?.Negotiation || 0,

          data?.Won || 0,

          data?.Lost || 0,

        ],

        backgroundColor: [

          "#2563EB", // New

          "#0EA5E9", // Contacted

          "#10B981", // Qualified

          "#F59E0B", // Proposal

          "#8B5CF6", // Negotiation

          "#22C55E", // Won

          "#EF4444", // Lost

        ],

        borderColor: "#FFFFFF",

        borderWidth: 3,

        hoverOffset: 12,

      },

    ],

  };

  const options = {

    responsive: true,

    plugins: {

      legend: {

        position: "top",

        labels: {

          color: "#1E293B",

          font: {

            size: 13,

            weight: "600",

          },

          padding: 18,

        },

      },

      title: {

        display: false,

      },

    },

  };

  return (

    <div
      style={{
        background: "#FFFFFF",
        padding: "20px",
        borderRadius: "12px",
        boxShadow:
          "0 4px 15px rgba(0,0,0,.08)",
      }}
    >

      <h3
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#1E293B",
        }}
      >
        Lead Status
      </h3>

      <Pie

        data={chartData}

        options={options}

      />

    </div>

  );

}