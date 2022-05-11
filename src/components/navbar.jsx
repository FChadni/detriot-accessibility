import React from 'react';
import '../css/navbar.css';
import {Link} from "react-router-dom";
import logo from "../image/LOGO_300ppi.png"

function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="navbar_container">
                <div className="logo"><img className="logo" src={logo} alt=""/></div>
                <ul className="navbar_menu">
                    <li className="navbar_item">
                        <Link to="/"><span className="navbar_link">HOME</span></Link>
                    </li>
                    <li className="navbar_item">
                        <Link to="/about"><span className="navbar_link">ABOUT</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;