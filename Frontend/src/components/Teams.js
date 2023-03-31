import React from 'react';
import Section from './Section'
import "../componentCss/SectionContainer.css"
import TeamMember from './TeamMember';

import Abhilash from "../teams/Abhilash.png"
import AdityaShinde from "../teams/Aditya.jpg"
import AdityaVardhan from "../teams/AdityaVardhan.png"
import Akash from "../teams/Akashdeep.png"
import Gargeya from "../teams/Gargeya.png"
import Harish from "../teams/Harish.jpg"
import JK from "../teams/JK.jpg"
import Nishchala from "../teams/Nishchala.jpg"
import Pranjal from "../teams/Pranjal.png"
import Sarabjot from "../teams/Sarabjot.png"
import Satakshi from "../teams/Satakshi.png"
import Sudeepti from "../teams/Sudeepti.png"
import Uday from "../teams/Uday2.png"
import Vivek from "../teams/Vivek.png"
import VSRK from "../teams/VSRK.jpg"

export default function Teams(props){
    return (
        <>
        <Section lightDark={props.lightDark} backgroundSet={true} background={props.lightDark.tertiaryBackground}>
            <div className="sectionContainer">
                <h1 style={{margin: "30px 0px"}}>Faculty Advisors</h1>
                <div className="teamContainer">
                    <TeamMember member={JK} details = {{name: "Prof. Dr. J Krishnaiah", phone: "+91-9442544782", email: "krishnaiah@iiitk.ac.in"}}/>
                    <TeamMember member={VSRK} details = {{name: "Prof. Dr. VSR Krishnaiah", phone: "+91-9899750010", email: "vsrk@iiitk.ac.in"}}/>
                </div>
            </div>
        </Section>
        <Section lightDark={props.lightDark} backgroundSet={true} background={props.lightDark.secondaryBackground}>
            <div className="sectionContainer">
                <h1>Student Coordinators</h1>
                <div className="teamContainer">
                    <TeamMember member={AdityaShinde} details = {{name: "Aditya Shinde", email: "120ad0018@iiitk.ac.in"}}/>
                    <TeamMember member={Uday} details = {{name: "Uday Sai T.", email: "120ad0022@iiitk.ac.in"}}/>
                </div>
            </div>
        </Section>
        <Section lightDark={props.lightDark} backgroundSet={true} background={props.lightDark.tertiaryBackground}>
            <div className="sectionContainer">
                <h1>Web Development & Content Creation Team</h1>
                <div className="teamContainer">
                    <TeamMember member={Sarabjot} details = {{name: "Sarabjot Singh", email: "120ad0019@iiitk.ac.in"}}/>
                    <TeamMember member={Harish} details = {{name: "Harish Choudhary", email: "121cs0017@iiitk.ac.in"}}/>
                    <TeamMember member={AdityaVardhan} details = {{name: "Aditya Vardhan", email: "121cs0055@iiitk.ac.in"}}/>
                </div>
            </div>
        </Section>
        <Section lightDark={props.lightDark} backgroundSet={true} background={props.lightDark.secondaryBackground}>
            <div className="sectionContainer">
                <h1>Media & Corporate Relations Team</h1>
                <div className="teamContainer">
                    <TeamMember member={Satakshi} details = {{name: "Satakshi Sinha", email: "120cs0047@iiitk.ac.in"}}/>
                    <TeamMember member={Sudeepti} details = {{name: "D. Sai Sudeepthi", email: "121ec0034@iiitk.ac.in"}}/>
                    <TeamMember member={Abhilash} details = {{name: "Abhilash S.", email: "121ad0058@iiitk.ac.in"}}/>
                    <TeamMember member={Pranjal} details = {{name: "Pranjal Yadav", email: "121ad0027@iiitk.ac.in"}}/>
                </div>
            </div>
        </Section>
        <Section lightDark={props.lightDark} backgroundSet={true} background={props.lightDark.tertiaryBackground}>
            <div className="sectionContainer">
                <h1>Finance Team</h1>
                <div className="teamContainer">
                    <TeamMember member={Akash} details = {{name: "Kumar Akashdeep", email: "120cs0035@iiitk.ac.in"}}/>
                    <TeamMember member={Vivek} details = {{name: "Vivek Kumar", email: "121ad0024@iiitk.ac.in"}}/>
                    <TeamMember member={Gargeya} details = {{name: "Innamuri Gargeya V.S.S", email: "121cs0026@iiitk.ac.in"}}/>
                </div>
            </div>
        </Section>
        </>
    );
}