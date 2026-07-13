import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import API from "../../services/api";

import DealModal from "./DealModal";
import DealCard from "./DealCard";
import DealSearchBar from "./DealSearchBar";
import DealDetailsModal from "./DealDetailsModal";

export default function DealTable() {

  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);

  const [viewOpen, setViewOpen] = useState(false);
  const [viewDeal, setViewDeal] = useState(null);

  // Search
  const [search, setSearch] = useState("");

  // Filters
  const [stageFilter, setStageFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const dealsPerPage = 5;

  // Sorting
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {

    fetchDeals();

  }, []);

  const fetchDeals = async () => {

    try {

      const res = await API.get("/deals");

      setDeals(
        res.data.data ||
        res.data.deals ||
        []
      );

    } catch (err) {

      console.error(err);

      toast.error("Unable to load deals");

    } finally {

      setLoading(false);

    }

  };

  const deleteDeal = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this deal?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/deals/${id}`);

      toast.success("Deal Deleted Successfully");

      fetchDeals();

    } catch (err) {

      console.error(err);

      toast.error("Unable to delete deal");

    }

  };

  // Search + Filters

  const filteredDeals = deals.filter((deal) => {

    const matchesSearch =

      deal.title
        .toLowerCase()
        .includes(search.toLowerCase())

      ||

      deal.customer?.companyName
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesStage =

      stageFilter === "All"

      ||

      deal.stage === stageFilter;

    const matchesStatus =

      statusFilter === "All"

      ||

      deal.status === statusFilter;

    return (

      matchesSearch &&

      matchesStage &&

      matchesStatus

    );

  });

  // Sorting

  const sortedDeals = [...filteredDeals].sort((a, b) => {

    if (!sortField) return 0;

    let valueA;
    let valueB;

    switch (sortField) {

      case "title":

        valueA = a.title.toLowerCase();
        valueB = b.title.toLowerCase();

        break;

      case "value":

        valueA = a.value;
        valueB = b.value;

        break;

      case "stage":

        valueA = a.stage.toLowerCase();
        valueB = b.stage.toLowerCase();

        break;

      default:

        return 0;

    }

    if (valueA < valueB)

      return sortOrder === "asc"

        ? -1

        : 1;

    if (valueA > valueB)

      return sortOrder === "asc"

        ? 1

        : -1;

    return 0;

  });

  // Pagination

  const indexOfLastDeal =
    currentPage * dealsPerPage;

  const indexOfFirstDeal =
    indexOfLastDeal - dealsPerPage;

  const currentDeals =
    sortedDeals.slice(
      indexOfFirstDeal,
      indexOfLastDeal
    );

  const totalPages =
    Math.ceil(
      sortedDeals.length /
      dealsPerPage
    );

  const handleSort = (field) => {

    if (sortField === field) {

      setSortOrder(

        sortOrder === "asc"

          ? "desc"

          : "asc"

      );

    }

    else {

      setSortField(field);

      setSortOrder("asc");

    }

    setCurrentPage(1);

  };

  if (loading) {

    return <h3>Loading Deals...</h3>;

  }
  return (
  <>

    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)"
      }}
    >

      {/* Add Deal Button */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >

        <button

          onClick={() => {

            setSelectedDeal(null);

            setOpen(true);

          }}

          style={{

            background: "#2563EB",

            color: "#fff",

            border: "none",

            padding: "12px 20px",

            borderRadius: "8px",

            cursor: "pointer",

            fontWeight: "600"

          }}

        >

          + Add Deal

        </button>

      </div>

      {/* Search & Filters */}

      <DealSearchBar

        search={search}
        setSearch={setSearch}

        stageFilter={stageFilter}
        setStageFilter={setStageFilter}

        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}

        setCurrentPage={setCurrentPage}

      />

      {/* Table */}

      <table
        className="lead-table"
        style={{
          width: "100%",
          tableLayout: "auto",
          borderCollapse: "collapse"
        }}
      >

        <thead>

          <tr
            style={{
              background: "#1E3A8A",
              color: "#fff"
            }}
          >

            <th
              onClick={() => handleSort("title")}
              style={{
                cursor: "pointer"
              }}
            >

              Title{" "}

              {

                sortField === "title"

                  ?

                  sortOrder === "asc"

                    ? "▲"

                    : "▼"

                  :

                  ""

              }

            </th>

            <th>

              Customer

            </th>

            <th

              onClick={() => handleSort("value")}
              style={{
                cursor: "pointer"
              }}
            >

              Value{" "}

              {

                sortField === "value"

                  ?

                  sortOrder === "asc"

                    ? "▲"

                    : "▼"

                  :

                  ""

              }

            </th>

            <th

              onClick={() => handleSort("stage")}
              style={{
                cursor: "pointer"
              }}
            >

              Stage{" "}

              {

                sortField === "stage"

                  ?

                  sortOrder === "asc"

                    ? "▲"

                    : "▼"

                  :

                  ""

              }

            </th>

            <th>

              Status

            </th>

            <th>

              Actions

            </th>

          </tr>

        </thead>

        <tbody>

          {

            currentDeals.length === 0

              ?

              (

                <tr>

                  <td colSpan="6">

                    No Deals Found

                  </td>

                </tr>

              )

              :

              currentDeals.map((deal) => (

                <DealCard

                  key={deal._id}

                  deal={deal}

                  onView={() => {

                    setViewDeal(deal);

                    setViewOpen(true);

                  }}

                  onEdit={() => {

                    setSelectedDeal(deal);

                    setOpen(true);

                  }}

                  onDelete={() =>

                    deleteDeal(deal._id)

                  }

                />

              ))

          }

        </tbody>

      </table>

    </div>
        {/* Pagination */}

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "20px"
      }}
    >

      <button
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
        style={{
          padding: "10px 18px",
          background:
            currentPage === 1
              ? "#0077ff"
              : "#2563EB",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor:
            currentPage === 1
              ? "not-allowed"
              : "pointer"
        }}
      >
        Previous
      </button>

      <span
        style={{
          fontWeight: "600",
          fontSize: "15px"
        }}
      >
        Page {currentPage} of {totalPages || 1}
      </span>

      <button
        disabled={
          currentPage === totalPages ||
          totalPages === 0
        }
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
        style={{
          padding: "10px 18px",
          background:
            currentPage === totalPages ||
            totalPages === 0
              ? "#0077ff"
              : "#2563EB",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor:
            currentPage === totalPages ||
            totalPages === 0
              ? "not-allowed"
              : "pointer"
        }}
      >
        Next
      </button>

    </div>

    {/* Add / Edit Modal */}

    <DealModal

      open={open}

      deal={selectedDeal}

      onClose={() => {

        setOpen(false);

        setSelectedDeal(null);

      }}

      onSuccess={fetchDeals}

    />

    {/* View Modal */}

    <DealDetailsModal

      open={viewOpen}

      deal={viewDeal}

      onClose={() => {

        setViewOpen(false);

        setViewDeal(null);

      }}

    />

  </>

);
}