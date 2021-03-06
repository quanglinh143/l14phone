import React from "react";
import { useParams } from "react-router";
import { useState,useRef } from "react";
import "./linkprd.css";
import {Button} from "reactstrap";
import {FaGift,FaCartPlus} from "react-icons/fa";
import Slick from "../slider/Slick";
const Linkprd = ({ dataHasBeenProcessed,product,onAddCart }) => {
  let { name } = useParams();
  let arrProduct = [];
  const [price,setPrice]=useState(0);
  // const [active,setActive]=useState(false);
  const [color,setColor]=useState("");
  const [capacity,setCapacity]=useState("");
  const [end,setEnd]=useState(false);
  const [payNow,setPayNow]=useState({});
  
  console.log(end);
  console.log(arrProduct);
  const lalayla=useRef("");
  dataHasBeenProcessed.forEach((item) => {
    arrProduct.push(item.dataSelection);
  });
  console.log(arrProduct);
  console.log(color);
 
  const [showCapacities,setShowCapacities]=useState("")
  const onAddShowColor = (zd) => {
    console.log(zd);
    setCapacity(zd.capacity);
    setShowCapacities(zd.color);
     lalayla.current=zd.capacity;
    const trueCapacity=capacity!==lalayla.current;
    if(trueCapacity){
      setColor("");
      setPrice(0)
    }
    

  };
  // console.log(showCapacities);
  // console.log(capacity);
  // console.log(lalayla.current);

  
  
  
  // showCapacities.find((item)=>{
  //   return item.color === color
  // })
 
  let productName;
  for (let i = 0; i < arrProduct.length; i++) {
    for (let j = 0; j < arrProduct[i].length; j++) {
      if (
        arrProduct[i][j].name === `${name}/A` ||
        arrProduct[i][j].name === name
      ) {
        productName = arrProduct[i][j];
      }
    }
  }
  console.log("productsName:",productName);

  function isEmptyObject(obj) {
    return JSON.stringify(obj) === "{}";
  }
  
  const products = { ...productName };
  const capacities = isEmptyObject(products) ? "" : Object.values(products.capacities);
  console.log("capacities",capacities);
  
  console.log("products:", products);
  // const tkmk = isEmptyObject(products) ? "" : Object.values(products.tskt);
  const thongso=isEmptyObject(products) ? "" : Object.values(products.tskt);
  console.log("thongso",thongso)
  
  const vnd_special_price=String(price).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  // console.log(showCapacities[2])
  const showImage=isEmptyObject(products) ? "" : Object.values(products.images);
  // const defaultImage=showImage[0];
  
  
  
  const onSetEnd=()=>{
    setEnd(!end);
  }
  const showColorItem=(colorItem)=>{
    console.log(colorItem);
    setPrice(colorItem.price)
    console.log(showImage);
    setPayNow({colorItem,products});
    
    
    const exsit =showCapacities.find((item)=>{
      return item.color === colorItem.color
    })
    if(exsit){
      setColor(colorItem.color);
      console.log("1");
    }
    
  }
  console.log(payNow);
  // paycart
  const onPayNow=()=>{
    onAddCart({payNow,capacity})
  }
  
  return (
    <>
    <div className="linkprd-container">
      <div className="linkprd-img">
        {/* <img src={isEmptyObject(products) ?  "" : products.image} /> */}
        <Slick products={products}/>
        
      </div>
      <div className="linkprd-columns">
        
        <div className="vnd_special_price">{vnd_special_price} ???</div>
        <div className="linkprd-flex">
          <div className="linkprd-flex-capacities">
            {capacities.length !== 0 ? capacities.map((item, index) => {
              const color = Object.values(item.color);
              const vnd_special_price=String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
             
              return (
                <div key={index}>
                  <div
                    onClick={() => {
                      onAddShowColor(item);
                    }}
                    className={`linkprd-capacity ${capacity===item.capacity?"active":""}`}
                  >
                    <div>{item.capacity}</div>
                    <div className="linkprd-capacity-price">{vnd_special_price}</div>
                  </div>
                  
                </div>
                  
              );
              
            }) : ""}

          </div>
          <div className="linkprd-text">Vui l??ng ch???n m??u:</div>
          <div className="linkprd-flex-color">
            {showCapacities && showCapacities.map((sh,index)=>{
               const vnd_special_price=String(sh.price).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                      return <div onClick={()=>showColorItem(sh)} key={index} className={`linkprd-capacity ${color===sh.color?"active":""}`}>
                                <div >{sh.color}</div>
                                <div >{vnd_special_price}</div>
                            </div>
                  })}

          </div>
          <div className="link-promotion-columns">
            <div className="link-promotion">
              <div className="link-promotion-gift">
                <FaGift/>Khuy???n m???i
              </div>
              <ul className="link-promotion-ul">Khuy???n m???i h??ng
                <li>
                [HOT] Thu c?? l??n ?????i gi?? cao - Th??? t???c nhanh - Tr??? gi?? l??n t???i 1.000.000??
                </li>
              </ul>
              <ul className="link-promotion-ul">Tr??? g??p 0%:
                <li>
                Tr??? g??p l??i su???t 0% v???i Home Credit. Tr??? tr?????c 50%, k??? h???n 8 th??ng (??p d???ng tr??n GI?? NI??M Y???T, kh??ng ??p d???ng c??ng c??c khuy???n m???i kh??c)
                </li>
              </ul>

            </div>
                  
          </div>
        
        

      <div className="pay"> <div className="pay-text">* Thanh to??n online</div> <span className="pay-span">|</span> <div className="pay-text">Mi???n ph?? giao h??ng thu ti???n</div></div>
        <div className="promotion-member">
            * Gi???m th??m t???i 1% cho <span>th??nh vi??n L14member</span>
          </div>
          <Button onClick={onPayNow} outline color="danger" className="pay-now"><div style={{fontSize:"18px",fontWeight:"500"}}>MUA NGAY</div><span>(Giao t???n n??i ho???c l???y t???i c???a h??ng)</span></Button>
          <div className="pay-options">
            <Button outline color="primary"><div style={{fontSize:"18px",fontWeight:"500"}}>TR??? G??P 0%</div><span>(X??t duy???t qua ??i???n tho???i)</span></Button>
            <Button outline color="primary"><div style={{fontSize:"18px",fontWeight:"500"}}>TR??? G??P QUA TH??? </div><span>(Visa, Master, JBC)</span></Button>
          </div>
       
        
      </div>
        </div>   
          <div className={`thongso `}>
            {thongso.length!==0?thongso.map((item,index)=>{
              return  <div key={index} className={`thongso-detail `}>
                          <div className="thongso-detail-name">{item.name}</div>
                          <div className="thongso-detail-value">{item.value}</div>
                      </div>
            }).slice(0,end?30:10):""}
            
            <Button outline color="secondary" className="loadmore" onClick={onSetEnd}>{end?"loadless":"Loadmore"}</Button>
          </div>
      <div>
        
          
        
      </div>
      
    </div>
      
     
    </>
  );
};

export default Linkprd;
