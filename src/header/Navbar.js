import React from 'react'
import {useState} from "react";
import {Button} from "reactstrap";
import { Link } from 'react-router-dom';
import {FaMapMarked,FaCartPlus,FaPhoneAlt,FaWindowClose,FaBars} from "react-icons/fa";
import "./navbar.css";
const Navbar = ({addItems,plusItems,minusItems,removeItem,onChangeInput}) => {
    const [activeCart,setActiveCart]=useState(false);
    const [activeRes,setActiveRes]=useState(false);
    
    console.log(addItems);
    
   
    
    // const addItemsObject=Object.values(addItems);
    // console.log(addItemsObject);
    // console.log(addItemsObject.color);
    const totalPrice=addItems.reduce((a,c)=>{
        return a+c.item.payNow.colorItem.price*c.qty
    },0)
    const totalPriceVND=String(totalPrice).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    const resNavCart=()=>{
        setActiveCart(!activeCart);
        setActiveRes(false)
    }
    const taskBars=()=>{
        setActiveRes(!activeRes);
        setActiveCart(false)
    }
    return (
        <div className="navbar-container">
            <div className="navbar">
                <Link to="/" className="nav-logo" onClick={()=>setActiveRes(false)}>L14Mars</Link>
                <div className="nav-input"><input onChange={(event)=>onChangeInput(event.target.value)}/></div>
                
                <div className="nav-contact"><span className="nav-contact--icon"><FaPhoneAlt/></span> <div className="nav-contact--columns"><div>Gọi mua hàng</div><span>1800.1403</span></div> </div>
                <Link to="/showrooms"  className="nav-contact--showrooms" style={{textDecoration:"none"}} onClick={()=>setActiveRes(false)}><div > <div  className="search-brand"><span><FaMapMarked/></span>Tìm cửa hàng</div></div></Link> 
                
                
                <div className={`show-responsive ${activeRes?'activeRes':''}`}>
                    <Link to="/" className="res-home" style={{textDecoration:"none"}} onClick={()=>setActiveRes(false)}>HOME</Link>
                    <Link to="/showrooms"  className="res-home" style={{textDecoration:"none"}} onClick={()=>setActiveRes(false)}><div > <div>Tìm cửa hàng</div></div></Link> 
                </div>
                <div className="nav-cart"  ><div className="nav-cart--item"  onClick={()=>{setActiveCart(!activeCart)}}><span><FaCartPlus/></span><div className="nav-cart--div">{addItems.length}</div></div>
                    <div className="icon-responsive" onClick={taskBars}><FaBars/></div>
                    
                    <div className={`showCart ${activeCart?"activeCart":""}` } >
                        <div onClick={()=>setActiveCart(false)}  className="closebar"><FaWindowClose/></div>
                        <div className="lk">
                            
                            {addItems.map((y)=>{
                                console.log(y);
                                const priceCart=String(y.item.payNow.colorItem.price).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                                
                                return <div className="cart-pay ">
                                    <div className="cart-img"><img  src={y.item.payNow.products.image} /></div>
                                    <div className="cart-pay-columns">
                                        <div className="cart-name">{y.item.payNow.products.name}</div>
                                        <div className="cart-color">Màu: {y.item.payNow.colorItem.color}</div>
                                        <div className="cart-color">Dung lượng: {y.item.capacity}</div>
                                        <div className="cart-qty">Số lượng: 
                                            <Button 
                                            onClick={()=>minusItems(y)}  
                                            className="btn-color" 
                                            color="secondary">-</Button> {y.qty} 
                                            
                                            <Button 
                                            onClick={()=>plusItems(y)} 
                                            className="btn-color" 
                                            color="secondary">+</Button> 
                                            
                                            <Button
                                            onClick={()=>removeItem(y)}
                                            className="btn-color" 
                                            color="secondary">x</Button></div>
                                        
                                        
                                        
                                        <div className="cart-price">Giá tiền: {priceCart}</div>
                                       
                                    </div>

                                   
                                    
                                </div>
                                 
                                
                            })}
                            <div className="totalPrice">Thành tiền: {totalPriceVND}</div>
                        </div>
                    </div>
                </div>
                
                <div className={`navbarRes ${activeRes?"navbarResActive":""}`}>
                    <ul onClick={()=>setActiveRes(false)}>
                        <Link to="/" onClick={()=>setActiveRes(false)}><li>HOME</li></Link>
                        <li>CONTACT</li>
                        <Link to="/showrooms"   onClick={()=>setActiveRes(false)}><li>SHOWROOMS</li></Link> 
                        
                        <Link  onClick={resNavCart}><li>CART</li></Link>
                    </ul>
                </div>
            </div>
            
           
            
        </div>
    )
}

export default Navbar
