import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import StarRatings from "react-star-ratings";

import "./products.css";
const Brand = ({dataHasBeenProcessed}) => {
    console.log(dataHasBeenProcessed);
    const [data,setData]=useState([]);
    let {title}=useParams();
    console.log("TITLE",title);
    let titleParams= title.replace(/\s/g, '');
    useEffect(()=>{
        fetch(`http://localhost:3000/${titleParams}`)
        .then((res)=>{
          return res.json()
        })
        .then((resJson)=>{
          setData(resJson);
        })
      },[title]);

      console.log(data);
      console.log(titleParams);
    return (
        <div className="products-container">
            <div className="products-dataselection">
           {data.map((item,index)=>{
                const sale=((item.old_price-item.special_price)/item.old_price*100).toFixed();
                const vnd_special_price=String(item.special_price).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                const vnd_old_price=String(item.old_price).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
               return   <div>
                            <Link className="products-link" to={`/sp/${item.name}` }>
                            <div className="products" >
                                            <div className="products-sale">{sale}%</div>
                                            <div className="products-img"><img src={item.image}/></div>
                                            <div className="products-name">{item.name}</div>
                                            <div className="products-title">
                                                <div className="products-special_price">{vnd_special_price} ₫</div>
                                                <div className="products-old_price">{vnd_old_price} ₫</div>
                                            </div>
                                            <div className="promotion">
                                                [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                            </div>
                                            <div className="products-title">
                                                <StarRatings 
                                                    numberOfStars={5}
                                                    starRatedColor='#fcba03'
                                                    starDimension="14px"
                                                    starSpacing="1px"
                                                    rating={5}
                                                />
                                                <span>{sale} đánh giá</span>
                                            </div>
                                            <Button color="secondary">Mua ngay</Button>
                                        </div> 

                            </Link>

                        </div>
           })}
           </div>
        </div>
    )
}

export default Brand
