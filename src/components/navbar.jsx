import React, { useState } from 'react';
import '../css/navbar.css';
import {Link} from "react-router-dom";
import logo from "../image/LOGO_300ppi.png"

function Navbar(props) {
    const [navbar, setNavbar] = useState(false);
    const navbarEffect = () => {
        if(window.scrollY >= 50){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', navbarEffect);
    return (
        <nav className={ navbar ? "navbar active": "navbar"}>
            <div className="navbar_container">
                <div>
                    <Link to="/">
                        <div className="logo">
                            <img className="logo" src={logo} alt=""/><p>Detroit Accessibility Project</p>
                        </div>
                    </Link>
                </div>
                <ul className="navbar_menu">
                    <li className="navbar_item">
                        <Link to="/venue"><span className="navbar_link">Venues</span></Link>
                    </li>
                    <li className="navbar_item">
                        <Link to="/about"><span className="navbar_link">About</span></Link>
                    </li>
                    <li className="navbar_item">
                        <Link to="/about"><span className="navbar_link">Contact</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;