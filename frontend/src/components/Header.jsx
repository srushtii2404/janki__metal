import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { CiMenuFries } from 'react-icons/ci';
import { MdClose } from 'react-icons/md';

const Header = () => {
    const location = useLocation();
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const headerClass = location.pathname === "/category" ? "category-header" : "header";


    useLayoutEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                if (window.scrollY > 80) {
                    headerRef.current.classList.add('scrolled');
                } else {
                    headerRef.current.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container-fluid p-0">
            <header ref={headerRef} className={`header ${headerClass}`}>
                <div className="header-container">
                    {/* Logo */}
                    <div className="logo">
                        <Link to="/" className="logo-link">
                            <h1 className="logo-text desktop-logo logo-header">
                               <img src="images/jankimetallogo.png" alt="company-logo" /> 
                            </h1>
                            <h1 className="logo-text mobile-logo logo-header">
                               <img src="images/jankimetallogo.png" alt="company-logo" /> 
                            </h1>
                            {/* <h1 className="logo-text ">Janki Metal</h1> */}
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>

                        <ul className="nav-list">
                        <li className="nav-item responcive-logo-view">
                            <h1 className="logo-text logo-header">
                               <img src="images/jankimetallogo.png" alt="company-logo" /> 
                            </h1>
                        </li>
                            <li className="nav-item">
                                <Link to="/aboutus" className="nav-link">About us</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/blackbars" className="nav-link">Black Bars</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/brightbars" className="nav-link">Bright Bars</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/steelgrades" className="nav-link">Steel Grades</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/steelgrades" className="nav-link">All Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/infrastructure" className="nav-link">Infrastructure</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/applications" className="nav-link">Applications</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contactus" className="nav-link">Contact us</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Menu Toggle Buttons */}
                    {!isMenuOpen ? (
                        <button className="menu-button" onClick={toggleMenu}>
                            <CiMenuFries size={24} />
                        </button>
                    ) : (
                        <button className="menu-button close-button" onClick={toggleMenu}>
                            <MdClose size={24} />
                        </button>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Header;
