import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { footerData } from "../commonjs/Data";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GiWaterTower } from "react-icons/gi";

const Footer = () => {
    const [openSections, setOpenSections] = useState({
        janki: false,
        bars: false,
        company: false,
        contact: false,
    });
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Track screen size

    // Update isMobile state when window is resized
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSection = (id) => {
        setOpenSections((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <footer className="footer text-light bg-dark py-4">
            <div className="container">
                {/* Row for Footer Sections */}
                <div className="row">
                    {footerData.sections.map((section) => (
                        <div key={section.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <h5
                                className={`footer-title footer-main-header ${openSections[section.id] ? "active" : ""}`}
                                onClick={() => isMobile && toggleSection(section.id)} // Only toggle on mobile
                            >
                                {section.title}
                                <span className={`ml-2 ${isMobile ? "d-inline" : "d-none"}`}>
                                    {openSections[section.id] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </span>
                            </h5>

                            <ul
                                className={`list-unstyled ${openSections[section.id] || !isMobile ? "d-block" : "d-none"}`}
                            >
                                {section.links
                                    ? section.links.map((link, idx) => (
                                        <li key={idx}>
                                            <Link className="text-decoration-none" to={link.to}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))
                                    : <li>{section.content}</li>}
                            </ul>
                        </div>
                    ))}
                </div><hr />

                {/* Footer Bottom Row */}
                <div className="row">
                    <div className="col footer-dev text-center">
                        <h6>
                        &copy; {new Date().getFullYear()} Janki Metal | Designed by{" "}

                            <a
                                href="https://www.vibrantindiatech.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Vibrant India Tech
                            </a>
                        </h6>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
