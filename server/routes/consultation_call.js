// import express from "express";

// // This will help us connect to the database
// import db from "../db/connection.js";

// // This help convert the id from string to ObjectId for the _id.
// import { ObjectId } from "mongodb";

// // router is an instance of the express router.
// // We use it to define our routes.
// // The router will be added as a middleware and will take control of requests starting with path /record.
// const router = express.Router();

// // This section will help you get a list of all the consultation_call.
// router.get("/", async (req, res) => {
//   let collection = await db.collection("consultation_call");
//   let results = await collection.find({}).toArray();
//   res.send(results).status(200);
// });

// router.post("/", async (req, res) => {
//   try {
//     let newDocument = {
//       name: req.body.name,
//       date:  req.body.date,
//       time:  req.body.time,
//       email: req.body.email,
//       query: req.body.query,

//     };
//     let collection = await db.collection("consultation_call");
//     let result = await collection.insertOne(newDocument);
//     res.send(result).status(201);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error adding record");
//   }
// });


// export default router;

import React, { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import img3 from "../assets/img/Legal.svg";

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("9:30");
  const [month, setMonth] = useState(new Date().getMonth()); // 0-11
  const [year, setYear] = useState(new Date().getFullYear());
  
  // Form state
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    query: ''
  });
  
  // Loading and error states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = Array.from({ length: 50 }, (_, i) => 2000 + i); // 2000–2049
  const times = Array(9).fill("9:30"); // 9 time slots for demo

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getStartDay = (month, year) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Adjust for Monday start
  };

  const daysInMonth = getDaysInMonth(month, year);
  const startDay = getStartDay(month, year);
  const daysArray = [...Array(startDay).fill(null), ...Array(daysInMonth).fill(null).map((_, i) => i + 1)];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!selectedDate || !selectedTime || !formData.email || !formData.name) {
      setSubmitMessage('Please fill in all required fields and select a date and time.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Format the date properly
      const selectedDateString = `${selectedDate} ${months[month]} ${year}`;
      
      // Prepare data for backend
      const appointmentData = {
        name: formData.name,
        date: selectedDateString,
        time: selectedTime,
        email: formData.email,
        query: formData.query || '' // Optional field
      };

      // Send POST request to backend
      const response = await fetch('/api/consultation_call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData)
      });

      if (response.ok) {
        setSubmitMessage('Appointment scheduled successfully! We will contact you soon.');
        // Reset form
        setFormData({ email: '', name: '', query: '' });
        setSelectedDate(null);
        setSelectedTime("9:30");
      } else {
        throw new Error('Failed to schedule appointment');
      }
    } catch (error) {
      console.error('Error submitting appointment:', error);
      setSubmitMessage('Error scheduling appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] px-4 py-10 flex flex-col items-center font-sans">
      {/* Header Section */}
      <div className="bg-[#FFFAF0] w-full px-6 rounded-3xl flex justify-between items-center">
        <div>
          <h1 className="text-5xl mb-8 font-semibold text-[#2B3B47]">Hello, Let's Talk!</h1>
          <p className="text-2xl mb-8 w-4/5 text-[#2B3B47] mt-2">
            Schedule a 30 min one-to-one Appointment to discuss which plan is best for you.
          </p>
          <div className="text-xl mt-2 flex items-center text-[#828282]">
            <span className="text-2xl mr-2"><BsFillInfoCircleFill /></span>This is optional but highly recommended!
          </div>
        </div>
        <div className="hidden md:block">
          <div className="rounded-full text-center flex items-center justify-center">
            <img
              src={img3}
              alt=""
              className="w-90 rounded-full object-contain"
            />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        {/* Date Picker */}
        <div className="mt-10">
          <h2 className="text-2xl mt-10 font-bold text-[#2B3B47] mb-4">Choose a Date *</h2>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex gap-4 mb-4">
              <select
                value={month}
                onChange={(e) => setMonth(parseInt(e.target.value))}
                className="border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none"
              >
                {months.map((name, idx) => (
                  <option key={idx} value={idx}>{name}</option>
                ))}
              </select>

              <select
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value))}
                className="border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none"
              >
                {years.map((yr) => (
                  <option key={yr} value={yr}>{yr}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500 mb-2">
              {["M", "Tu", "W", "Th", "F", "Sa", "Su"].map((d, i) => (
                <div key={i} className="font-bold text-gray-700">{d}</div>
              ))}
              {daysArray.map((day, index) => (
                <div
                  key={index}
                  onClick={() => day && setSelectedDate(day)}
                  className={`py-1.5 rounded-full cursor-pointer ${
                    selectedDate === day ? "bg-orange-500 text-white" : day ? "hover:bg-orange-100" : ""
                  }`}
                >
                  {day || ""}
                </div>
              ))}
            </div>

            {selectedDate && (
              <p className="mt-2 text-sm text-gray-600 text-center">
                Selected: {selectedDate} {months[month]} {year}
              </p>
            )}
          </div>
        </div>

        {/* Time Picker */}
        <div className="mt-10">
          <h2 className="text-2xl mt-10 font-bold text-[#2B3B47] mb-4">Pick a time *</h2>
          <div className="bg-white p-6 rounded-xl shadow-md grid grid-cols-3 sm:grid-cols-4 gap-4 text-sm">
            {times.map((time, index) => (
              <button
                key={index}
                type="button"
                className={`py-2 rounded-md ${
                  selectedTime === time && index === 4
                    ? "bg-orange-500 text-white"
                    : "bg-orange-50 text-gray-800 hover:bg-orange-100"
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Form Inputs */}
        <div className="mt-10 space-y-10">
          <div>
            <label className="text-2xl mt-10 font-bold text-[#2B3B47]">Enter Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="youremail@gmail.com"
              className="w-full border-2 border-orange-500 rounded-full px-6 py-3 mt-2 placeholder:text-gray-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-2xl mt-10 font-bold text-[#2B3B47]">Enter Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Jane"
              className="w-full border-2 border-orange-500 rounded-full px-6 py-3 mt-2 placeholder:text-gray-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="text-2xl mt-10 font-bold text-[#2B3B47]">Any Queries?</label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleInputChange}
              rows={5}
              placeholder="Hey, Which plan is right for?"
              className="w-full border-2 border-orange-500 rounded-2xl px-6 py-3 mt-2 placeholder:text-gray-500 focus:outline-none resize-none"
            />
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div className={`text-center p-3 rounded-lg ${
              submitMessage.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {submitMessage}
            </div>
          )}

          <div className="flex gap-6 justify-start">
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 rounded-full text-white ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-orange-500 hover:bg-orange-600'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;