import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";
import "../styles/auth.css";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/auth/register", form);

      alert("Registration Successful");

      navigate("/login");

    } catch (err) {
        console.log(err.response);
        console.log(err.response?.data);
        alert(
            JSON.stringify(err.response?.data, null, 2));
    }
  };

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button type="submit">
            Register
          </button>

        </form>

        <div className="auth-link">
          Already have an account?
          <Link to="/login"> Login</Link>
        </div>

      </div>

    </div>

  );

}