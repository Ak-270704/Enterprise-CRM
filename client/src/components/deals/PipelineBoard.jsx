import { useEffect, useState } from "react";
import API from "../../services/api";

import DealStats from "./DealStats";
import PipelineColumn from "./PipelineColumn";
import PipelineSearchBar from "./PipelineSearchBar";
import RevenueChart from "./RevenueChart";
import DealStatusChart from "./DealStatusChart";
import UpcomingClosings from "./UpcomingClosings";
export default function PipelineBoard() {

  const [deals, setDeals] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchDeals();

  }, []);

  const fetchDeals = async () => {

    try {

      const res = await API.get("/deals");

      setDeals(
        res.data.data || []
      );

    } catch (err) {

      console.error(err);

    }

  };

  // Search Filter

  const filteredDeals = deals.filter((deal) => {

    const keyword = search.toLowerCase();

    const title =
      deal.title?.toLowerCase() || "";

    const customer =
      deal.customer?.companyName?.toLowerCase() || "";

    const stage =
      deal.stage?.toLowerCase() || "";

    const status =
      deal.status?.toLowerCase() || "";

    return (

      title.includes(keyword)

      ||

      customer.includes(keyword)

      ||

      stage.includes(keyword)

      ||

      status.includes(keyword)

    );

  });

  const stages = [

    {
      title: "Lead",
      color: "#64748B",
    },

    {
      title: "Qualified",
      color: "#2563EB",
    },

    {
      title: "Proposal",
      color: "#7C3AED",
    },

    {
      title: "Negotiation",
      color: "#F59E0B",
    },

    {
      title: "Won",
      color: "#16A34A",
    },

    {
      title: "Lost",
      color: "#DC2626",
    },

  ];

  return (

    <>

      <PipelineSearchBar
        search={search}
        setSearch={setSearch}
      />

      <DealStats
        deals={filteredDeals}
      />
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px",
    marginBottom: "25px",
  }}
>
  <div></div>

  <UpcomingClosings
    deals={filteredDeals}
  />
</div>
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px",
    marginBottom: "25px",
  }}
>

  <RevenueChart
    deals={filteredDeals}
  />

  <DealStatusChart
    deals={filteredDeals}
  />

</div>
      <div
        style={{
          display: "flex",
          gap: "18px",
          overflowX: "auto",
          width: "100%",
          maxWidth: "100%",
          paddingBottom: "10px",
          boxSizing: "border-box",
        }}
      >

        {

          stages.map((stage) => (

            <PipelineColumn
              key={stage.title}
              title={stage.title}
              color={stage.color}
              deals={
                filteredDeals.filter(
                  (deal) =>
                    deal.stage === stage.title
                )
              }
            />

          ))

        }

      </div>

    </>

  );

}