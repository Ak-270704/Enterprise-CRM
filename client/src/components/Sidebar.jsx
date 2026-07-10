import { Link } from "react-router-dom";

const Sidebar = () => {

    return (

        <aside className="sidebar">

            <Link to="/">Dashboard</Link>

            <Link to="/leads">Leads</Link>

            <Link to="/customers">Customers</Link>

            <Link to="/deals">Deals</Link>

            <Link to="/activities">Activities</Link>

        </aside>

    );

};

export default Sidebar;