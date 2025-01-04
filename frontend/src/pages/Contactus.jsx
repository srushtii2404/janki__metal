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
                rows="2"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit" data-aos="zoom-in">Submit</button>
          </form>
        </div>
      </div>

      <div className="bg-light py-5 px-4">
        <h2 className="text-center mb-5 reachout-head" data-aos="fade-up">Reach Out Us</h2>
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
