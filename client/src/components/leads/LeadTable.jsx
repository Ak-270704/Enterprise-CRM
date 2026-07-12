import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import API from "../../services/api";

import LeadModal from "./LeadModal";
import SearchBar from "./SearchBar";
import LeadCard from "./LeadCard";
import LeadDetailsModal from "./LeadDetailsModal";
export default function LeadTable() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
const [viewLead, setViewLead] = useState(null);
const [viewOpen, setViewOpen] = useState(false);
  // Search & Filter States
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");


  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);

  const leadsPerPage = 5;


  // Sorting
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");



  useEffect(() => {
    fetchLeads();
  }, []);


  
  const fetchLeads = async () => {

    try {

      const res = await API.get("/leads");

      console.log(res.data);

      setLeads(
        res.data.data ||
        res.data.leads ||
        []
      );

    } catch(err){

      console.error(err);

    } finally {

      setLoading(false);

    }

  };


  const deleteLead = async(id)=>{

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this lead?"
      );


    if(!confirmDelete) return;


    try{

      await API.delete(`/leads/${id}`);

      toast.success(
        "Lead Deleted Successfully"
      );

      fetchLeads();


    }catch(err){

      console.error(err);

      toast.error(
        "Unable to delete lead"
      );

    }

  };



  // Status Badge Styles

  const getStatusStyle=(status)=>{

    switch(status){

      case "New":
        return {
          background:"#DBEAFE",
          color:"#1D4ED8"
        };


      case "Contacted":
        return {
          background:"#FEF3C7",
          color:"#92400E"
        };


      case "Qualified":
        return {
          background:"#EDE9FE",
          color:"#6D28D9"
        };


      case "Proposal Sent":
        return {
          background:"#E0F2FE",
          color:"#0369A1"
        };


      case "Negotiation":
        return {
          background:"#FEF9C3",
          color:"#854D0E"
        };


      case "Converted":
        return {
          background:"#DCFCE7",
          color:"#15803D"
        };


      case "Lost":
        return {
          background:"#FEE2E2",
          color:"#B91C1C"
        };


      default:

        return {
          background:"#F3F4F6",
          color:"#374151"
        };

    }

  };



  // Search + Filter Logic

  const filteredLeads = leads.filter((lead)=>{


    const fullName =
      `${lead.firstName} ${lead.lastName}`
      .toLowerCase();



    const matchesSearch =

      fullName.includes(
        search.toLowerCase()
      )

      ||

      lead.email
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )

      ||

      lead.company
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )

      ||

      lead.phone
      .toLowerCase()
      .includes(
        search.toLowerCase()
      );



    const matchesStatus =

      statusFilter==="All"

      ||

      lead.status===statusFilter;



    return matchesSearch && matchesStatus;


  });




  // Sorting Logic

  const sortedLeads = [...filteredLeads].sort(
    (a,b)=>{


    if(!sortField)
      return 0;



    let valueA;
    let valueB;



    switch(sortField){


      case "name":

        valueA =
        `${a.firstName} ${a.lastName}`
        .toLowerCase();

        valueB =
        `${b.firstName} ${b.lastName}`
        .toLowerCase();

        break;



      case "company":

        valueA =
        a.company.toLowerCase();

        valueB =
        b.company.toLowerCase();

        break;



      case "status":

        valueA =
        a.status.toLowerCase();

        valueB =
        b.status.toLowerCase();

        break;



      default:
        return 0;

    }



    if(valueA < valueB)

      return sortOrder==="asc"
      ? -1
      : 1;



    if(valueA > valueB)

      return sortOrder==="asc"
      ? 1
      : -1;



    return 0;


  });
  
  // Pagination Logic

  const indexOfLastLead =
    currentPage * leadsPerPage;


  const indexOfFirstLead =
    indexOfLastLead - leadsPerPage;


  const currentLeads =
    sortedLeads.slice(
      indexOfFirstLead,
      indexOfLastLead
    );


  const totalPages =
    Math.ceil(
      sortedLeads.length / leadsPerPage
    );



  // Sorting Function

  const handleSort = (field)=>{

    if(sortField === field){

      setSortOrder(
        sortOrder === "asc"
          ? "desc"
          : "asc"
      );

    }
    else{

      setSortField(field);

      setSortOrder("asc");

    }

  };



  if(loading){

    return <h3>Loading Leads...</h3>;

  }



  return (

    <>

      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          marginBottom:"20px"
        }}
      >

        <button

          onClick={()=>{

            setSelectedLead(null);

            setOpen(true);

          }}

          style={{

            background:"#2563EB",

            color:"#fff",

            border:"none",

            padding:"12px 20px",

            borderRadius:"8px",

            cursor:"pointer",

            fontWeight:"600"

          }}

        >

          + Add Lead

        </button>


      </div>




      {/* Search & Filter */}

