import LeadForm from "./LeadForm";

export default function LeadModal({
  open,
  onClose,
  onSuccess,
  lead
}) {

  if (!open) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <div className="modal-header">

          <h2>

            {lead ? "Edit Lead" : "Add New Lead"}

          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <LeadForm
          lead={lead}
          onClose={onClose}
          onSuccess={onSuccess}
        />

      </div>

    </div>

  );

}