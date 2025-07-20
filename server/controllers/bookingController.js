import Booking from "../models/Booking.js";
import nodemailer from "nodemailer";

export const createBooking = async (req, res) => {
  const { name, email, query, year, month, time } = req.body;

  try {
    const booking = new Booking({ name, email, query, year, month, time });
    await booking.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Consultation Call Confirmed",
      html: `
        <h3>Hi ${name},</h3>
        <p>Your consultation call has been booked successfully.</p>
        <ul>
          <li><strong>Query:</strong> ${query}</li>
          <li><strong>Date:</strong> ${month} ${year}</li>
          <li><strong>Time:</strong> ${time}</li>
        </ul>
        <p>We look forward to speaking with you!</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Booking confirmed and email sent." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Booking failed" });
  }
};
