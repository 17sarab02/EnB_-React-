import CarouselImage1 from "../testimonials/Carousel_images1.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../componentCss/TestimonialCarousel.css"

export default function TestimonialCarousel(props) {
  const carouselImages = [
    { content: <img src={CarouselImage1} alt="Director's Message" />, id: 1 },
    { content: <div className="carouselParaContainer" style={{background: `linear-gradient(${props.lightDark.mode==="Light"?"45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.02)":"45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)"}`}}><h2 style={{fontSize: "1.5rem"}}>Director's Message</h2></div>, id: 2 },
    { content: <div className="carouselParaContainer" style={{background: `linear-gradient(${props.lightDark.mode==="Light"?"45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.02)":"45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)"}`}}><p>Let's see how well this message from the director gets wrapped up</p></div>, id: 3 },
    { content: <div className="carouselParaContainer" style={{background: `linear-gradient(${props.lightDark.mode==="Light"?"45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.02)":"45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)"}`}}><p>Some more content to wrap</p></div>, id: 4 },
    { content: <div className="carouselParaContainer" style={{background: `linear-gradient(${props.lightDark.mode==="Light"?"45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.02)":"45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)"}`}}><p>..and some more</p></div>, id: 5 },
    { content: <div className="carouselParaContainer" style={{background: `linear-gradient(${props.lightDark.mode==="Light"?"45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.02)":"45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)"}`}}><p>..and some more</p></div>, id: 6 },
  ];
  return (
    <div className="carousel_container">
    <Carousel infiniteLoop={true} showThumbs={false} width={"100%"} showStatus={false} autoPlay={false} interval={5000}>
          {carouselImages.map((element) => {
            return (
              <div key={element.id} className="carousel_section">
                {element.content}
              </div>
            );
          })}
    </Carousel>
    </div>
  );
}
