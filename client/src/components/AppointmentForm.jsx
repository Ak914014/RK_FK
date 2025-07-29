import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { BsFillInfoCircleFill, BsArrowLeft } from "react-icons/bs";
import {
  FiCalendar,
  FiClock,
  FiMail,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import {
  bookAppointment,
  resetBookingState,
} from "../Redux/slices/bookingSlice";
import img3 from "../assets/img/Legal.svg";

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("9:30 AM");
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const [formStep, setFormStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();
  const { loading, error, success, bookingDetails } = useSelector(
    (state) => state.booking
  );

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from(
    { length: 5 },
    (_, i) => new Date().getFullYear() + i
  );
  const times = [
    "9:30 AM",
    "10:30 AM",
    "11:30 AM",
    "1:30 PM",
    "2:30 PM",
    "3:30 PM",
    "4:30 PM",
    "5:30 PM",
  ];

  const getDaysInMonth = (month, year) =>
    new Date(year, month + 1, 0).getDate();
  const getStartDay = (month, year) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const isPastDate = (day, month, year) => {
    const today = new Date();
    const selected = new Date(year, month, day);
    return selected < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const daysInMonth = getDaysInMonth(month, year);
  const startDay = getStartDay(month, year);
  const daysArray = [
    ...Array(startDay).fill(null),
    ...Array(daysInMonth)
      .fill(null)
      .map((_, i) => i + 1),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !query || !selectedDate || !selectedTime) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    const bookingData = {
      name,
      email,
      query,
      year,
      month: months[month],
      day: selectedDate,
      time: selectedTime,
    };

    dispatch(bookAppointment(bookingData));
  };

  useEffect(() => {
    if (success) {
      setShowSuccess(true);
      resetForm();
      setTimeout(() => {
        setShowSuccess(false);
        dispatch(resetBookingState());
      }, 3000);
    }
    if (error) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
        dispatch(resetBookingState());
      }, 3000);
    }
  }, [success, error, dispatch]);

  const resetForm = () => {
    setEmail("");
    setName("");
    setQuery("");
    setSelectedDate(null);
    setSelectedTime("9:30 AM");
    setFormStep(1);
  };

  const nextStep = () => {
    if (formStep < 3) setFormStep(formStep + 1);
  };

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white px-4 py-10 flex flex-col items-center font-sans relative"
    >
      {/* Header Section */}
      <motion.div
        className="bg-[#FFFAF0] w-full max-w-6xl px-6 py-8 rounded-3xl flex flex-col md:flex-row justify-between items-center mb-10 shadow-sm"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="md:w-2/3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B3B47] mb-4">
            Hello, Let's Talk!
          </h1>
          <p className="text-lg md:text-xl text-[#2B3B47] mb-4">
            Schedule a 30 min one-to-one appointment to discuss which plan is
            best for you.
          </p>
          <div className="flex items-center text-[#828282]">
            <BsFillInfoCircleFill className="text-xl mr-2 text-amber-500" />
            <span>This is optional but highly recommended!</span>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="hidden md:block"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={img3}
            alt="Legal"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Form Steps */}
      <div className="w-full max-w-2xl mb-8">
        <div className="flex justify-between items-center mb-6">
          {[1, 2, 3].map((step) => (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    formStep >= step
                      ? "bg-amber-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  } font-semibold`}
                >
                  {step}
                </div>
                <span
                  className={`text-sm mt-2 ${
                    formStep >= step
                      ? "text-amber-600 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {step === 1 ? "Date" : step === 2 ? "Time" : "Details"}
                </span>
              </div>
              {step < 3 && (
                <div
                  className={`h-1 flex-1 mx-2 ${
                    formStep > step ? "bg-amber-500" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {formStep === 1 && (
            <motion.div
              key="step1"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md mb-6"
            >
              <h2 className="text-2xl font-bold text-[#2B3B47] mb-6 flex items-center">
                <FiCalendar className="mr-2 text-amber-500" /> Choose a Date
              </h2>
              <div className="flex gap-4 mb-6">
                <select
                  value={month}
                  onChange={(e) => {
                    setMonth(parseInt(e.target.value));
                    setSelectedDate(null); // Reset selected date when month changes
                  }}
                  className="flex-1 border-2 border-gray-200 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {months.map((name, idx) => (
                    <option key={idx} value={idx}>
                      {name}
                    </option>
                  ))}
                </select>
                <select
                  value={year}
                  onChange={(e) => {
                    setYear(parseInt(e.target.value));
                    setSelectedDate(null); // Reset selected date when year changes
                  }}
                  className="flex-1 border-2 border-gray-200 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {years.map((yr) => (
                    <option key={yr} value={yr}>
                      {yr}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500 mb-4">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <div key={i} className="font-semibold text-gray-600 py-2">
                    {d}
                  </div>
                ))}
                {daysArray.map((day, index) => {
                  const isDisabled = day && isPastDate(day, month, year);
                  return (
                    <motion.div
                      key={index}
                      onClick={() => !isDisabled && day && setSelectedDate(day)}
                      whileHover={day && !isDisabled ? { scale: 1.05 } : {}}
                      className={`py-2 rounded-full transition-all ${
                        selectedDate === day
                          ? "bg-amber-500 text-white shadow-md"
                          : isDisabled
                          ? "text-gray-300 cursor-not-allowed"
                          : day
                          ? "hover:bg-amber-100 cursor-pointer"
                          : ""
                      }`}
                    >
                      {day || ""}
                    </motion.div>
                  );
                })}
              </div>
              {selectedDate && (
                <p className="text-center text-amber-600 font-medium mt-4">
                  Selected: {selectedDate} {months[month]} {year}
                </p>
              )}
            </motion.div>
          )}

          {formStep === 2 && (
            <motion.div
              key="step2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md mb-6"
            >
              <h2 className="text-2xl font-bold text-[#2B3B47] mb-6 flex items-center">
                <FiClock className="mr-2 text-amber-500" /> Pick a Time
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {times.map((time, index) => (
                  <motion.button
                    key={index}
                    type="button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`py-3 rounded-lg text-sm font-medium transition-all ${
                      selectedTime === time
                        ? "bg-amber-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
              {selectedTime && (
                <p className="text-center text-amber-600 font-medium mt-4">
                  Selected: {selectedTime}
                </p>
              )}
            </motion.div>
          )}

          {formStep === 3 && (
            <motion.div
              key="step3"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md mb-6"
            >
              <h2 className="text-2xl font-bold text-[#2B3B47] mb-6">
                Your Information
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="editingbyrks@gmail.com"
                      className="w-full border-2 border-gray-200 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full border-2 border-gray-200 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Questions
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3 top-4 text-gray-400" />
                    <textarea
                      rows={4}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Tell us about your needs and any specific questions..."
                      className="w-full border-2 border-gray-200 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <motion.button
            type="button"
            onClick={prevStep}
            disabled={formStep === 1}
            className={`flex items-center px-6 py-3 rounded-full border ${
              formStep === 1
                ? "border-gray-300 text-gray-400 cursor-not-allowed"
                : "border-amber-500 text-amber-500 hover:bg-amber-50"
            }`}
            whileHover={formStep === 1 ? {} : { scale: 1.03 }}
            whileTap={formStep === 1 ? {} : { scale: 0.98 }}
          >
            <BsArrowLeft className="mr-2" /> Back
          </motion.button>

          {formStep < 3 ? (
            <motion.button
              type="button"
              onClick={nextStep}
              disabled={
                (!selectedDate && formStep === 1) ||
                (!selectedTime && formStep === 2)
              }
              className={`px-8 py-3 rounded-full ${
                (!selectedDate && formStep === 1) ||
                (!selectedTime && formStep === 2)
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-amber-500 text-white hover:bg-amber-600"
              }`}
              whileHover={
                (!selectedDate && formStep === 1) ||
                (!selectedTime && formStep === 2)
                  ? {}
                  : { scale: 1.03 }
              }
              whileTap={
                (!selectedDate && formStep === 1) ||
                (!selectedTime && formStep === 2)
                  ? {}
                  : { scale: 0.98 }
              }
            >
              Next Step
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              disabled={loading}
              className={`px-8 py-3 rounded-full bg-amber-500 text-white hover:bg-amber-600 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
              whileHover={loading ? {} : { scale: 1.03 }}
              whileTap={loading ? {} : { scale: 0.98 }}
            >
              {loading ? "Booking..." : "Confirm Appointment"}
            </motion.button>
          )}
        </div>
      </form>

      {/* Success/Error Messages */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Appointment booked successfully! Check your email for details.
          </motion.div>
        )}
        
        {showError && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            {error || "Please fill all required fields"}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AppointmentForm;