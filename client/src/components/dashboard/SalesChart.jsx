import {
  Bar
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

export default function SalesChart() {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    datasets: [
      {
        label: "Sales",

        data: [12, 19, 8, 15, 25, 18],

        backgroundColor: [
          "#2563EB",
          "#3B82F6",
          "#60A5FA",
          "#10B981",
          "#F59E0B",
          "#8B5CF6"
        ],

        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {

      legend: {
        labels: {
          color: "#1E293B",
          font: {
            size: 14,
            weight: "600",
          },
        },
      },

      title: {
        display: false,
      },

    },

    scales: {

      x: {

        ticks: {
          color: "#1E293B",
          font: {
            size: 13,
            weight: "600",
          },
        },

        grid: {
          color: "#E2E8F0",
        },

      },

      y: {

        beginAtZero: true,

        ticks: {
          color: "#1E293B",
          font: {
            size: 13,
            weight: "600",
          },
        },

        grid: {
          color: "#E2E8F0",
        },

      },

    },

  };

  return (

    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      }}
    >

      <h3
        style={{
          marginBottom: "20px",
          color: "#1E293B",
          textAlign: "center",
        }}
      >
        Monthly Sales
      </h3>

      <Bar
        data={data}
        options={options}
      />

    </div>

  );

}