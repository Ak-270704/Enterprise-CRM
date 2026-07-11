import { useAuth } from "../context/AuthContext";

export default function Navbar(){

    const { user } = useAuth();

    return(

        <nav
            style={{
                background:"white",
                padding:"18px 25px",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                boxShadow:"0 2px 10px rgba(138, 52, 52, 0.08)"
            }}
        >

            <h2>Dashboard</h2>

            <div>

                Welcome,

                <strong>

                    {" "}

                    {user?.name}

                </strong>

            </div>

        </nav>

    )

}