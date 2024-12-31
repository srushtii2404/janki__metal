import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { RiDownload2Line } from "react-icons/ri";

const Footer = () => {
    const [barsOpen, setBarsOpen] = useState(true);
    const [companyOpen, setCompanyOpen] = useState(true);
    const [jankiOpen, setJankiOpen] = useState(true); // State for Janki Metal
    const [contactOpen, setContactOpen] = useState(true); // State for Reach Out to Us

    return (
        <footer className="footer text-light">
            <div className="container">
                <div className="row justify-content-around mx-4">

                    {/* Janki Metal Section */}
                    <div className="col-lg-3 col-md-6 col-12 mb-3 text-left footer-main-header">
                        <h5
                            className={`toggle-header ${jankiOpen ? "active" : ""}`}
                            onClick={() => window.innerWidth <= 768 && setJankiOpen(!jankiOpen)}
                        >
                            Janki Metal {window.innerWidth <= 768 && (jankiOpen ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />)}
                        </h5>

                        <ul className={`list-unstyled ${jankiOpen || window.innerWidth > 768 ? "d-flex flex-column gap-3" : "d-none"}`}>
                            <p className="text-start">Quality metal steel products built for strength and reliability. Trust us for durable solutions.</p>
                            <p className="text-start">
                                <span><RiDownload2Line size={18} /></span> Download Catalogue
                            </p>
                        </ul>
                    </div>

                    {/* Bars Section */}
                    <div className="col-lg-3 col-md-6 col-12 mb-3 text-left footer-main-header">
                        <h5
                            className={`toggle-header ${barsOpen ? "active" : ""}`}
                            onClick={() => window.innerWidth <= 768 && setBarsOpen(!barsOpen)}
                        >
                            Bars {window.innerWidth <= 768 && (barsOpen ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />)}
                        </h5>
                        <ul className={`list-unstyled ${barsOpen || window.innerWidth > 768 ? "d-flex flex-column gap-3" : "d-none"}`}>
                            <Link to="/" className="list-item">Round Bars</Link>
                            <Link to="/" className="list-item">Square Bars</Link>
                            <Link to="/" className="list-item">Hex Bars</Link>
                            <Link to="/" className="list-item">Flat Bars</Link>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div className="col-lg-3 col-md-6 col-12 mb-3 text-left footer-main-header">
                        <h5
                            className={`toggle-header ${companyOpen ? "active" : ""}`}
                            onClick={() => window.innerWidth <= 768 && setCompanyOpen(!companyOpen)}
                        >
                            Company {window.innerWidth <= 768 && (companyOpen ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />)}
                        </h5>
                        <ul className={`list-unstyled ${companyOpen || window.innerWidth > 768 ? "d-flex flex-column gap-3" : "d-none"}`}>
                            <Link to="/aboutus" className="list-item">About Us</Link>
                            <Link to="/infrastructure" className="list-item">Infrastructure</Link>
                            <Link to="/applications" className="list-item">Application</Link>
                            <Link to="/contactus" className="list-item">Contact Us</Link>
                        </ul>
                    </div>

                    {/* Reach Out to Us Section */}
                    <div className="col-lg-3 col-md-6 col-12 mb-3 text-left footer-main-header">
                        <h5
                            className={`toggle-header ${contactOpen ? "active" : ""}`}
                            onClick={() => window.innerWidth <= 768 && setContactOpen(!contactOpen)}
                        >
                            Reach Out to Us {window.innerWidth <= 768 && (contactOpen ? <MdArrowDropUp /> : <MdOutlineArrowDropDown />)}
                        </h5>
                        <ul className={`contact-info list-unstyled ${contactOpen || window.innerWidth > 768 ? "d-flex flex-column gap-3" : "d-none"}`}>
                            <li className="contact-link">
                                <span><IoLocationSharp size={18}/></span>
                                <a href="https://maps.app.goo.gl/V1w97GSXwYafsSwz8" target='_blank'>
                                    Janki Metal Strips Pvt Ltd, B-703, Solitaire Corporate Park, SG Highway, Ahmedabad-380015.
                                </a>
                            </li>
                            <li className="contact-link">
                                <span><MdPhone size={18} /></span>
                                <a href="tel:+919558102221">+91 9558102221</a>
                            </li>
                            <li className="contact-link">
                                <span><MdEmail size={18} /></span>
                                <a href="mailto:jankimstrips@gmail.com">jankimstrips@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-12 mb-4 text-center">
                        <h5>Stay Connected with Us</h5>
                        <div className="icons d-flex justify-content-center gap-4">
                            <Link to="/" className="text-white"><FaFacebook size={22} /></Link>
                            <Link to="/" className="text-white"><FaInstagram size={22} /></Link>
                            <Link to="/" className="text-white"><FaLinkedin size={22} /></Link>
                            <Link to="/" className="text-white"><FaTwitter size={22} /></Link>
                        </div>
                    </div>

                </div>
                <hr />

                {/* Footer Copyright */}
                <div className="last-title text-center">
                    <p>&copy; 2024 Janki Metal | Design and Developed By <a href="https://www.vibrantindiatech.com/" target="_blank">Vibrant India Tech</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
