import React from 'react'
import "./products.css";
import StarRatings from "react-star-ratings";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
const Products = ({dataHasBeenProcessed,onAddItem,searchTerm}) => {
    console.log(searchTerm)
    return (
        <div className="products-container">
            {dataHasBeenProcessed.map((item,index)=>{
                console.log(item)
                const titleProducts=item.selection.toUpperCase(); 
                const showprd=(item)=>{
                    onAddItem(item)
                }
                return <div>
                    <Link to={`/brand/${item.selection}`} className="products-phone">{titleProducts}</Link>
                        <div className="products-dataselection">
                        {item.dataSelection.filter((val)=>{
                    if(searchTerm===""){
                        return val
                    }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val;
                    }
                }).map((il)=>{
                            //xử lý tên
                            // il.name= il.name.toLowerCase();
                            // il.name= il.name.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
                            // il.name= il.name.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
                            // il.name= il.name.replace(/ì|í|ị|ỉ|ĩ/g,"i");
                            // il.name= il.name.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
                            // il.name= il.name.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
                            // il.name= il.name.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
                            // il.name= il.name.replace(/đ/g,"d");
                            // il.name= il.name.replace(/!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\'| |\"|\&|\#|\[|\]|~/g,"-");
                            // il.name= il.name.replace(/-+-/g,"-"); 
                            // il.name= il.name.replace(/^\-+|\-+$/g,"");
                            //xử lý tiền
                              const sale=((il.old_price-il.special_price)/il.old_price*100).toFixed();
                              const vnd_special_price=String(il.special_price).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                              const vnd_old_price=String(il.old_price).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                            return <Link className="products-link" to={`/sp/${il.name}`} >
                                        <div className="products" onClick={()=>showprd(il)}>
                                            <div className="products-sale">{sale}%</div>
                                            <div className="products-img"><img src={il.image}/></div>
                                            <div className="products-name">{il.name}</div>
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
                        })}
                        </div>
                    </div>
                
            })}
            
            
        </div>
    )
}

export default Products

