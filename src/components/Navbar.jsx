import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    Pusterla Tech
                </a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <a href="/pass-down">Pass Down</a>
                    </li>
                    <li>
                        <a href="/production-lines">Production Lines</a>
                    </li>
                    <li>
                        <a href="/news">Commons</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="/cart" className="cart-icon">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">0</span>
                </a>
                <a href="/account" className="user-icon">
                    <i className="fas fa-user"></i>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;