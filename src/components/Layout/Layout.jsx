import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Outlet, useLocation } from "react-router-dom"
export default function Layout() {
    return (
        <>
            <Header />
            <section className=" d-flex justify-content-center align-items-center mTop">
                <Outlet />
            </section>
            <Footer />
        </>
    )
}
