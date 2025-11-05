import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from './../components/Footer';
import Sidebar from "../components/Sidebar";

function Layout() {
    return (
        <div className="bg-pers d-flex flex-column min-vh-100">
            <Header />
            <div className="container-fluid flex-grow-1 d-flex flex-column" style={{ flex: 1, minHeight: 0 }}>
                <div className="row flex-grow-1" style={{ display: "flex", flex: 1, minHeight: 0 }}>
                    <Sidebar />
                    <div className="col-md-10 px-0 mt-5">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout