import React from 'react';
import "../../css/about.css"
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {IoAccessibility} from "react-icons/io5"

function About(props) {
    return (
        <div>
            <Navbar/>
            <section className="aboutUs">
                <div className="about-top">
                    <p className="about-heading">Who We Are & Our Story</p>
                    <p className="about-subheading">
                        Detroit Accessibility Project (DAP) is a nonprofit organization meant to act as a resource on
                        venue accessibility in Detroit. Our story, mission, vision, and values are included to act as
                        the guiding force and purpose for the organization. These sections explain what we do and why we do it.
                    </p>
                    <p className="our-story">Whether it’s the murals of Diego Rivera that grace the walls of the DIA, the scenic views of the
                        Detroit River from Belle Isle, or the bustling Eastern Market, Detroit is teeming with life.
                        It is a city that is rich in diverse culture and community. We believe that people amplify the
                        beauty of Detroit and that people with disabilities should never be excluded from this.
                        They should not be defined by what they cannot do, and the expression of their individual
                        identities should never be eclipsed by a lack of accessibility.<br/><br/>
                        A disability should never stop anyone from visiting a cultural space or hinder their ability to
                        experience the overall joy of the city. This is why DAP acts as a resource for people who have
                        oftentimes been forgotten. No one should be forgotten, be a second thought, or lack the
                        resources to live as themselves. <br/><br/>
                        People are more important than anything else. We want to share their diverse voices, foster a
                        compassionate community, and help people find safe and accommodating spaces. Our founder
                        Charlotte Bachelor, was inspired to create DAP after spending summer afternoons taking her
                        disabled grandmother to the Eastern Market. DAP aims to achieve a more accessible Detroit where
                        families with a combination of accessibility can enjoy the rich culture of Detroit.</p>
                </div>
                <div className="about-mid">
                    <p className="about-mission">Our Mission & Values</p>
                    <p className="mission">We are committed to creating an all-inclusive digital space to help
                        individuals with disabilities access venues and cultural spaces in Downtown Detroit.</p>
                </div>
                <div className="about-end">
                    <ul>
                        <li>
                            <span className="about-icon"><IoAccessibility/></span>
                            <p className="about-sub">Inclusion</p>
                            <p className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi
                                pariatur ut! Adipisci distinctio dolore doloremque doloribus</p>
                        </li>
                        <li>
                            <span className="about-icon"><IoAccessibility/></span>
                            <p className="about-sub">Connection</p>
                            <p className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi
                                pariatur ut! Adipisci distinctio dolore doloremque doloribus</p>
                        </li>
                        <li>
                            <span className="about-icon"><IoAccessibility/></span>
                            <p className="about-sub">Community</p>
                            <p className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi
                                pariatur ut! Adipisci distinctio dolore doloremque doloribus</p>
                        </li>
                    </ul>
                </div>
                <div className="signingOff">
                    <p>We aspire to create an unparalleled Downtown Detroit experience where individuals with disabilities
                        are not a second thought, and we hope to inspire cities across the country to do the same.</p>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default About;