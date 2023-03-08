import React from "react";
import Section from "./Section";
import "../componentCss/SectionContainer.css"
import Form from "./Form"

export default function Contact(props) {
    return (
        <Section id="contact" lightDark={props.lightDark} backgroundSet={true}>
            <h1>Contact Us</h1>
            <Form lightDark={props.lightDark} />   
        </Section>
    );
}
