import React from "react";
import Section from "./Section";
import "../componentCss/SectionContainer.css"
import OurVision from "../componentDependencies/Our Vision.png"
import OurMission from "../componentDependencies/Our Mission.png"
import WhatWeStandFor from "../componentDependencies/What We Stand For.png"

export default function About(props) {
    return (
        <Section id="about" lightDark={props.lightDark} backgroundSet={true} background={props.lightDark.primaryBackground}>
            <div className="sectionContainer">
                <h1 style={{margin: "50px"}}>About Us</h1>
                <div className="picNpara" style={{background: props.lightDark.secondaryBackground}}>
                    <img src={OurVision} alt="Our Vision" />
                    <p>We aim to be the bridge between theoretical knowledge and practical application. We aspire to leverage and maximize the potential of students and turn them into great leaders. We strive to create an ecosystem for individuals with creative minds to jump from ideas to products. We continuously work towards facilitating entrepreneurial education and developing a comprehensive resource pool.</p>
                </div>
                <div className="picNpara" style={{background: props.lightDark.secondaryBackground, direction: "rtl"}}>
                    <img src={OurMission} alt="Our Mission" />
                    <p style={{gridColumn: "1 span 1"}}>We are missioned to unlock India’s latent inventive potential by focusing on young minds and making entrepreneurship simple and smooth for them. We aspire to play an important role in building India’s entrepreneurial ecosystem. We strive to foster entrepreneurial thinking, promote business knowledge and instill confidence in every student.</p>
                </div>
                <div className="picNpara" style={{background: props.lightDark.secondaryBackground}}>
                    <img src={WhatWeStandFor} alt="What we Stand For" />
                    <p>We firmly believe India’s growth lies in youth turning themselves into job creators rather than seekers and breaking the inertia that is stopping them from taking the step. We stand for excellence, perseverance, innovation, research, collaboration and ethics. We strongly believe in equitable and non-discriminatory education for all and value creation through entrepreneurship.</p>
                </div>
            </div>
            </Section>
    );
}
