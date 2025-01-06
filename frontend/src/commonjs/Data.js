import { IoLocationSharp } from "react-icons/io5";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiDownload2Line } from "react-icons/ri";
import { GiWaterTower } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
export const footerData = {
    socialLinks: [
        { to: "https://www.facebook.com", icon: <FaFacebook size={22} /> },
        { to: "https://www.instagram.com", icon: <FaInstagram size={22} /> },
        { to: "https://www.linkedin.com", icon: <FaLinkedin size={22} /> },
        { to: "https://www.twitter.com", icon: <FaTwitter size={22} /> },
    ],
    sections: [
        {
            id: "janki",
            title: "JANKI METAL",
            icon:  (
                <p>
                    <GiWaterTower size={18} />
                </p>
            ),
                        content: (
                <p>
                    <RiDownload2Line size={18} /> Download Catalogue
                </p>
            ),
        },
        {
            id: "bars",
            title: "BARS",
            links: [
                { to: "/", label: "Round Bars" },
                { to: "/", label: "Square Bars" },
                { to: "/", label: "Hex Bars" },
                { to: "/", label: "Flat Bars" },
            ],
        },
        {
            id: "company",
            title: "COMPANY",
            links: [
                { to: "/aboutus", label: "About Us" },
                { to: "/infrastructure", label: "Infrastructure" },
                { to: "/applications", label: "Application" },
                { to: "/contactus", label: "Contact Us" },
            ],
        },
        {
            id: "contact",
            title: "REACH OUT TO US",
            content: (
                <>
                    <li className="reach d-flex">
                         <span className="me-1"><IoLocationSharp size={18} />{" "}</span>
                        <span><a href="https://maps.app.goo.gl/V1w97GSXwYafsSwz8" target="_blank" rel="noreferrer">
                            Janki Metal Strips Pvt Ltd, B-703, Solitaire Corporate Park, SG Highway, Ahmedabad-380015.
                        </a>
                        </span>
                    </li>
                    <li className="reach">
                    <span className="me-1"><MdPhone size={18} /></span>
                    <span><a href="tel:+919558102221">+91 9558102221</a></span>
                    </li>
                    <li className="reach">
                    <span className="me-2"> <MdEmail size={18} /></span>
                    <span><a href="mailto:jankimstrips@gmail.com">jankimstrips@gmail.com</a></span>
                    </li>

                    <h6 className="follow mb-3">Follow Us on Social-Media</h6>

                    <div className="li-container d-flex gap-3">
                        <li className="social-media-link">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="bb">
                                {/* <FaFacebook size="18px" /> */}
                                <FaFacebookF size="22" />
                            </a>
                        </li>
                        <li  className="social-media-link">
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="bb">
                                <FaInstagram size="18px" />
                            </a>
                        </li>
                        <li className="social-media-link">
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="bb">
                                <FaLinkedin size="18px" />
                            </a>
                        </li>
                        <li className="social-media-link">
                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="bb">
                                <FaTwitter size="18px" />
                            </a>
                        </li>
                    </div>
                </>
            ),
        },
    ],
};
