import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {

    return (

        <>

            <Navbar />

            <div style={{display:"flex"}}>

                <Sidebar />

                <main
                    style={{
                        flex:1,
                        padding:"20px"
                    }}
                >
                    {children}
                </main>

            </div>

        </>

    );

};

export default Layout;