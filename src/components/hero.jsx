import React from 'react';
import banner from "../image/home.png";
import "../css/hero.css";
import {Link} from "react-router-dom";
import {IoArrowForwardCircleOutline} from "react-icons/io5"
// import { IoArrowCircleRightIcon } from '@mui/icons-material/ArrowCircleRight';

function Hero(props) {
    return (
        <div className="hero-section">
            <img className="hero-image" src={banner} alt="Detroit City"/>
            <p className="hero-title">Detroit Accessibility Project</p>
            {/*<p className="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut autem*/}
            {/*    error labore libero molestiae possimus tempore ullam vel? Accusamus corporis delectus doloribus ducimus*/}
            {/*    eligendi nisi odit quis saepe ullam.</p>*/}
            <section className="hero-bottom">
                <p className="hero-subheading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad,
                    aliquam amet culpa cumque doloribus eum illo incidunt, inventore laudantium nobis qui quidem,
                    quisquam quo repellendus. Maiores perspiciatis quae sed.</p>
                <div className="hero-buttons">
                    {/*<button className="explore"><Link to="/venue">Explore</Link></button>*/}
                    <button><Link to="/search">
                        <span className="hero-search">
                            <span className="text">Search for Venues</span>
                            <span className="icon"><IoArrowForwardCircleOutline/></span>
                        </span>
                    </Link></button>
                </div>
            </section>
        </div>
    );
}

export default Hero;