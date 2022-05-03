import React from 'react';
import '../../css/home.css';
import Navbar from "../../components/navbar";
import Main from "../../components/brand";

function Home(props) {
    return (
        <div>
            <Navbar/>
            <Main/>
        </div>
    );
}

export default Home;