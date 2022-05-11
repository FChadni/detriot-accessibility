import React from 'react';
import "../../css/about.css"
import Navbar from "../../components/navbar";

function About(props) {
    return (
        <div>
            <Navbar/>
            <section className="aboutUs">
                <div className="about">
                    <p className="heading">What is the Detroit Accessibility Project?</p>
                    <p className="info">Detroit Accessibility Project (DAP) is a nonprofit organization meant to act as a resource on
                        venue accessibility in Detroit. Our story, mission, vision, and values are included to act as
                        the guiding force and purpose for the organization. These sections explain what we do and why we do it.</p>
                </div>
                <div className="ourStory">
                    <p className="heading">Our story</p>
                    <p className="info">Whether it’s the murals of Diego Rivera that grace the walls of the DIA, the scenic views of the
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
                        families with a combination of accessibility can enjoy the rich culture of Detroit.
                    </p>
                </div>
                <div className="stat">
                    <div className="subStat">
                        <p className="heading">Mission</p>
                        <p className="info">We are committed to creating an all-inclusive digital space to help individuals with disabilities
                            access venues and cultural spaces in Downtown Detroit.</p>
                    </div>
                    <div className="subStat">
                        <p className="heading">Vision</p>
                        <p className="info">We aspire to create an unparalleled Downtown Detroit experience where individuals with disabilities
                            are not a second thought, and we hope to inspire cities across the country to do the same.</p>
                    </div>
                    <div className="subStat">
                        <p className="heading">Values</p>
                        <p className="info">Access, Diversity, Equity, Inclusion, Empathy, Storytelling, Innovation, Vision, Connection, and
                            Community. Detroit is our home, and we want to showcase Detroit</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;