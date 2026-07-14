import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../services/api";

export default function AdminLoginModal({

  open,

  onClose,

}) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      await API.post("/auth/verify-admin", {

        email,

        password,

      });

      toast.success("Admin Verified Successfully");

      setEmail("");

      setPassword("");

      onClose();

      navigate("/admin");

    } catch (err) {

      toast.error(

        err.response?.data?.message ||

        "Invalid Email or Password"

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >

      <div
        style={{
          width: "420px",
          background: "#fff",
          borderRadius: "12px",
          padding: "30px",
        }}
      >

        <h2
          style={{
            marginTop: 0,
            color: "#1E3A8A",
          }}
        >
          Admin Login
        </h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #CBD5E1",
              boxSizing: "border-box",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #CBD5E1",
              boxSizing: "border-box",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
            }}
          >

            <button
              type="button"
              onClick={onClose}
              style={{
                padding: "10px 18px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              style={{
                background: "#2563EB",
                color: "#fff",
                border: "none",
                padding: "10px 18px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              {loading ? "Checking..." : "Login"}
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}