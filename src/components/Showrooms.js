import React from 'react'
import "./showrooms.css";
import { Link } from 'react-router-dom';
import {FaPhoneAlt,FaHandshake} from "react-icons/fa";
const Showrooms = () => {
    return (
        <>
            <div className="showroom-container">
                <div className="showroom">
                    <div className="showroom-left">
                        <div className="showroom-left--img"><img src="https://i.pinimg.com/originals/a5/91/99/a591996e17916e78f7121173534276c0.jpg"/><div className="showroom-left--logo">L14Mars</div></div>
                        <div className="showroom-left--title">TIỆN ÍCH TẠI HỆ THỐNG CỬA HÀNG CELLPHONES</div>
                        <div className="showroom-left--ul">
                            <ul className="showroom-left--ul---left">
                                <li>CellphoneS là hệ thống bán lẻ uỷ quyền chính hãng của Apple Việt Nam (AAR - Apple Authorized Reseller).</li>
                                <li>Nhân viên nhiệt tình, thân thiện, gửi xe & Wifi miễn phí</li>
                                <li>Trải nghiệm trực tiếp, và dùng thử sản phẩm miễn phí</li>
                                <li>Giá bán, khuyến mãi luôn tốt nhất thị trường</li>
                                <li>Dịch vụ bán hàng doanh nghiệp : giá tốt nhất - có hoa hồng</li>
                                <li>Bảo hành chính hãng, đổi mới miễn phí 1 tháng</li>
                                <li>Thu cũ đổi mới sản phẩm trợ giá tốt nhất</li>
                            </ul>
                            <ul className="showroom-left--ul---right">
                                <li>Miễn phí cà thẻ (ngoại trừ AMEX, UnionPay & JCB).</li>
                                <li>Trả góp từ 0% qua thẻ tín dụng quốc tế với trên 20 ngân hàng & công ty tài chính: Home Credit, Fe Credit, HD Saison, Mirae Asset</li>
                                <li>Trải nghiệm trực tiếp, và dùng thử sản phẩm miễn phí</li>
                                <li>Giá bán, khuyến mãi luôn tốt nhất thị trường</li>
                                <li>Dịch vụ bán hàng doanh nghiệp : giá tốt nhất - có hoa hồng</li>
                                <li>Bảo hành chính hãng, đổi mới miễn phí 1 tháng</li>
                                <li>Thu cũ đổi mới sản phẩm trợ giá tốt nhất</li>
                            </ul>
                        </div>
                    </div>
                    <div className="showroom-right">
                        <div className="showroom-right--contact">Liên hệ</div>
                        <div className="showroom-right--switchboard"><span><FaPhoneAlt/></span> Tổng đài miễn phí</div>
                        <div className="showroom-right--sale ml-20">Tư vấn mua hàng: <span>1800.2097</span></div>
                        <div className="showroom-right--sale ml-20">Khiếu nại, góp í: <span>1800.1403</span></div>
                        <div className="showroom-right--sale ml-20">Trung tâm bảo hành: <span>1800.2000</span></div>
                        <div className="showroom-right--handShake"><span><FaHandshake/></span>Hợp tác kinh doanh</div>
                        <div className="ml-20" style={{fontSize:"14px",fontWeight:"600"}}>Cho thuê mặt bằng:</div>
                        <div className="ml-20" style={{fontSize:"14px",fontWeight:"600",fontStyle:"italic"}}>Mr.Linh</div>
                        <div className="ml-20" style={{fontSize:"14px",color:"rgb(136, 136, 243)"}}>quanglinh29l5@gmail.com</div>
                        <div className="showroom-right--sale--company">Bán hàng doanh nghiệp</div>
                        <div className="ml-20" style={{fontSize:"14px"}}>Gọi: <span style={{fontSize:"14px",color:"rgb(136, 136, 243)"}}>1900.1403</span></div>
                        <div className="ml-20" style={{fontSize:"14px"}}>Email: <span style={{fontSize:"14px",color:"rgb(136, 136, 243)"}}>shark1403@gmail.com</span></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Showrooms
