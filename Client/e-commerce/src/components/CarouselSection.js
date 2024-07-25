import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../assets/img2.webp'
import img2 from "../assets/img3.jpg"
import img3 from "../assets/img4.jpg"


function CarouselSection() {
  return (
    <div>
      <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      >

        <div>
          <img src={img1} alt='not showing'/>
        </div>

        <div>
          <img src={img2} alt='not showing'/>
        </div>

        <div>
          <img src={img3} alt='not showing'/>
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselSection