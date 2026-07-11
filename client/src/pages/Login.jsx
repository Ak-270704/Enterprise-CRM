import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";
import { useAuth } from "../context/AuthContext";
import "../styles/auth.css";

export default function Login() {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
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

    const res = await API.post("/auth/login", form);

    // Save token
    localStorage.setItem("token", res.data.token);

    // Save user
    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    // Update Auth Context
    login(res.data.user);

    // Redirect
    navigate("/dashboard");

  } catch (err) {

    alert(
      err.response?.data?.message || "Login Failed"
    );

  }

};

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>Enterprise CRM</h2>

        <form onSubmit={handleSubmit}>

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
            Login
          </button>

        </form>

        <div className="auth-link">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </div>

      </div>

    </div>

  );

}