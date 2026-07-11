import { useState } from "react";
import API from "../../services/api";
import { toast } from "react-toastify";

export default function LeadForm({
  lead,
  onClose,
  onSuccess
}) {

  const [form, setForm] = useState({

    firstName: lead?.firstName || "",
    lastName: lead?.lastName || "",
    company: lead?.company || "",
    email: lead?.email || "",
    phone: lead?.phone || "",
    source: lead?.source || "Website",
    status: lead?.status || "New",
    notes: lead?.notes || ""

  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (lead) {

        await API.put(
          `/leads/${lead._id}`,
          form
        );

        toast.success("Lead Updated Successfully");

      } else {

        await API.post(
          "/leads",
          form
        );

        toast.success("Lead Added Successfully");

      }

      onSuccess();

      onClose();

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Something went wrong"
      );

    }

  };

  return (

    <form onSubmit={handleSubmit} className="lead-form">

      <input
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
        required
      />

      <input
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
        required
      />

      <input
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        required
      />

      <select
        name="source"
        value={form.source}
        onChange={handleChange}
      >
        <option>Website</option>
        <option>LinkedIn</option>
        <option>Facebook</option>
        <option>Instagram</option>
        <option>Referral</option>
        <option>Email Campaign</option>
        <option>Cold Call</option>
        <option>Advertisement</option>
        <option>Other</option>
      </select>

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
      >
        <option>New</option>
        <option>Contacted</option>
        <option>Qualified</option>
        <option>Proposal Sent</option>
        <option>Negotiation</option>
        <option>Converted</option>
        <option>Lost</option>
      </select>

      <textarea
        name="notes"
        placeholder="Notes"
        value={form.notes}
        onChange={handleChange}
        rows="3"
      />

      <button type="submit">
        {lead ? "Update Lead" : "Save Lead"}
      </button>

    </form>

  );

}