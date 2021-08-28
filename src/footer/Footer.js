import React from 'react'
import "./footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <div className="footer-left-a">
                    <div className="title">Service</div>
                    <ul>
                        <li>Web design</li>
                        <li>Development</li>
                        <li>Hosting</li>
                    </ul>
                </div>
                <div className="footer-left-b">
                    <div className="title">About</div>
                        <ul>
                            <li className="li">Company</li>
                            <li>Team</li>
                            <li>Careers</li>
                        </ul>
                </div>
            </div>
            <div className="footer-right">
            <div className="title">Company Name</div>
            <div>Praesent sed lobortis mi. Suspendisse vel placerat ligula. 
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam 
                quis tristique lectus. Aliquam in arcu eget velit pulvinar 
                dictum vel in justo.</div>
            </div>
        </div>
    )
}

export default Footer
