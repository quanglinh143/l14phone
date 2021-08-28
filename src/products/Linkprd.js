import React from "react";
import { useParams } from "react-router";
import { useState,useRef } from "react";
import "./linkprd.css";
import {Button} from "reactstrap";
import {FaGift,FaCartPlus} from "react-icons/fa"
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


  function isEmptyObject(obj) {
    return JSON.stringify(obj) === "{}";
  }
  
  const products = { ...productName };
  const capacities = isEmptyObject(products) ? "" : Object.values(products.capacities);
  console.log(capacities);
  
  console.log(products);
  // const tkmk = isEmptyObject(products) ? "" : Object.values(products.tskt);
  const thongso=isEmptyObject(products) ? "" : Object.values(products.tskt);
  console.log(thongso)
  
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
        <img src={isEmptyObject(products) ?  "" : products.image} />
        
      </div>
      <div className="linkprd-columns">
        
        <div className="vnd_special_price">{vnd_special_price} ₫</div>
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
          <div className="linkprd-text">Vui lòng chọn màu:</div>
          <div className="linkprd-flex-color">
            {showCapacities && showCapacities.map((sh,index)=>{
               const vnd_special_price=String(sh.price).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                      return <div onClick={()=>showColorItem(sh)} key={index} className={`linkprd-capacity ${color===sh.color?"active":""}`}>
                                <div >{sh.color}</div>
                                <div >{vnd_special_price}</div>
                            </div>
                  })}

          </div>
          <div className="link-promotion-colimns">
            <div className="link-promotion">
              <div className="link-promotion-gift">
                <FaGift/>Khuyến mại
              </div>
              <ul className="link-promotion-ul">Khuyến mại hàng
                <li>
                [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                </li>
              </ul>
              <ul className="link-promotion-ul">Trả góp 0%:
                <li>
                Trả góp lãi suất 0% với Home Credit. Trả trước 50%, kỳ hạn 8 tháng (Áp dụng trên GIÁ NIÊM YẾT, không áp dụng cùng các khuyến mại khác)
                </li>
              </ul>

            </div>
                  
          </div>
        
        

      <div className="pay"> <div className="pay-text">* Thanh toán online</div> <span className="pay-span">|</span> <div className="pay-text">Miễn phí giao hàng thu tiền</div></div>
        <div className="promotion-member">
            * Giảm thêm tới 1% cho <span>thành viên Smember</span>
          </div>
          <Button onClick={onPayNow} outline color="danger" className="pay-now"><div style={{fontSize:"18px",fontWeight:"500"}}>MUA NGAY</div><span>(Giao tận nơi hoặc lấy tại cửa hàng)</span></Button>
          <div className="pay-options">
            <Button outline color="primary"><div style={{fontSize:"18px",fontWeight:"500"}}>TRẢ GÓP 0%</div><span>(Xét duyệt qua điện thoại)</span></Button>
            <Button outline color="primary"><div style={{fontSize:"18px",fontWeight:"500"}}>TRẢ GÓP QUA THẺ </div><span>(Visa, Master, JBC)</span></Button>
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
