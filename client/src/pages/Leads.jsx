import LeadTable from "../components/leads/LeadTable";
import "../styles/leads.css";

export default function Leads() {

  return (

    <div className="leads-page">

      <div className="page-header">

        <h1>Leads Management</h1>

      </div>

      <LeadTable />

    </div>

  );

}