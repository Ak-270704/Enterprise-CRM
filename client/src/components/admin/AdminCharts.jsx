import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function AdminCharts({

  stats,

}) {

  const roleData = [

    {

      name: "Admin",

      value: stats.adminUsers || 0,

    },

    {

      name: "Manager",

      value: stats.managerUsers || 0,

    },

    {

      name: "Sales",

      value: stats.salesUsers || 0,

    },

  ];

  const dealData = [

    {

      name: "Won",

      value: stats.wonDeals,

    },

    {

      name: "Open",

      value: stats.openDeals,

    },

    {

      name: "Lost",

      value: stats.lostDeals,

    },

  ];

  const crmData = [

    {

      name: "Leads",

      value: stats.totalLeads,

    },

    {

      name: "Customers",

      value: stats.totalCustomers,

    },

    {

      name: "Deals",

      value: stats.totalDeals,

    },

    {

      name: "Activities",

      value: stats.totalActivities,

    },

  ];

  const COLORS = [

    "#2563EB",

    "#10B981",

    "#EF4444",

    "#F59E0B",

  ];
    return (

    <div

      style={{

        display: "grid",

        gridTemplateColumns:

          "repeat(auto-fit,minmax(400px,1fr))",

        gap: "20px",

        marginTop: "30px",

      }}

    >
            <div

        style={{

          background: "#fff",

          borderRadius: "12px",

          padding: "20px",

          boxShadow:

            "0 2px 10px rgba(0,0,0,.08)",

        }}

      >

        <h3>

          Deal Status

        </h3>

        <ResponsiveContainer

          width="100%"

          height={280}

        >

          <PieChart>

            <Pie

              data={dealData}

              dataKey="value"

              outerRadius={90}

              label

            >

              {

                dealData.map(

                  (_, index) => (

                    <Cell

                      key={index}

                      fill={

                        COLORS[index]

                      }

                    />

                  )

                )

              }

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>
            <div

        style={{

          background: "#fff",

          borderRadius: "12px",

          padding: "20px",

          boxShadow:

            "0 2px 10px rgba(0,0,0,.08)",

        }}

      >

        <h3>

          CRM Records

        </h3>

        <ResponsiveContainer

          width="100%"

          height={280}

        >

          <BarChart

            data={crmData}

          >

            <CartesianGrid

              strokeDasharray="3 3"

            />

            <XAxis

              dataKey="name"

            />

            <YAxis />

            <Tooltip />

            <Bar

              dataKey="value"

              radius={[6,6,0,0]}

            />

          </BarChart>

        </ResponsiveContainer>

      </div>
            <div

        style={{

          background: "#fff",

          borderRadius: "12px",

          padding: "20px",

          boxShadow:

            "0 2px 10px rgba(0,0,0,.08)",

        }}

      >

        <h3>

          Users by Role

        </h3>

        <ResponsiveContainer

          width="100%"

          height={280}

        >

          <PieChart>

            <Pie

              data={roleData}

              dataKey="value"

              outerRadius={90}

              label

            >

              {

                roleData.map(

                  (_, index) => (

                    <Cell

                      key={index}

                      fill={

                        COLORS[index]

                      }

                    />

                  )

                )

              }

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>
            <div

        style={{

          background: "#fff",

          borderRadius: "12px",

          padding: "20px",

          boxShadow:

            "0 2px 10px rgba(0,0,0,.08)",

        }}

      >

        <h3>

          Overall CRM Data

        </h3>

        <ResponsiveContainer

          width="100%"

          height={280}

        >

          <BarChart

            data={crmData}

            layout="vertical"

          >

            <CartesianGrid

              strokeDasharray="3 3"

            />

            <XAxis

              type="number"

            />

            <YAxis

              type="category"

              dataKey="name"

            />

            <Tooltip />

            <Bar

              dataKey="value"

              radius={[0,6,6,0]}

            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}