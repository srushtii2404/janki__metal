<<<<<<< HEAD
import UserModel from '../models/user.model.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
=======
import UserModel from "../models/user.model.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

>>>>>>> c2f0fa2 (data)
dotenv.config();

export async function postdata(req, res) {
  try {
    const { name, email, phone, message } = req.body;

<<<<<<< HEAD
    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Name, email, and phone are required", 
=======
    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Name, email, and phone are required",
>>>>>>> c2f0fa2 (data)
        error: true,
        success: false,
      });
    }

<<<<<<< HEAD
=======
    // Save the user data to the database
>>>>>>> c2f0fa2 (data)
    const senddata = await UserModel.create({
      name,
      email,
      phone,
      message,
    });

<<<<<<< HEAD
    // Prepare email content
    const emailContent = `
  ==================================
          New Inquiry Details
  ==================================
  Name:       ${name}
  Email:      ${email}
  Phone:      ${phone}
  ----------------------------------
  Message:
  ${message}
  ==================================
`;


    // Send email to the admin
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,  // Your email address
=======
    const emailContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Inquiry Submission</title>
      </head>
      <body style="font-family: 'Poppins', sans-serif; background-color:white; margin: 0; padding: 0;">
        <div style="max-width: 500px; margin: 10px auto; background: #fff; border-radius: 8px; box-shadow: 50px 50px 50px 50px rgba(0, 0, 0, 0.2); border: 1px solid #4A4947 ;">
          <div style="display: flex; justify-content: center; background-color: #f4f4f4; padding: 20px;">
            <img src="D:/Janki-metal/frontend/public/images/logo.jpeg" alt="Logo" style="max-width: 200px;" />
          </div>
    
          <div style="background-color: #D8D2C2; color: #4A4947; text-align: center; padding: 20px;">
            <div style="font-size: 28px; font-weight: bold; letter-spacing: 1px;">New Inquiry Submission</div>
          </div>
    
          <div style="padding: 30px 20px; font-size: 16px; line-height: 1.6; color: #333;">
            <table style="width: 100%; border: 1px solid #4A4947;">
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #4A4947; border: 1px solid #4A4947;">Name:</td>
                <td style="padding: 8px; border: 1px solid #4A4947;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #4A4947; border:1px solid #4A4947;">Email:</td>
                <td style="padding: 8px; border:1px solid #4A4947;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #4A4947; border:1px solid #4A4947">Phone:</td>
                <td style="padding: 8px; border:1px solid #4A4947">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #4A4947; border:1px solid #4A4947">Message:</td>
                <td style="padding: 8px; border:1px solid #4A4947">${message}</td>
              </tr>
            </table>
          </div>
    
          <div style="text-align: center; padding: 10px; background-color: #4A4947; color: white; font-size: 14px; line-height: 1.5;">
            <p style="margin: 0; color:white!important">info@vibrantindiatech.com</p>
            <p style="margin: 5px 0;color:white;">
                Address here...
            </p>
            <p style="margin: 0; font-size: 12px;color:white;">
              Copyright &copy; <span>${new Date().getFullYear()}</span> Janki Metal. All Rights Reserved
            </p>
            <div style="margin-top: 10px; display: flex; justify-content: center; gap: 10px;">
              <a href="/" target="_blank" style="text-decoration: none;">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram.png" alt="Instagram" style="width: 30px; height: 30px;" />
              </a>
              <a href="/" target="_blank" style="text-decoration: none;">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png" alt="Facebook" style="width: 30px; height: 30px;" />
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
    `;
    

  
  

    // Send email to the admin
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your email address
>>>>>>> c2f0fa2 (data)
        pass: process.env.EMAIL_PASSWORD, // Your email app password
      },
    });

<<<<<<< HEAD


    const mailOptions = {
      from: email, // Always your verified sender email
      replyTo: email,          // This will show the user's email as the reply-to address
      to: process.env.ADMIN_EMAIL, // Admin email
      subject: 'New Contact Form Submission',
      text: emailContent,
=======
    const mailOptions = {
      from: email, // Always your verified sender email
      replyTo: email, // This will show the user's email as the reply-to address
      to: process.env.ADMIN_EMAIL, // Admin email
      subject: "New Contact Form Submission",
      html: emailContent, // Use HTML content with inline CSS
>>>>>>> c2f0fa2 (data)
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({
<<<<<<< HEAD
      message: 'Thank you, we will contact you as soon as possible.',
=======
      message: "Thank you, we will contact you as soon as possible.",
>>>>>>> c2f0fa2 (data)
      data: senddata,
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}
