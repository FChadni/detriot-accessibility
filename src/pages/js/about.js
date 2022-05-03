import React from 'react';
import "../../css/about.css"
import Navbar from "../../components/navbar";

function About(props) {
    return (
        <div>
            <Navbar/>
            <section className="info">This is about page</section>
        </div>
    );
}

export default About;