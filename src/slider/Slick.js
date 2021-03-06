import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import "./slick.css";
export const  PreviousBtn = (props) => {
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
             <GrFormPrevious />
        </div>
    )
}
export const NextBtn = (props) => {
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
            <GrFormNext />
        </div>
    )
}
export default function Slick({products}) {

  return (
    <div className="border radius-7">
      <Slider
        autoplay
        autoplaySpeed={2200}
        dots
        initialSlide={2}
        infinite
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        customPaging={(i) => {
          return (
            <div>
              <img
                src={products.images[i]}
                alt=""
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {products.images === undefined ? (
          <div>Loading</div>
        ) : (
            products.images.map((item) => (
            <div key={item}>
              <img src={item} alt="" style={{ width: "100%" }} />
            </div>
          ))
        )}
      </Slider>
    </div>
  );
}