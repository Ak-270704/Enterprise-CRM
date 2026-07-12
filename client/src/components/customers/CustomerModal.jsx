import CustomerForm from "./CustomerForm";

export default function CustomerModal({
  open,
  customer,
  onClose,
  onSuccess
}) {

  if (!open) return null;

  return (

    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
      }}
    >

      <div
        style={{
          background: "#fff",
          width: "700px",
          maxHeight: "90vh",
          overflowY: "auto",
          borderRadius: "10px",
          padding: "25px"
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px"
          }}
        >

          <h2>
            {customer ? "Edit Customer" : "Add Customer"}
          </h2>

          <button onClick={onClose}>
            ✕
          </button>

        </div>

        <CustomerForm
          customer={customer}
          onClose={onClose}
          onSuccess={onSuccess}
        />

      </div>

    </div>

  );

}