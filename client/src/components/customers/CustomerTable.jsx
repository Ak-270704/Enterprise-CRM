import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import API from "../../services/api";

import CustomerModal from "./CustomerModal";
import CustomerSearchBar from "./CustomerSearchBar";
import CustomerCard from "./CustomerCard";
import CustomerDetailsModal from "./CustomerDetailsModal";

export default function CustomerTable() {

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [viewOpen, setViewOpen] = useState(false);
  const [viewCustomer, setViewCustomer] = useState(null);

  // Search
  const [search, setSearch] = useState("");

  // Filters
  const [industryFilter, setIndustryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 5;

  // Sorting
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {

    try {

      const res = await API.get("/customers");

      setCustomers(
        res.data.data ||
        res.data.customers ||
        []
      );

    } catch (err) {

      console.error(err);
      toast.error("Failed to load customers");

    } finally {

      setLoading(false);

    }

  };

  const deleteCustomer = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/customers/${id}`);

      toast.success("Customer Deleted Successfully");

      if (
        currentPage > 1 &&
        currentCustomers.length === 1
      ) {
        setCurrentPage(currentPage - 1);
      }

      fetchCustomers();

    } catch (err) {

      console.error(err);
      toast.error("Unable to delete customer");

    }

  };

  // Search + Filters

  const filteredCustomers = customers.filter((customer) => {

    const matchesSearch =

      customer.companyName
        .toLowerCase()
        .includes(search.toLowerCase())

      ||

      customer.contactPerson
        .toLowerCase()
        .includes(search.toLowerCase())

      ||

      customer.email
        .toLowerCase()
        .includes(search.toLowerCase())

      ||

      customer.phone
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesIndustry =

      industryFilter === "All" ||

      customer.industry === industryFilter;

    const matchesStatus =

      statusFilter === "All" ||

      (
        statusFilter === "Active"
          ? customer.isActive
          : !customer.isActive
      );

    return (
      matchesSearch &&
      matchesIndustry &&
      matchesStatus
    );

  });

  // Sorting

  const sortedCustomers = [...filteredCustomers].sort((a, b) => {

    if (!sortField) return 0;

    let valueA;
    let valueB;

    switch (sortField) {

      case "company":

        valueA = a.companyName.toLowerCase();
        valueB = b.companyName.toLowerCase();

        break;

      case "contact":

        valueA = a.contactPerson.toLowerCase();
        valueB = b.contactPerson.toLowerCase();

        break;

      case "industry":

        valueA = a.industry.toLowerCase();
        valueB = b.industry.toLowerCase();

        break;

      default:
        return 0;

    }

    if (valueA < valueB)
      return sortOrder === "asc" ? -1 : 1;

    if (valueA > valueB)
      return sortOrder === "asc" ? 1 : -1;

    return 0;

  });

  // Pagination

  const indexOfLastCustomer =
    currentPage * customersPerPage;

  const indexOfFirstCustomer =
    indexOfLastCustomer - customersPerPage;

  const currentCustomers =
    sortedCustomers.slice(
      indexOfFirstCustomer,
      indexOfLastCustomer
    );

  const totalPages =
    Math.ceil(
      sortedCustomers.length /
      customersPerPage
    );

  const handleSort = (field) => {

    if (sortField === field) {

      setSortOrder(
        sortOrder === "asc"
          ? "desc"
          : "asc"
      );

    } else {

      setSortField(field);
      setSortOrder("asc");

    }

    setCurrentPage(1);

  };

  if (loading) {

    return <h3>Loading Customers...</h3>;

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

      {/* Add Button */}

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

            setSelectedCustomer(null);
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
          + Add Customer
        </button>

      </div>

      {/* Search */}

      <CustomerSearchBar
        search={search}
        setSearch={setSearch}
        industryFilter={industryFilter}
        setIndustryFilter={setIndustryFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        setCurrentPage={setCurrentPage}
      />

      {/* Table */}

      <div className="table-container">

        <table className="lead-table">

          <thead>

            <tr
              style={{
                background: "#1E3A8A",
                color: "#fff"
              }}
            >

              <th
                onClick={() => handleSort("company")}
                style={{ cursor: "pointer" }}
              >
                Company{" "}
                {
                  sortField === "company"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : ""
                }
              </th>

              <th
                onClick={() => handleSort("contact")}
                style={{ cursor: "pointer" }}
              >
                Contact{" "}
                {
                  sortField === "contact"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : ""
                }
              </th>

              <th
                onClick={() => handleSort("industry")}
                style={{ cursor: "pointer" }}
              >
                Industry{" "}
                {
                  sortField === "industry"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : ""
                }
              </th>

              <th>Email</th>

              <th>Phone</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {

              currentCustomers.length === 0

                ?

                (

                  <tr>

                    <td colSpan="7">

                      No Customers Found

                    </td>

                  </tr>

                )

                :

                currentCustomers.map((customer) => (

                  <CustomerCard

                    key={customer._id}

                    customer={customer}

                    onView={() => {

                      setViewCustomer(customer);

                      setViewOpen(true);

                    }}

                    onEdit={() => {

                      setSelectedCustomer(customer);

                      setOpen(true);

                    }}

                    onDelete={() =>

                      deleteCustomer(customer._id)

                    }

                  />

                ))

            }

          </tbody>

        </table>

      </div>

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

    <CustomerModal
      open={open}
      customer={selectedCustomer}
      onClose={() => {

        setOpen(false);

        setSelectedCustomer(null);

      }}
      onSuccess={fetchCustomers}
    />

    {/* View Modal */}

    <CustomerDetailsModal
      open={viewOpen}
      customer={viewCustomer}
      onClose={() => {

        setViewOpen(false);

        setViewCustomer(null);

      }}
    />

  </>

);

} 