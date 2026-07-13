import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../../services/api";

export default function DealModal({

  open,
  onClose,
  onSuccess,
  deal

}) {

  const [customers, setCustomers] = useState([]);

  const [formData, setFormData] = useState({

    title: "",

    customer: "",

    value: "",

    currency: "INR",

    stage: "Lead",

    probability: 10,

    expectedCloseDate: "",

    description: "",

    status: "Open"

  });

  useEffect(() => {

    if (!open) return;

    API.get("/customers")
      .then((res) => {

        setCustomers(res.data.data || []);

      });

  }, [open]);

  useEffect(() => {

    if (deal) {

      setFormData({

        title: deal.title || "",

        customer: deal.customer?._id || deal.customer || "",

        value: deal.value || "",

        currency: deal.currency || "INR",

        stage: deal.stage || "Lead",

        probability: deal.probability || 10,

        expectedCloseDate: deal.expectedCloseDate
          ? deal.expectedCloseDate.substring(0, 10)
          : "",

        description: deal.description || "",

        status: deal.status || "Open"

      });

    } else {

      setFormData({

        title: "",

        customer: "",

        value: "",

        currency: "INR",

        stage: "Lead",

        probability: 10,

        expectedCloseDate: "",

        description: "",

        status: "Open"

      });

    }

  }, [deal]);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (deal) {

        await API.put(`/deals/${deal._id}`, formData);

        toast.success("Deal Updated Successfully");

      } else {

        await API.post("/deals", formData);

        toast.success("Deal Created Successfully");

      }

      onSuccess();

      onClose();

    } catch (err) {

      console.error(err);

      toast.error("Unable to save deal");

    }

  };

  if (!open) return null;
  const inputStyle = {
  width: "100%",
  padding: "12px",
  border: "1px solid #D1D5DB",
  borderRadius: "8px",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};
  return (
  <div
    className="modal-overlay"
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.55)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
  >
    <div
      className="modal-content"
      style={{
        background: "#fff",
        width: "90%",
        maxWidth: "900px",
        borderRadius: "12px",
        padding: "25px",
        boxShadow: "0 10px 30px rgba(0,0,0,.25)",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          color: "#1E3A8A",
        }}
      >
        {deal ? "Edit Deal" : "Add Deal"}
      </h2>

      <form onSubmit={handleSubmit}>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          <input
            name="title"
            placeholder="Deal Title"
            value={formData.title}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <select
            name="customer"
            value={formData.customer}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">
              Select Customer
            </option>

            {customers.map((customer) => (
              <option
                key={customer._id}
                value={customer._id}
              >
                {customer.companyName}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="value"
            placeholder="Deal Value"
            value={formData.value}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <select
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            style={inputStyle}
          >
            <option>INR</option>
            <option>USD</option>
            <option>EUR</option>
          </select>

          <select
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            style={inputStyle}
          >
            <option>Lead</option>
            <option>Qualified</option>
            <option>Proposal</option>
            <option>Negotiation</option>
            <option>Won</option>
            <option>Lost</option>
          </select>

          <input
            type="number"
            min="0"
            max="100"
            name="probability"
            value={formData.probability}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="date"
            name="expectedCloseDate"
            value={formData.expectedCloseDate}
            onChange={handleChange}
            style={inputStyle}
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            style={inputStyle}
          >
            <option>Open</option>
            <option>Won</option>
            <option>Lost</option>
          </select>

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            style={{
              ...inputStyle,
              gridColumn: "1 / 3",
              resize: "vertical",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginTop: "25px",
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>

          <button
            type="submit"
            style={{
              padding: "10px 22px",
              borderRadius: "8px",
              border: "none",
              background: "#2563EB",
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {deal ? "Update" : "Create"}
          </button>
        </div>

      </form>
    </div>
  </div>
);

}