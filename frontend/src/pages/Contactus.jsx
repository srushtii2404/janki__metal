import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import { IoMdCall, IoMdMail } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation will only occur once when scrolled into view
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/data/postdata',
        formData
      );
      toast.success('Message sent successfully!', {
        closeButton: false,
      });
      navigate('/thankyoupage');
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send the message.', {
        closeButton: false,
      });
    }
  };

  return (
    <div className="contactus-container">
      <div className="banner">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center'>
              <div className="form-container" data-aos="fade-up">
                <form onSubmit={handleSubmit} className="shadow">
                  <h2 className="head">Let's Connect</h2>
                  <div className="form-group-row">
                    <div className="form-group" data-aos="fade-right">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="input-field"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group" data-aos="fade-left">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="input-field"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group" data-aos="fade-up">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input-field"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group" data-aos="fade-up">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="textarea-field"
                      placeholder="Enter your message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button type="submit" className="submit" data-aos="zoom-in">Submit</button>
                </form>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
              <div className='content-box'>
                <h4 className='contact-heading'>Contact With Us</h4>
                <h2 className='sub-content'>Let's Talk Now</h2>
                <p className='sub-text me-3 text-start'>Contact us for reliable and high-quality steel solutions for all your construction and industrial needs. Our team is ready to assist you with expert guidance and exceptional service.</p>
                <div className='map-section'>
                <div className='map-view'  style={{ width: '100%', height: '312px', margin: '20px 0',opacity: "0.9" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.653264378948!2d72.49708937513984!3d22.999774479189636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9addd43f39f3%3A0xbd8bd0df73d42013!2sJanki%20Metal%20Strips%20Private%20Limited!5e0!3m2!1sen!2sin!4v1736167195458!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
      ></iframe>
    </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-light py-5 px-4">
        <h2 className="text-center mb-5 reachout-head ternery-title " data-aos="fade-up"><span><img src="images/titleimg.png" alt="title img" class="px-1" /></span>Reach Out Us</h2>
        <div className="row d-flex justify-content-around text-center gap-3">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 shadow rounded d-flex flex-column align-items-center contact-item" data-aos="fade-up">
            <MdLocationPin size={"32px"} className="icon" />
            <h3 className="content">Location</h3>
            <p className="detail">Janki Metal Strips Pvt Ltd,B-704,704,SolitaireCorporate Park,Nr Divya Bhaskar Press,SG Highway,Ahmedabad-380015</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 shadow rounded d-flex flex-column align-items-center contact-item" data-aos="fade-up" data-aos-delay="100">
            <IoMdCall size={"32px"} className="icon" />
            <h3 className="content">Call Us</h3>
            <p className="detail">+91 9558102221</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 shadow rounded d-flex flex-column align-items-center contact-item" data-aos="fade-up" data-aos-delay="300">
            <IoMdMail size={"32px"} className="icon" />
            <h3 className="content">Email</h3>
            <p className="detail">jankimstrips@gmail.com</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contactus;
