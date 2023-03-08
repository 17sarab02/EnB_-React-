import React from "react";
import Section from "./Section";
import CaseStudy from "../events/CaseStudy.png"
import Meetup from "../events/Meetup.png"
import PitchAnIdea from "../events/PitchAnIdea.png"
import StartupInternship from "../events/StartupInternship.png"
import SteppingStones from "../events/SteppingStones.png"

export default function Events(props) {
  return (
    <Section id="events" lightDark={props.lightDark} backgroundSet={true} background={props.lightDark.tertiaryBackground}> 
      <div className="sectionContainer">
        <h1 style={{ margin: "50px" }}>Events / Initiatives</h1>
        <div
          className="picNpara"
          style={{ background: props.lightDark.secondaryBackground }}
        >
          <img src={CaseStudy} alt="Case Study" />
          <p>
          Case studies are one of the best educational tools for improving business insight and testing practical knowledge. It requires rapid and in-depth analysis of market conditions and organisations, and requires participants to use problem-solving skills combined with structured thinking to identify and overcome the shortcomings
          </p>
        </div>
        <div
          className="picNpara"
          style={{
            background: props.lightDark.secondaryBackground,
            direction: "rtl",
          }}
        >
          <img src={Meetup} alt="Meetup" />
          <p style={{ gridColumn: "1 span 1" }}>
          We we’ll be conducting hackathons bringing technical and interested people together to improve upon or build new ideas and also helping participants enhance their technical skills and collaborating with others in the same field

Also we’ll be providing a meet-up platform where you could share your work, interact, ideate, exchange thoughts, get help and provide help to one another

We will be conducting regular talk shows by various industry experts to enlighten student’s entrepreneurial and business insights
          </p>
        </div>
        <div
          className="picNpara"
          style={{ background: props.lightDark.secondaryBackground }}
        >
          <img src={PitchAnIdea} alt="PitchAnIdea" />
          <p>
          This event aims to provide students, a platform to exhibit their business ideas for their entrepreneurial initiatives and acts as a unique acceleration program for the startup ecosystem.

The event is an exercise to make the participants cognisant regarding what it requires to covert a raw insight into a business idea.

Students get a flavour of presenting their business idea and potential to convert that idea into a business idea.
          </p>
        </div>
        <div
          className="picNpara"
          style={{
            background: props.lightDark.secondaryBackground,
            direction: "rtl",
          }}
        >
          <img src={StartupInternship} alt="Startup Internship" />
          <p style={{ gridColumn: "1 span 1" }}>
          Through SIP, we aim to partner with startups that are willing to provide internship opportunities to students. We endeavour to help emerging startups recruit quality students as interns while also helping students gain valuable work experience and quality exposure in a wide variety of fields
          </p>
        </div>
        <div
          className="picNpara"
          style={{ background: props.lightDark.secondaryBackground }}
        >
          <img src={SteppingStones} alt="Stepping Stones" />
          <p>
          This is an activity in which a student/group will do some research base study on the success mantra of a particular start up and will present it to the remaining members in the campus
          </p>
        </div>
      </div>
    </Section>
  );
}
