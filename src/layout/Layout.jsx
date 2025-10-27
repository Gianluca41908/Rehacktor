import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from './../components/Footer';
import Sidebar from "../components/Sidebar";

function Layout() {
    return (
        <div className="bg-pers">
                <Header />
            <div className="row w-100">
                <Sidebar />
                <div className="min-vh-50 col-11 px-0">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout