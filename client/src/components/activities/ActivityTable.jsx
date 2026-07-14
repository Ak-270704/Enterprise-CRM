import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../../services/api";
import ActivityCard from "./ActivityCard";
import ActivityModal from "./ActivityModal";
import ActivitySearchBar from "./ActivitySearchBar";
import ActivityStats from "./ActivityStats";
import ActivityViewModal from "./ActivityViewModal";
export default function ActivityTable() {

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [search, setSearch] =
  useState("");
  const [statusFilter, setStatusFilter] =
  useState("All");
  const [sortOrder, setSortOrder] =
  useState("Newest");
  const [currentPage, setCurrentPage] =
  useState(1);

const activitiesPerPage = 5;
const [selectedActivity, setSelectedActivity] =
  useState(null);
  const [viewOpen, setViewOpen] =
  useState(false);

const [viewActivity, setViewActivity] =
  useState(null);
  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {

    try {

      const res = await API.get("/activities");

      setActivities(
        res.data.data ||
        res.data.activities ||
        []
      );

    } catch (err) {

      console.error(err);

      toast.error("Unable to load activities");

    } finally {

      setLoading(false);

    }

  };
  const deleteActivity = async (id) => {

  if (
    !window.confirm(
      "Delete this activity?"
    )
  )
    return;

  try {

    await API.delete(
      `/activities/${id}`
    );

    toast.success(
      "Activity Deleted Successfully"
    );

    fetchActivities();

  } catch (err) {

    console.error(err);

    toast.error(
      "Unable to delete activity"
    );

  }

};

  if (loading) {

    return <h3>Loading Activities...</h3>;

  }
const filteredActivities = activities
  .filter((activity) => {

    const keyword = search.toLowerCase();

    const matchesSearch =

      activity.title
        ?.toLowerCase()
        .includes(keyword)

      ||

      activity.activityType
        ?.toLowerCase()
        .includes(keyword)

      ||

      activity.status
        ?.toLowerCase()
        .includes(keyword)

      ||

      activity.priority
        ?.toLowerCase()
        .includes(keyword);

    const matchesStatus =

      statusFilter === "All"

      ||

      activity.status === statusFilter;

    return matchesSearch && matchesStatus;

  })

  .sort((a, b) => {

    if (!a.dueDate || !b.dueDate) return 0;

    if (sortOrder === "Newest") {

      return new Date(b.dueDate) - new Date(a.dueDate);

    }

    return new Date(a.dueDate) - new Date(b.dueDate);

  });

const indexOfLastActivity =
  currentPage * activitiesPerPage;

const indexOfFirstActivity =
  indexOfLastActivity - activitiesPerPage;

const currentActivities =
  filteredActivities.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );

const totalPages = Math.ceil(
  filteredActivities.length /
  activitiesPerPage
);

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

      <h2
        style={{
          marginTop: 0,
          marginBottom: "20px"
        }}
      >
        Activity Logs
      </h2>
      <ActivityStats
  activities={filteredActivities}
/>
      <ActivitySearchBar

  search={search}

  setSearch={setSearch}

/>
      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",
    marginBottom: "20px",
    flexWrap: "wrap",
  }}
>

  <div
    style={{
      display: "flex",
      gap: "12px",
      flex: 1,
    }}
  >
    <select
      value={statusFilter}
      onChange={(e) =>
        setStatusFilter(e.target.value)
      }
      style={{
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #CBD5E1",
        minWidth: "170px",
      }}
    >
      <option value="All">
        All Status
      </option>

      <option value="Pending">
        Pending
      </option>

      <option value="Completed">
        Completed
      </option>

      <option value="Cancelled">
        Cancelled
      </option>

    </select>
    <select
  value={sortOrder}
  onChange={(e) =>
    setSortOrder(e.target.value)
  }
  style={{
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #CBD5E1",
    minWidth: "160px",
  }}
>

  <option value="Newest">
    Due Date ↓
  </option>

  <option value="Oldest">
    Due Date ↑
  </option>

</select>

  </div>

  <button
    onClick={() => {

      setSelectedActivity(null);

      setOpen(true);

    }}
    style={{
      background: "#2563EB",
      color: "#fff",
      border: "none",
      padding: "12px 22px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      whiteSpace: "nowrap",
    }}
  >
    + Add Activity
  </button>

</div>

      <table
        className="lead-table"
        style={{ width: "100%" }}
      >

        <thead>
          <tr
            style={{
              background: "#1E3A8A",
              color: "#fff"
            }}
          >
            <th>Title</th>
            <th>Type</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {currentActivities.length === 0 ? (

            <tr>
              <td colSpan="6">
                No Activities Found
              </td>
            </tr>

          ) : (

            currentActivities.map((activity) => (

              <ActivityCard
                key={activity._id}
                activity={activity}
                onView={() => {

  setViewActivity(activity);

  setViewOpen(true);

}}
                onEdit={() => {
                  setSelectedActivity(activity);
                  setOpen(true);
                }}
                onDelete={() =>
                  deleteActivity(activity._id)
                }
              />

            ))

          )}

        </tbody>

      </table>
      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    flexWrap: "wrap",
    gap: "10px",
  }}
>

  <span
    style={{
      color: "#64748B",
      fontSize: "14px",
    }}
  >
    Showing{" "}
    {filteredActivities.length === 0
      ? 0
      : indexOfFirstActivity + 1}
    {" - "}
    {Math.min(
      indexOfLastActivity,
      filteredActivities.length
    )}
    {" of "}
    {filteredActivities.length}
    {" Activities"}
  </span>

  <div
    style={{
      display: "flex",
      gap: "8px",
      alignItems: "center",
    }}
  >

    <button
      onClick={() =>
        setCurrentPage((prev) =>
          Math.max(prev - 1, 1)
        )
      }
      disabled={currentPage === 1}
      style={{
        padding: "8px 16px",
        borderRadius: "6px",
        border: "1px solid #abd1ff",
        background:
          currentPage === 1
            ? "#E5E7EB"
            : "#2563EB",
        color:
          currentPage === 1
            ? "#006aff"
            : "#fff",
        cursor:
          currentPage === 1
            ? "not-allowed"
            : "pointer",
      }}
    >
      Previous
    </button>

    <span
      style={{
        fontWeight: "600",
        color: "#1E293B",
        minWidth: "70px",
        textAlign: "center",
      }}
    >
      {currentPage} / {totalPages || 1}
    </span>

    <button
      onClick={() =>
        setCurrentPage((prev) =>
          Math.min(prev + 1, totalPages)
        )
      }
      disabled={
        currentPage === totalPages ||
        totalPages === 0
      }
      style={{
        padding: "8px 16px",
        borderRadius: "6px",
        border: "1px solid #9fbde1",
        background:
          currentPage === totalPages ||
          totalPages === 0
            ? "#E5E7EB"
            : "#2563EB",
        color:
          currentPage === totalPages ||
          totalPages === 0
            ? "#006aff"
            : "#fff",
        cursor:
          currentPage === totalPages ||
          totalPages === 0
            ? "not-allowed"
            : "pointer",
      }}
    >
      Next
    </button>

  </div>

</div>

    </div>

    <ActivityModal
      open={open}
      activity={selectedActivity}
      onClose={() => {
        setOpen(false);
        setSelectedActivity(null);
      }}
      onSuccess={fetchActivities}
    />
    <ActivityViewModal

  open={viewOpen}

  activity={viewActivity}

  onClose={() => {

    setViewOpen(false);

    setViewActivity(null);

  }}

/>
  </>
);

}