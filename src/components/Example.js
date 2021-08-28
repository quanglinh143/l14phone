import React, { useState,useEffect } from 'react';
import "./example.css"
import { Link, useParams } from 'react-router-dom';
import {FaChevronRight,FaStopwatch,FaLaptop,FaChargingStation,FaMoneyBillAlt,FaMobile,FaTablet,FaMusic,FaHandHolding,FaSimCard,FaNewspaper,FaLuggageCart} from "react-icons/fa"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/9tttt690-300-max.png',
    caption: 'Slide 1'
  },
  {
    id: 2,
    altText: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/hw--tn-690x300_3_.png',
    caption: 'Slide 2'
  },
  {
    id: 3,
    altText: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/mngn-690-300-max.png',
    caption: 'Slide 3'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  setInterval(()=>{
      
  })
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

    
  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        {/* <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.altText} />
         */}
         <img src={item.altText} style={{width:"100%",height:"100%",cursor:'pointer'}}/>
      </CarouselItem>
    );
  });
  
  return (
      <>
      
      <div className="example-container">
        <div className="example-navbar">
          
          <ul className="example-navbar-ul">
            <Link className="example-link">
              <li className="example-navbar-li">
                <span className="example-product-icon"><FaMobile/></span>
                <div className="example-products">Điện thoại </div><span className="example-icon"><FaChevronRight/></span>
                <div className="example-hover-phone">
                    <ul className="example-hover-phone--ul">
                      <Link to="/brand/apple" className="example-hover-phone--li">Apple</Link>
                      <Link to="/brand/samsung" className="example-hover-phone--li">Samsung</Link>
                      <Link to="/brand/xiaomi" className="example-hover-phone--li">Xiaomi</Link>
                      <Link to="/brand/oppo" className="example-hover-phone--li">Oppo</Link>
                    </ul>
                </div>
              </li>
              
            </Link>
            <Link className="example-link">
              <li className="example-navbar-li">
                <span className="example-product-icon"><FaLaptop/></span>
                <div className="example-products">Laptop</div><span className="example-icon"><FaChevronRight/></span>
                <div className="example-hover-laptop">
                    <ul className="example-hover-laptop--ul">
                      <li className="example-hover-laptop--li">Macbook</li>
                      <li className="example-hover-laptop--li">Acer</li>
                      <li className="example-hover-laptop--li">Asus</li>
                      <li className="example-hover-laptop--li">Dell</li>
                      <li className="example-hover-laptop--li">Lenovo</li>
                      <li className="example-hover-laptop--li">MSI</li>
                    </ul>
                </div>
              </li>
            </Link>
            <Link className="example-link">
              <li className="example-navbar-li">
                <span className="example-product-icon"><FaTablet/></span>
                <div className="example-products">Tablet</div><span className="example-icon"><FaChevronRight/></span>
                <div className="example-hover-tablet">
                    <ul className="example-hover-tablet--ul">
                      <li className="example-hover-tablet--li">iPad Pro</li>
                      <li className="example-hover-tablet--li">iPad Mini</li>
                      <li className="example-hover-tablet--li">iPad Air</li>
                      <li className="example-hover-tablet--li">Samsung</li>
                    </ul>
                </div>
              </li>
            </Link>
            <Link className="example-link">
              <li className="example-navbar-li">
                <span className="example-product-icon"><FaStopwatch/></span>
                <div className="example-products">Đồng hồ</div><span className="example-icon"><FaChevronRight/></span>
                <div className="example-hover-tablet">
                    <ul className="example-hover-tablet--ul">
                      <li className="example-hover-tablet--li">Apple watch</li>
                      <li className="example-hover-tablet--li">Xiaomi</li>
                      <li className="example-hover-tablet--li">Gardin</li>
                      <li className="example-hover-tablet--li">Samsung</li>
                      <li className="example-hover-tablet--li">Huawai</li>
                    </ul>
                </div>
              </li>
  
            </Link>
            <Link className="example-link">
              <li className="example-navbar-li">
                <span className="example-product-icon"><FaMusic/></span>
                <div className="example-products">Âm thanh</div><span className="example-icon"><FaChevronRight/></span>
              </li>
            </Link>
            <Link className="example-link">
              <li className="example-navbar-li">
                <span className="example-product-icon"><FaChargingStation/></span>
                <div className="example-products">Phụ Kiện</div><span className="example-icon"><FaChevronRight/></span>
              </li>
            </Link>
            <Link className="example-link">
              <li className="example-navbar-li">
                <span className="example-product-icon"><FaHandHolding/></span>
                <div className="example-products">Thu cũ</div><span className="example-icon"><FaChevronRight/></span>
              </li>
            </Link>
            <Link className="example-link">
              <li className="example-navbar-li">
                <span className="example-product-icon"><FaMoneyBillAlt/></span>
                <div className="example-products">Hàng cũ</div><span className="example-icon"><FaChevronRight/></span>
              </li>
            </Link>
            <Link className="example-link">
              <li className="example-navbar-li">
                <span className="example-product-icon"><FaSimCard/></span>
                <div className="example-products">Sim thẻ</div><span className="example-icon"><FaChevronRight/></span>
              </li>
            </Link>
            <Link className="example-link">
              <li className="example-navbar-li">
                <span className="example-product-icon"><FaNewspaper/></span>
                <div className="example-products">Tin công nghệ</div><span className="example-icon"><FaChevronRight/></span>
              </li>
            </Link>
            <Link className="example-link">
              <li className="example-navbar-li">
                <span className="example-product-icon"><FaLuggageCart/></span>
                <div className="example-products">Khuyến mại</div><span className="example-icon"><FaChevronRight/></span>
              </li>
            </Link>
          </ul>
          
        </div>
        <div className="example-slide">
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 365px;
                background: black;
                margin-top:9px;
                cursor: pointer;
  
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        </div>
  
        <div className="show-img">
          <div><img className="show-img--img" src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/sss21690-300-max.png"/></div>
          <div><img className="show-img--img" src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/ip-12-r690-300-max.png"/></div>
          <div><img className="show-img--img" src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/asus_rightbanner.png"/></div>
        </div>
  
      </div>
      <div className="banner"><img src="https://cdn.cellphones.com.vn/media/wysiwyg/f31200-75-max.png" /></div>
      </>
  );
}

export default Example;