<SearchBar
  search={search}
  setSearch={setSearch}
  statusFilter={statusFilter}
  setStatusFilter={setStatusFilter}
  setCurrentPage={setCurrentPage}
/>

      <div className="table-container">


        <table className="lead-table">


          <thead>


            <tr

              style={{

                background:"#1E3A8A",

                color:"#FFFFFF"

              }}

            >



              <th

                onClick={()=>handleSort("name")}

                style={{

                  cursor:"pointer"

                }}

              >

                Name{" "}

                {

                sortField==="name"

                ?

                sortOrder==="asc"

                ?

                "▲"

                :

                "▼"

                :

                ""

                }


              </th>



              <th>
                Email
              </th>



              <th>
                Phone
              </th>




              <th

                onClick={()=>handleSort("company")}

                style={{

                  cursor:"pointer"

                }}

              >

                Company{" "}

                {

                sortField==="company"

                ?

                sortOrder==="asc"

                ?

                "▲"

                :

                "▼"

                :

                ""

                }


              </th>




              <th

                onClick={()=>handleSort("status")}

                style={{

                  cursor:"pointer"

                }}

              >

                Status{" "}

                {

                sortField==="status"

                ?

                sortOrder==="asc"

                ?

                "▲"

                :

                "▼"

                :

                ""

                }


              </th>



              <th>
                Source
              </th>


              <th>
                Actions
              </th>



            </tr>


          </thead>





          <tbody>

{
currentLeads.length===0

?

(

<tr>

<td colSpan="7">
No Leads Found
</td>

</tr>

)

:

(

currentLeads.map((lead)=>(

<LeadCard
key={lead._id}
lead={lead}
getStatusStyle={getStatusStyle}

onEdit={(lead)=>{

setSelectedLead(lead);

setOpen(true);

}}

onDelete={deleteLead}

onView={(lead)=>{

setViewLead(lead);

setViewOpen(true);

}}

/>

))

)

}

</tbody>


        </table>


      </div>





      {/* Pagination */}


      <div

        style={{

          display:"flex",

          justifyContent:"space-between",

          alignItems:"center",

          marginTop:"20px"

        }}

      >



        <button


          disabled={currentPage===1}


          onClick={()=>setCurrentPage(currentPage-1)}


          style={{

            padding:"10px 18px",

            background:

              currentPage===1

              ?

              "#0373fc"

              :

              "#2563EB",


            color:"#fff",

            border:"none",

            borderRadius:"6px"

          }}


        >

          Previous

        </button>





        <span

          style={{

            fontWeight:"600"

          }}

        >

          Page {currentPage} of {totalPages || 1}


        </span>





        <button


          disabled={

            currentPage===totalPages ||

            totalPages===0

          }



          onClick={()=>setCurrentPage(currentPage+1)}



          style={{


            padding:"10px 18px",


            background:

            currentPage===totalPages ||

            totalPages===0

            ?

            "#0073ff"

            :

            "#2563EB",



            color:"#fff",

            border:"none",

            borderRadius:"6px"

          }}


        >

          Next

        </button>



      </div>





      <LeadModal


        open={open}


        lead={selectedLead}



        onClose={()=>{


          setOpen(false);


          setSelectedLead(null);


        }}



        onSuccess={fetchLeads}


      />
      <LeadDetailsModal
      open={viewOpen}
      lead={viewLead}
      onClose={()=>{
        setViewOpen(false);
        setViewLead(null);
      }}
      />


    </>


  );

}