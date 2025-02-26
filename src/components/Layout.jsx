import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Layout.css"

const Layout = () => {
    return (
        <>
            <div className="layout">
                <Navbar />
                <main className="content">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout