import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import "../styles/dashboard.css";

export default function Layout({children}){

return(

<div className="dashboard">

<Sidebar/>

<div className="main-content">

<Navbar/>

<div className="content">

{children}

</div>

</div>

</div>

)

}