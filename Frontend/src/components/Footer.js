import React from 'react';
import CollegeLogo from '../componentDependencies/College Logo.png'
import '../componentCss/Footer.css'
import {Link} from 'react-router-dom'

export default function Footer({lightDark}){
    const {primaryBackground, footerHeadings, primaryText} = lightDark
    return (<footer style={{background: primaryBackground, color: primaryText}}>
        <div id="collegeLogo" className="footerblocks">
            <img src={CollegeLogo} alt="" style={{height: "150px", filter: "saturate(65%)"}} / >
        </div>
        <div id="contactLinks" className="footerblocks">
            <h3 style={{color: footerHeadings}}>CONTACT</h3>
            <ul>
                <li><i className="fa fa-envelope"></i>  enb@iiitk.ac.in</li>
                <li><i className="fa fa-phone"></i>8378903867</li>
            </ul>
        </div>
        <div id="otherLinks" className="footerblocks">
            <h3 style={{color: footerHeadings}}>OTHER LINKS</h3>
            <ul>
                <li><Link to="/" htmlFor="nav_trigger" style={{color: primaryText}}>Home</Link></li>
                <li><Link to="/events" htmlFor="nav_trigger" style={{color: primaryText}}>Events / Initiatives</Link></li>
                <li><Link to="/teams" htmlFor="nav_trigger" style={{color: primaryText}}>Teams</Link></li>
            </ul>
        </div>
        <div id="community" className="footerblocks">
            <h3 style={{color: footerHeadings}}>COMMUNITY</h3>
            <div style={{display: "grid", gridTemplateColumns: "50px 50px", gridTemplateRows: "50px 50px", gridGap: "5px", alignItems: "center", justifyContent: "center"}}>
                <a href="https://twitter.com/EnB_iiitk" className="fa fa-twitter">{}</a>
                <a href="https://www.linkedin.com/company/enb-iiitdm-kurnool/" className="fa fa-linkedin">{}</a>
                <a href="https://www.youtube.com/@EnB_" className="fa fa-youtube">{}</a>
                <a href="https://instagram.com/enb_iiitdmkl?igshid=YmMyMTA2M2Y=" className="fa fa-instagram">{}</a>
            </div>
        </div>
    </footer>);
}