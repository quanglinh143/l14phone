import React from 'react'
import "./footer.css";
import { FaInstagram,FaFacebook,FaTwitter } from 'react-icons/fa';
// import { BsTwitter} from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-left">
                <div className="footer-left--title">NEWSLETTER</div>
                <div className="footer-left--desscription">Sign up to receive exclusive updates and content</div>
                <div className="footer-left-search">
                    <input placeholder="*Your email address"/>
                    <button>OK</button>
                </div>
            </div>
            <div className="footer-center">
                <a href="#">Contact</a>
                <a href="#">FAQ</a>
                <a href="#">Legal terms and conditions</a>
                <a href="#">Data protection</a>
                <a href="#">Cookie management</a>
                <a href="#">Careers</a>
            </div>
            <div className="footer-right">
                <span>FOLLOW US</span>
                <div>
                    <span><FaFacebook/> </span>
                    <span><FaTwitter/> </span>
                    <span><FaInstagram/> </span>
                                       
                    
                    
                </div>

            </div>
        </div>
    )
}

export default Footer
