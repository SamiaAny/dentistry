import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-part">
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-5 text-white">
                        <h3>Dentistry</h3>
                        <p>Always try to provide best treatment and give the best priority to patients comfort.</p>
                        <div><i className="bi bi-geo-alt-fill me-2"></i>29 Union Square W
                        New York, NY 10003, USA</div>
                        <div><i className="bi bi-telephone-fill me-2"></i>+86 0018233454</div>
                        <div><i className="bi bi-envelope-fill me-2"></i>info@dentistry.com</div>
                        <p>&copy; All right reserved by Dentistry</p>
                    </div>
                    <div className="col-md-3 text-white">
                        <h3>Services</h3>
                        <ul className="service-list">
                            <li>Dental Implants</li>
                            <li>Laser Dentistry</li>
                            <li>Cosmetic Dentistry</li>
                            <li>Orthodontics</li>
                            <li>Endodontics</li>
                            <li>Periodontics</li>
                        </ul>

                    </div>
                    <div className="col-md-4 text-white">
                        <h3>We're Available</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Sunday:</td>
                                    <td>7.00pm - 11.00pm</td>
                                </tr>
                                <tr>
                                    <td>Monday:</td>
                                    <td>9.00am - 10.00pm</td>
                                </tr>
                                <tr>
                                    <td>Tuesday:</td>
                                    <td>8.00am - 10.00pm</td>
                                </tr>
                                <tr>
                                    <td>Wednesday:</td>
                                    <td>7.00 - 11.00</td>
                                </tr>
                                <tr>
                                    <td>Thurseday:</td>
                                    <td>4.00pm - 11.00pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;