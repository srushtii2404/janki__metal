<<<<<<< HEAD
import React, { useState } from 'react';
import axios from 'axios';
import './Contactus.css';
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import { IoMdCall, IoMdMail } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
>>>>>>> c2f0fa2 (data)

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

<<<<<<< HEAD
=======
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation will only occur once when scrolled into view
    });
  }, []);

>>>>>>> c2f0fa2 (data)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
<<<<<<< HEAD
      const response = await axios.post('http://localhost:8080/data/postdata', formData);
      alert('Message sent successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send the message.');
=======
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
>>>>>>> c2f0fa2 (data)
    }
  };

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Enter your phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Enter your message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
=======
    <div className="contactus-container">
      {/* Banner Section */}
      <div className="row">
        <div className="col-12 banner" data-aos="fade-in">
          <img src="/images/contactus.jpeg" alt="Contact Us Banner" className="w-100" />
        </div>
      </div>

      {/* Form Section */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-7" data-aos="fade-up">
          <h2 className="text-center head">Let's Connect</h2>
          <p className="text-center">Have questions or want to collaborate? Reach out to us and let's make things happen!</p>
          <form onSubmit={handleSubmit} className="p-4 rounded bg-white mt-4 shadow">
            <div className="row">
              <div className="col-md-6">
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
              <div className="col-md-6">
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
            <div className="row">
              <div className="col-md-12">
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
              <div className="col-md-12">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea-field"
                  placeholder="Enter your message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Contact Info Section */}
      {/* Contact Info Section */}
      <div className="row justify-content-center mt-5 bg-light contact-info-section">
        <h2 className="text-center head">Get In Touch</h2>
        <p className="text-center">Click on the below button to fill in our very short form. It will only take a minute and we will contact you.</p>

        {/* Boxes Section */}
        <div className="row justify-content-center mt-4 px-5">
          <div className="col-lg-4 col-md-8 col-sm-12 mb-4">
            <a href="https://maps.app.goo.gl/V1w97GSXwYafsSwz8" className="text-decoration-none" target="_blank">
              <div className="contact-box p-4 text-center bg-white rounded shadow" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-box">
                  <MdLocationPin size={32} />
                </div>
                <h5 className="mt-2 text-bold">Our Location</h5>
                <p>B-703,704, Solitaire Corporate Park, Nr Divya Bhaskar Press, SG Highway, Ahmedabad-380015.</p>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-8 col-sm-12 mb-4">
            <a href="tel:+919558102221" className="text-decoration-none" target="_blank">
              <div className="contact-box p-5 text-center bg-white rounded shadow" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box">
                  <IoMdCall size={32} />
                </div>
                <h5 className="mt-2">Call Us</h5>
                <p className='contact-box-details'>+91 9558102221</p>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-md-8 col-sm-12 mb-4">
            <a href="mailto:jankimstrips@gmail.com" className="text-decoration-none" target="_blank">
              <div className="contact-box p-5 text-center bg-white rounded shadow" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box">
                  <IoMdMail size={32} />
                </div>
                <h5 className="mt-2">Email Us</h5>
                <p className='contact-box-details'>jankimstrips@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>


      {/* Google Map Section */}
      <div className="row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.653130023613!2d72.49708937350665!3d22.99977941718185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9addd43f39f3%3A0xbd8bd0df73d42013!2sJanki%20Metal%20Strips%20Private%20Limited!5e0!3m2!1sen!2sin!4v1735284454249!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
>>>>>>> c2f0fa2 (data)
  );
};

export default Contactus;
