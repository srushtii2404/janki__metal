import { IoLocationSharp } from "react-icons/io5";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiDownload2Line } from "react-icons/ri";

// Footer Data
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
                    <li className="reach">
                        <IoLocationSharp size={18} />{" "}
                        <a href="https://maps.app.goo.gl/V1w97GSXwYafsSwz8" target="_blank" rel="noreferrer">
                            Janki Metal Strips Pvt Ltd, B-703, Solitaire Corporate Park, SG Highway, Ahmedabad-380015.
                        </a>
                    </li>
                    <li className="reach">
                        <MdPhone size={18} /> <a href="tel:+919558102221">+91 9558102221</a>
                    </li>
                    <li className="reach">
                        <MdEmail size={18} /> <a href="mailto:jankimstrips@gmail.com">jankimstrips@gmail.com</a>
                    </li>

                    <h6 className="follow">Follow Us on Social-Media</h6>

                    <div className="li-container d-flex gap-3">
                        <li>
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                <FaFacebook size="18px" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                <FaInstagram size="18px" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                                <FaLinkedin size="18px" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                                <FaTwitter size="18px" />
                            </a>
                        </li>
                    </div>
                </>
            ),
        },
    ],
};


// data.js

export const aboutus = {
    carouselData: [
        {
            imgSrc: "https://img.freepik.com/free-photo/factory-worker-protective-uniform-hardhat-operating-industrial-machine-production-line_342744-218.jpg?uid=R105870901&ga=GA1.1.79573969.1735278794&semt=ais_hybrid",
            title: "Metal Masters",
            subtitle: "Metallogenuity"
        },
        {
            imgSrc: "https://img.freepik.com/free-photo/portrait-young-worker-hard-hat-large-metalworking-plant_146671-19572.jpg?uid=R105870901&ga=GA1.1.79573969.1735278794&semt=ais_hybrid",
            title: "Metal Masters",
            subtitle: "Metallogenuity"
        },
        {
            imgSrc: "https://img.freepik.com/premium-photo/rear-view-two-young-men-uniform-discussing-quality-new-equipment_274679-37753.jpg?uid=R105870901&ga=GA1.1.79573969.1735278794&semt=ais_hybrid",
            title: "Metal Masters",
            subtitle: "Metallogenuity"
        },
        {
            imgSrc: "https://img.freepik.com/free-photo/man-spraying-powder-paint-from-gun-full-shot_23-2149878748.jpg?uid=R105870901&ga=GA1.1.79573969.1735278794&semt=ais_hybrid",
            title: "Metal Masters",
            subtitle: "Metallogenuity"
        },
    ],

    timeline: {
        years: [2019, 2020, 2021, 2022, 2023],
        content: {
            2019: "This is the content for the year 2019.",
            2020: "This is the content for the year 2020.",
            2021: "This is the content for the year 2021.",
            2022: "This is the content for the year 2022.",
            2023: "This is the content for the year 2023."
        }
    },

    leadership: [
        {
            name: "Mr Vinaye Jain",
            position: "CEO",
            imgSrc: "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg",
            details: "Vinaye Jain is a visionary leader with over 20 years of experience in the steel and metal industry.",
        },
        {
            name: "Mr Raman Poddar",
            position: "CTO",
            imgSrc: "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg",
            details: "Raman Poddar specializes in technological innovation and has spearheaded multiple successful projects.",
        },
        {
            name: "Mr Jivansh Jain",
            position: "COO",
            imgSrc: "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg",
            details: "Jivansh Jain is known for his operational excellence and strategic planning in scaling businesses.",
        },
    ],

    
};

