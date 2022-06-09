import React from 'react';
import Navbar from "../../components/navbar";
import ContactCom from "../../components/contact";
import Footer from "../../components/footer";

function Contact(props) {
    return (
        <div>
            <Navbar/>
            <ContactCom/>
            <Footer/>
        </div>
    );
}

export default Contact;