import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"
import "../css/Navbar.css"
import "bootstrap-icons/font/bootstrap-icons.css";
const Navbar = () => {
    const location = useLocation();
    return (
        <>
            <nav className="navbar">
                <div className="nav-logo">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                </div>

                <div className="nav-link">
                    <ul>
                        <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
                        <li><Link to="/product" className={location.pathname.startsWith("/product") ? "active" : ""}>Products</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="nav-icon">
                    <i className="bi bi-search"></i>
                    <i className="bi bi-basket2"></i>
                    <i className="bi bi-person"></i>
                </div>
            </nav>

        </>
    )
}

export default Navbar