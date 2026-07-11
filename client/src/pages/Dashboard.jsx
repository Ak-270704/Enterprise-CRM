import DashboardCards from "../components/dashboard/DashboardCards";
import SalesChart from "../components/dashboard/SalesChart";
import LeadChart from "../components/dashboard/LeadChart";
import RecentActivities from "../components/dashboard/RecentActivities";

export default function Dashboard(){

return(

<>
<h1
style={{
color:"#ffffff",
fontSize:"56px",
marginBottom:"10px"
}}
>
Dashboard
</h1>

<p
style={{
color:"#cbd5e1",
fontSize:"22px",
marginBottom:"30px"
}}
>
Welcome back 👋
</p>
<DashboardCards/>

<div
style={{
display:"grid",
gridTemplateColumns:"2fr 1fr",
gap:"20px",
marginBottom:"20px"
}}
>

<SalesChart/>

<LeadChart/>

</div>

<RecentActivities/>

</>

)
}