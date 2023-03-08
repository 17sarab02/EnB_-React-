import React, { useState, useReducer, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Teams from "./components/Teams"
import Events from "./components/Events"
import Contact from "./components/Contact"
import About from "./components/About"
import Footer from "./components/Footer"
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [darkStyle, lightStyle] = [{
    mode: "Dark",
    primaryText: "white",
    footerHeadings: "rgb(180,140,240)",
    primaryBackground: "rgb(20, 20, 20)",
    secondaryBackground: "rgb(30, 30, 30)",
    tertiaryBackground: "rgb(40, 40, 40)"
  }, {
    mode: "Light",
    primaryText: "rgb(20, 20, 20)",
    footerHeadings: "rgb(100,80,150)",
    primaryBackground: "rgb(255, 255, 255)",
    secondaryBackground: "rgb(230, 230, 230)",
    tertiaryBackground: "rgb(200, 200, 200)"
  }]
  const [lightDark, setMode] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "setDark":
          return darkStyle;
        default:
          return lightStyle;
      }
    },
    lightStyle
  );
  const [progress, setProgress] = useState(0);

  useEffect(()=>{
    setProgress(100)
  }, [])

  return (
    <div className="App">
      <Router>
        <LoadingBar height={3} color={lightDark.footerHeadings} progress={progress} onLoaderFinished={()=>setProgress(0)} waitingTime={400}></LoadingBar>
        <Navbar lightDark={lightDark} setMode={setMode}/>
        <Routes>
          <Route path='/' element={<><Home lightDark={lightDark} /> <About lightDark={lightDark} /></>} / >
          <Route path='/events' element={<Events lightDark={lightDark} />} / >
          <Route path='/teams' element={<Teams lightDark={lightDark} />} / >
          <Route path='/contact' element={<Contact lightDark={lightDark} />} / >
        </Routes>
        <Footer lightDark={lightDark} / >
      </Router>
    </div>
  );
}

export default App;
