import "../componentCss/TestimonialCarousel.css";
import vid1 from "../componentDependencies/FinalVid.mp4";
import { useEffect, useState } from "react";



export default function TestimonialCarousel(props) {
  const [video,setVideo] = useState('');
   
 
  const observeVideo = ()=> {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          video.pause();
        } else {
          video.play();
        }
      });
    }, {});
    observer.observe(video);
  }
    
    useEffect(() => {
    setVideo(document.querySelector(".video-container video"));
    if(video) observeVideo();
  },[video])
  
  return (
    <div className="carousel_container">
      <div className="video-container">
        <video src={vid1} controls loop></video>
      </div>
    </div>
  );
}
