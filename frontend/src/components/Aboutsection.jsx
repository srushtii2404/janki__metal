import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const AboutSection = () => {
    return (
        <>
            <div className='About-section section-margin'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 left-part'>
                            <h4 className='secondery-title'><span><img src="/images/titleimg.png" alt="title img" /></span>About Us</h4>
                            <h5 className='sub-text'>
                                OUR ORGANIZATION IS ON SUCCESS PATH SINCE EVERY YEAR
                            </h5>
                        </div>
                        <div className='col-lg-7'>
                            <p className='text-contente'>
                                 Janki Metal Strips Limited, founded in 2011, began producing stainless steel
                                 201 flat bars in 2013. Under Mr. Vinaye Jain's leadership, capacity grew from
                                 750 to 2000 tons by 2015, 
                                 and further to 3200 tons in 2017 with its subsidiary, Vasko Ispat Pvt Ltd.  
                            </p>
                            <p>
                            With its expansion, the company introduced high-grade 
                            products like austenite and super duplex, along with billets, 
                            round bars, and hex bars for industrial use. Billets are sourced 
                            via job work, enhancing the product mix and solidifying its market position.
                            </p>

                            <a href="#" className='primary-btn'>About Us <span className='primary-arrow'><FaArrowRight /></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection