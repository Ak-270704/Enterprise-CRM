import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../../services/api";

export default function UserModal({

  open,

  onClose,

  onSuccess,

  user,

}) {

  const [formData, setFormData] = useState({

    name: "",

    email: "",

    role: "Sales",

    isActive: true,

  });

  useEffect(() => {

    if (user) {

      setFormData({

        name: user.name || "",

        email: user.email || "",

        role: user.role || "Sales",

        isActive: user.isActive,

      });

    }

  }, [user]);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleStatus = () => {

    setFormData({

      ...formData,

      isActive:
        !formData.isActive,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.put(

        `/admin/users/${user._id}/role`,

        {

          role: formData.role,

          isActive:
            formData.isActive,

        }

      );

      toast.success(

        "User Updated Successfully"

      );

      onSuccess();

      onClose();

    }

    catch (err) {

      console.error(err);

      toast.error(

        "Unable to update user"

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

    boxSizing: "border-box",

  };

  return (

    <div

      style={{

        position: "fixed",

        inset: 0,

        background:
          "rgba(15,23,42,.55)",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        backdropFilter:
          "blur(3px)",

        zIndex: 1000,

      }}

    >

      <div

        style={{

          width: "650px",

          maxWidth: "95%",

          background: "#fff",

          borderRadius: "14px",

          padding: "28px",

          boxShadow:
            "0 20px 40px rgba(0,0,0,.25)",

        }}

      >

        <h2

          style={{

            marginTop: 0,

            marginBottom: "25px",

            color: "#1E3A8A",

          }}

        >

          User Details

        </h2>

        <form

          onSubmit={handleSubmit}

          style={{

            display: "grid",

            gridTemplateColumns:
              "1fr 1fr",

            gap: "18px",

          }}

        >

          <div>

            <label>

              Name

            </label>

            <input

              type="text"

              value={formData.name}

              readOnly

              style={inputStyle}

            />

          </div>

          <div>

            <label>

              Email

            </label>

            <input

              type="email"

              value={formData.email}

              readOnly

              style={inputStyle}

            />

          </div>

          <div>

            <label>

              Role

            </label>

            <select

              name="role"

              value={formData.role}

              onChange={
                handleChange
              }

              style={inputStyle}

            >

              <option>

                Admin

              </option>

              <option>

                Manager

              </option>

              <option>

                Sales

              </option>

            </select>

          </div>

          <div>

            <label>

              Status

            </label>

            <button

              type="button"

              onClick={
                handleStatus
              }

              style={{

                width: "100%",

                padding: "12px",

                border: "none",

                borderRadius: "8px",

                cursor: "pointer",

                fontWeight: "600",

                background:

                  formData.isActive

                    ? "#DCFCE7"

                    : "#FEE2E2",

                color:

                  formData.isActive

                    ? "#15803D"

                    : "#B91C1C",

              }}

            >

              {

                formData.isActive

                  ? "Active"

                  : "Inactive"

              }

            </button>

          </div>

          <div

            style={{

              gridColumn:
                "1 / span 2",

              display: "flex",

              justifyContent:
                "flex-end",

              gap: "12px",

              marginTop: "20px",

            }}

          >

            <button

              type="button"

              onClick={onClose}

              style={{

                padding:
                  "12px 20px",

                border: "none",

                borderRadius: "8px",

                cursor: "pointer",

                background: "#E5E7EB",

              }}

            >

              Close

            </button>

            <button

              type="submit"

              style={{

                padding:
                  "12px 20px",

                border: "none",

                borderRadius: "8px",

                cursor: "pointer",

                background:
                  "#2563EB",

                color: "#fff",

                fontWeight: "600",

              }}

            >

              Save Changes

            </button>

          </div>

        </form>

      </div>

    </div>

  );

}