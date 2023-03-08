import React from "react";
import Section from "./Section";
import "../componentCss/SectionContainer.css"
import Rocket from "../componentDependencies/Rocket.png";
import EB from "../componentDependencies/EB.png";
import TestimonialCarousel from "./TestimonialCarousel"
import downArrow from "../componentDependencies/DownArrow.png"

export default function Home(props) {
    return (
        <>
            <Section id="home" lightDark={props.lightDark} background={props.lightDark.primaryBackground}>
            <div className="sectionContainer">
                <div className="imageContainer">

                <div
                    className="parallaxLogo"
                    style={{
                        position: "relative",
                        width: "fit-content",
                        height: "fit-content",
                        marginBottom: "0px",
                        marginTop: "50px"
                    }}
                    >
                    <img
                        src={EB}
                        alt="Home"
                        style={{
                            width: "65vw",
                            minWidth: "200px",
                            maxWidth: "500px",
                        }}
                        />
                    <img
                        src={Rocket}
                        className="parallax parallax-1.25"
                        alt="Home"
                        style={{
                            position: "absolute",
                            width: "100%",
                            left: "0px",
                        }}
                    />
                </div>
                <div style={{
                    width: "fit-content",
                    height: "fit-content",
                    marginTop: "0vw"
                }}>
                <h1 style={{margin: "30px", color: "white"}}>Innovate.. Inspire.. Impact..</h1>
                </div>
                </div>
                <h1 style={{marginBottom: "30px", color: "white"}}>
                    Enterpreneurship & Business Cell, IIITDM Kurnool
                </h1>
                <img src={downArrow} style={{height: "75px"}}></img>
            </div>
        </Section>
        <Section lightDark={props.lightDark} backgroundSet={true} background={props.lightDark.secondaryBackground}>
            <div className="sectionContainer">
                <h1 id="TestimonialHeading" style={{margin: "0px"}}>Testimonials</h1>
                <TestimonialCarousel lightDark={props.lightDark}/>
            </div>
        </Section>
        </>
    );
}
