import {
  Pie
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
);

export default function LeadChart() {

  const data = {

    labels: [
      "New",
      "Qualified",
      "Lost"
    ],

    datasets: [
      {
        data: [
          15,
          9,
          4
        ],

        backgroundColor: [
          "#2563EB", // Blue
          "#10B981", // Green
          "#EF4444"  // Red
        ],

        borderColor: "#FFFFFF",
        borderWidth: 3,

        hoverOffset: 12,
      }
    ]

  };

  const options = {

    responsive: true,

    plugins: {

      legend: {

        position: "top",

        labels: {
          color: "#1E293B",
          font: {
            size: 14,
            weight: "600",
          },
          padding: 20,
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
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
      }}
    >

      <h3
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#1E293B"
        }}
      >
        Lead Status
      </h3>

      <Pie
        data={data}
        options={options}
      />

    </div>

  );

}