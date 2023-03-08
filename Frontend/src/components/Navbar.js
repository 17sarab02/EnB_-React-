import React from "react";
import "../componentCss/Navbar.css";
import clubLogo from "../componentDependencies/Logo_Navbar.png";
import hamburgerLogo from "../componentDependencies/Hamburger.svg";
import Toggle from "./Toggle";
import {Link} from 'react-router-dom'
import collegeLogo from "../componentDependencies/College Logo.png";

export default function Navbar({lightDark, setMode}) {
  const toggleLightDark = (e) => {
    if(e.target.checked)
      setMode({type: "setDark"})
    else
      setMode({type: "setLight"})
  };
  const {primaryBackground, primaryText} = lightDark
  return (
    <nav style={{background: primaryBackground, color: primaryText}}>
      <div className="navElement">
        <img src={collegeLogo} style={{
            height: "75px", marginRight: "20px"}} alt="College Logo" />
        <img
          alt="ENB Logo"
          src={clubLogo}
          style={{
            height: "75px",
            filter: `invert(${lightDark.mode === "Light" ? 1 : 0})`,
          }}
        />
      </div>
      <div
        className="navElement"
        style={{ display: "flex", alignItems: "center" }}
      >
        <label htmlFor="nav_trigger" id="nav_trigger_trigger">
          <img
            src={hamburgerLogo}
            alt="Hamburger"
            style={{
              height: "15px",
              filter: `invert(${lightDark.mode === "Dark" ? 1 : 0})`,
            }}
          />
        </label>
        <input type="checkbox" id="nav_trigger" />
        <ul id="nav_options">
          <li>
            <a href="/#home">Home<div className="bottomLines"></div></a>
          </li>
          <li>
            <a href="/#about">About<div className="bottomLines"></div></a>
          </li>
          <li>
            <Link to="/events">Events/Initiatives<div className="bottomLines"></div></Link>
          </li>
          <li>
            <Link to="/teams">Teams<div className="bottomLines"></div></Link>
          </li>
          <li>
            <Link to="/contact">Contact Us<div className="bottomLines"></div></Link>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Toggle onSwitch={toggleLightDark}></Toggle>
              <div className="menuitem"
                style={{ margin: "5px", fontSize: "0.8rem" }}
              >{`${lightDark.mode} Mode`}</div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
