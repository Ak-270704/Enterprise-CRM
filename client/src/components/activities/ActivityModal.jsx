import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../../services/api";

export default function ActivityModal({

  open,
  onClose,
  onSuccess,
  activity,

}) {

  const [users, setUsers] = useState([]);
  const [leads, setLeads] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [deals, setDeals] = useState([]);

  const [formData, setFormData] = useState({

    title: "",

    description: "",

    activityType: "Task",

    lead: "",

    customer: "",

    deal: "",

    createdBy: "",

    assignedTo: "",

    priority: "Medium",

    status: "Pending",

    dueDate: "",

  });
  const fetchDropdowns = async () => {

  try {

    const [

      usersRes,

      leadsRes,

      customersRes,

      dealsRes,

    ] = await Promise.all([

      API.get("/auth/users"),

      API.get("/leads"),

      API.get("/customers"),

      API.get("/deals"),

    ]);

    setUsers(usersRes.data.data || []);
    setLeads(leadsRes.data.data || []);
    setCustomers(customersRes.data.data || []);
    setDeals(dealsRes.data.data || []);

  } catch (err) {

    console.error(err);

    toast.error("Unable to load dropdown data");

  }

};

useEffect(() => {

  if (!open) return;

  fetchDropdowns();

}, [open]);
    useEffect(() => {

    if (activity) {

      setFormData({

        title: activity.title || "",

        description: activity.description || "",

        activityType: activity.activityType || "Task",

        lead: activity.lead?._id || activity.lead || "",

        customer:
          activity.customer?._id ||
          activity.customer ||
          "",

        deal:
          activity.deal?._id ||
          activity.deal ||
          "",

        createdBy:
          activity.createdBy?._id ||
          activity.createdBy ||
          "",

        assignedTo:
          activity.assignedTo?._id ||
          activity.assignedTo ||
          "",

        priority:
          activity.priority || "Medium",

        status:
          activity.status || "Pending",

        dueDate:
          activity.dueDate
            ? activity.dueDate.substring(0, 10)
            : "",

      });

    }

    else {

      setFormData({

        title: "",

        description: "",

        activityType: "Task",

        lead: "",

        customer: "",

        deal: "",

        createdBy: "",

        assignedTo: "",

        priority: "Medium",

        status: "Pending",

        dueDate: "",

      });

    }

  }, [activity]);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (activity) {

        await API.put(

          `/activities/${activity._id}`,

          formData

        );

        toast.success(
          "Activity Updated Successfully"
        );

      }

      else {

        await API.post(

          "/activities",

          formData

        );

        toast.success(
          "Activity Created Successfully"
        );

      }

      onSuccess();

      onClose();

    }

    catch (err) {

      console.error(err);

      toast.error(
        "Unable to save activity"
      );

    }

  };

  if (!open) return null;
  const inputStyle = {

  width: "100%",

  padding: "12px",

  border: "1px solid #CBD5E1",

  borderRadius: "8px",

  fontSize: "15px",

  outline: "none",

  boxSizing: "border-box"

};

  return (

<div
  className="modal-overlay"
  style={{
    position: "fixed",
    inset: 0,
    background: "rgba(15,23,42,.55)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    backdropFilter: "blur(3px)"
  }}
>

<div
  className="modal-content"
  style={{
    background: "#fff",
    width: "900px",
    maxWidth: "95%",
    borderRadius: "14px",
    padding: "28px",
    boxShadow: "0 20px 40px rgba(0,0,0,.25)"
  }}
>

        <h2
  style={{
    marginTop: 0,
    marginBottom: "25px",
    color: "#1E3A8A",
    fontSize: "28px"
  }}
>
  {activity ? "Edit Activity" : "Add Activity"}
</h2>

        <form
  onSubmit={handleSubmit}
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "18px",
  }}
>

  <input
    type="text"
    name="title"
    placeholder="Activity Title"
    value={formData.title}
    onChange={handleChange}
    required
    style={inputStyle}
  />

  <select
    name="activityType"
    value={formData.activityType}
    onChange={handleChange}
    style={inputStyle}
  >
    <option>Call</option>
    <option>Email</option>
    <option>Meeting</option>
    <option>Task</option>
    <option>Note</option>
    <option>Reminder</option>
  </select>

  <textarea
    name="description"
    placeholder="Description"
    value={formData.description}
    onChange={handleChange}
    rows="4"
    style={{
      ...inputStyle,
      gridColumn: "1 / span 2",
      resize: "none",
    }}
  />

  <select
    name="lead"
    value={formData.lead}
    onChange={handleChange}
    style={inputStyle}
  >
    <option value="">Select Lead</option>

    {leads.map((lead) => (
      <option
        key={lead._id}
        value={lead._id}
      >
        {lead.firstName} {lead.lastName}
      </option>
    ))}
  </select>

  <select
    name="customer"
    value={formData.customer}
    onChange={handleChange}
    style={inputStyle}
  >
    <option value="">Select Customer</option>

    {customers.map((customer) => (
      <option
        key={customer._id}
        value={customer._id}
      >
        {customer.companyName}
      </option>
    ))}
  </select>

  <select
    name="deal"
    value={formData.deal}
    onChange={handleChange}
    style={inputStyle}
  >
    <option value="">Select Deal</option>

    {deals.map((deal) => (
      <option
        key={deal._id}
        value={deal._id}
      >
        {deal.title}
      </option>
    ))}
  </select>

  <select
    name="createdBy"
    value={formData.createdBy}
    onChange={handleChange}
    required
    style={inputStyle}
  >
    <option value="">Created By</option>

    {users.map((user) => (
      <option
        key={user._id}
        value={user._id}
      >
        {user.name}
      </option>
    ))}
  </select>

  <select
    name="assignedTo"
    value={formData.assignedTo}
    onChange={handleChange}
    required
    style={inputStyle}
  >
    <option value="">Assigned To</option>

    {users.map((user) => (
      <option
        key={user._id}
        value={user._id}
      >
        {user.name}
      </option>
    ))}
  </select>

  <select
    name="priority"
    value={formData.priority}
    onChange={handleChange}
    style={inputStyle}
  >
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>
  </select>

  <select
    name="status"
    value={formData.status}
    onChange={handleChange}
    style={inputStyle}
  >
    <option>Pending</option>
    <option>Completed</option>
    <option>Cancelled</option>
  </select>

  <input
    type="date"
    name="dueDate"
    value={formData.dueDate}
    onChange={handleChange}
    style={inputStyle}
  />

          <div
  style={{
    gridColumn: "1 / span 2",
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    marginTop: "10px",
  }}
>
  <button
    type="button"
    onClick={onClose}
    style={{
      padding: "12px 24px",
      border: "1px solid #CBD5E1",
      background: "#fff",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
    }}
  >
    Cancel
  </button>

  <button
    type="submit"
    style={{
      padding: "12px 24px",
      background: "#2563EB",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
    }}
  >
    {activity ? "Update Activity" : "Create Activity"}
  </button>
</div>

        </form>

      </div>

    </div>

  );

}
        
