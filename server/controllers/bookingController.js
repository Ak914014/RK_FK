import Booking from "../models/Booking.js";
import getZoomAccessToken from "../utils/getZoomAccessToken.js";
import axios from "axios";
import nodemailer from "nodemailer";
export const createBooking = async (req, res) => {
  const { name, email, query, year, month, day, time } = req.body;

  try {
    if (!name || !email || !query || !year || !month || !day || !time) {
      throw new Error("Missing required fields");
    }

    const booking = new Booking({ name, email, query, year, month, day, time });
    await booking.save();

    let token;
    try {
      token = await getZoomAccessToken();
    } catch (error) {
      console.error("Zoom token error:", error.response?.data || error.message);
      throw new Error("Failed to get Zoom access token");
    }

    const datetime = new Date(`${month} ${day}, ${year} ${time}`);
    const isoTime = datetime.toISOString();

    let zoomMeeting;
    console.log('Creating meeting with:');
console.log('User:', process.env.ZOOM_USER_EMAIL);
console.log('Token:', token.slice(0, 10) + '...'); // avoid printing full token
console.log('Start Time:', isoTime);

    try {
      const zoomRes = await axios.post(
        `https://api.zoom.us/v2/users/${process.env.ZOOM_USER_EMAIL}/meetings`,
        {
          topic: `Consultation with ${name}`,
          type: 2,
          start_time: isoTime,
          duration: 30,
          timezone: "Asia/Kolkata",
          settings: {
            join_before_host: true,
            approval_type: 0,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      zoomMeeting = zoomRes.data;
      if (!zoomMeeting.join_url) {
        throw new Error("Zoom meeting creation failed: No join_url returned");
      }
    } catch (error) {
      console.error(
        "Zoom meeting error:",
        error.response?.data || error.message
      );
      throw new Error("Failed to create Zoom meeting");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Consultation Zoom Call Scheduled",
      html: `
        <h3>Hi ${name},</h3>
        <p>Your consultation call has been booked successfully.</p>
        <ul>
          <li><strong>Query:</strong> ${query}</li>
          <li><strong>Date:</strong> ${day} ${month} ${year}</li>
          <li><strong>Time:</strong> ${time}</li>
        </ul>
        <p><strong>Zoom Meeting Details:</strong></p>
        <p>Join URL: <a href="${zoomMeeting.join_url}">${
        zoomMeeting.join_url
      }</a></p>
        <p>Meeting ID: ${zoomMeeting.id}</p>
        <p>Password: ${zoomMeeting.password || "None"}</p>
        <p>We look forward to speaking with you!</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent with details:", {
        join_url: zoomMeeting.join_url,
        email: email,
      });
    } catch (error) {
      console.error("Email sending error:", error.message);
      throw new Error("Failed to send confirmation email");
    }

    res.status(201).json({
      message: "Booking confirmed, Zoom meeting created, and email sent.",
      join_url: zoomMeeting.join_url,
      bookingDetails: booking,
    });
  } catch (error) {
    console.error("Booking error:", error.message);
    res.status(500).json({ error: error.message || "Booking failed" });
  }
};
