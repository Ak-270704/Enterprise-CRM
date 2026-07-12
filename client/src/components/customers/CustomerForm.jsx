import { useEffect, useState } from "react";
import API from "../../services/api";
import { toast } from "react-toastify";

export default function CustomerForm({
  customer,
  onClose,
  onSuccess
}) {

  const [leads, setLeads] = useState([]);

  const [form, setForm] = useState({

    lead: customer?.lead || "",

    companyName: customer?.companyName || "",

    contactPerson: customer?.contactPerson || "",

    email: customer?.email || "",

    phone: customer?.phone || "",

    industry: customer?.industry || "Other",

    address: customer?.address || "",

    city: customer?.city || "",

    state: customer?.state || "",

    country: customer?.country || "",

    postalCode: customer?.postalCode || "",

    isActive: customer?.isActive ?? true

  });

  useEffect(() => {

    fetchLeads();

  }, []);

  const fetchLeads = async () => {

    try {

      const res = await API.get("/leads");

      setLeads(
        res.data.data ||
        res.data.leads ||
        []
      );

    } catch (err) {

      console.error(err);

    }

  };

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setForm({

      ...form,

      [name]:
        type === "checkbox"
          ? checked
          : value

    });

  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    if (customer) {

      await API.put(
        `/customers/${customer._id}`,
        form
      );

      toast.success("Customer Updated Successfully");

    } else {

      await API.post(
        "/customers",
        form
      );

      toast.success("Customer Added Successfully");

    }

    onSuccess();

    onClose();

  } catch (err) {

    console.error(err);

    toast.error(
      err.response?.data?.message ||
      "Something went wrong"
    );

  }
};

  return (

    <form
      onSubmit={handleSubmit}
      className="lead-form"
    >

      <select
        name="lead"
        value={form.lead}
        onChange={handleChange}
        required
      >

        <option value="">
          Select Lead
        </option>

        {leads.map((lead) => (

          <option
            key={lead._id}
            value={lead._id}
          >

            {lead.firstName} {lead.lastName} - {lead.company}

          </option>

        ))}

      </select>

      <input
        name="companyName"
        placeholder="Company Name"
        value={form.companyName}
        onChange={handleChange}
        required
      />

      <input
        name="contactPerson"
        placeholder="Contact Person"
        value={form.contactPerson}
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
        name="industry"
        value={form.industry}
        onChange={handleChange}
      >

        <option>IT</option>
        <option>Healthcare</option>
        <option>Finance</option>
        <option>Education</option>
        <option>Retail</option>
        <option>Manufacturing</option>
        <option>Real Estate</option>
        <option>Other</option>

      </select>

      <input
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
      />

      <input
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
      />

      <input
        name="state"
        placeholder="State"
        value={form.state}
        onChange={handleChange}
      />

      <input
        name="country"
        placeholder="Country"
        value={form.country}
        onChange={handleChange}
      />

      <input
        name="postalCode"
        placeholder="Postal Code"
        value={form.postalCode}
        onChange={handleChange}
      />

      <label>

        <input
          type="checkbox"
          name="isActive"
          checked={form.isActive}
          onChange={handleChange}
        />

        Active Customer

      </label>

      <button type="submit">

        {customer
          ? "Update Customer"
          : "Save Customer"}

      </button>

    </form>

  );

}