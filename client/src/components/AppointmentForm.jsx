import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { bookAppointment, resetBookingState } from '../Redux/slices/bookingSlice';
import img3 from '../assets/img/Legal.svg';

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('9:30');
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();
  const { loading, error, success, bookingDetails } = useSelector((state) => state.booking);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const years = Array.from({ length: 50 }, (_, i) => 2000 + i);
  const times = Array(9).fill('9:30');

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getStartDay = (month, year) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const daysInMonth = getDaysInMonth(month, year);
  const startDay = getStartDay(month, year);
  const daysArray = [...Array(startDay).fill(null), ...Array(daysInMonth).fill(null).map((_, i) => i + 1)];

  const handleSubmit = () => {
    if (!name || !email || !query || !selectedDate || !selectedTime) {
      alert('Please fill all fields and select a date and time.');
      return;
    }

    const bookingData = {
      name,
      email,
      query,
      year,
      month: months[month],
      time: selectedTime,
    };

    dispatch(bookAppointment(bookingData));
  };

  useEffect(() => {
    if (success) {
      alert('Booking confirmed! Check your email.');
      setEmail('');
      setName('');
      setQuery('');
      setSelectedDate(null);
      setSelectedTime('9:30');
      dispatch(resetBookingState());
    }
    if (error) {
      alert(`Error: ${error}`);
      dispatch(resetBookingState());
    }
  }, [success, error, dispatch]);

  return (
    <div className="min-h-screen bg-white px-4 py-10 flex flex-col items-center font-sans">
      <div className="bg-[#FFFAF0] w-full px-6 rounded-3xl flex justify-between items-center">
        <div>
          <h1 className="text-5xl mb-8 font-semibold text-[#2B3B47]">Hello, Let’s Talk!</h1>
          <p className="text-2xl mb-8 w-4/5 text-[#2B3B47] mt-2">
            Schedule a 30 min one-to-one Appointment to discuss which plan is best for you.
          </p>
          <div className="text-xl mt-2 flex items-center text-[#828282]">
            <BsFillInfoCircleFill className="text-2xl mr-2" />
            This is optional but highly recommended!
          </div>
        </div>
        <div className="hidden md:block">
          <img src={img3} alt="Legal" className="w-90 rounded-full object-contain" />
        </div>
      </div>

      <div className="w-full max-w-2xl mt-10">
        <h2 className="text-2xl font-bold text-[#2B3B47] mb-4">Choose a Date</h2>
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex gap-4 mb-4">
            <select
              value={month}
              onChange={(e) => setMonth(parseInt(e.target.value))}
              className="border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {months.map((name, idx) => (
                <option key={idx} value={idx}>{name}</option>
              ))}
            </select>
            <select
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              className="border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {years.map((yr) => (
                <option key={yr} value={yr}>{yr}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500 mb-2">
            {['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'].map((d, i) => (
              <div key={i} className="font-bold text-gray-700">{d}</div>
            ))}
            {daysArray.map((day, index) => (
              <div
                key={index}
                onClick={() => day && setSelectedDate(day)}
                className={`py-1.5 rounded-full cursor-pointer ${
                  selectedDate === day
                    ? 'bg-orange-500 text-white'
                    : day
                    ? 'hover:bg-orange-100'
                    : ''
                }`}
              >
                {day || ''}
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

      <div className="w-full max-w-2xl mt-10">
        <h2 className="text-2xl font-bold text-[#2B3B47] mb-4">Pick a time</h2>
        <div className="bg-white p-6 rounded-xl shadow grid grid-cols-3 sm:grid-cols-4 gap-4 text-sm">
          {times.map((time, index) => (
            <button
              key={index}
              className={`py-2 rounded-md ${
                selectedTime === time && index === 4
                  ? 'bg-orange-500 text-white'
                  : 'bg-orange-50 text-gray-800 hover:bg-orange-100'
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-2xl mt-10 space-y-6">
        <div>
          <label className="text-2xl font-bold text-[#2B3B47]">Enter Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="youremail@gmail.com"
            className="w-full border-2 border-orange-500 rounded-full px-6 py-3 mt-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="text-2xl font-bold text-[#2B3B47]">Enter Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane"
            className="w-full border-2 border-orange-500 rounded-full px-6 py-3 mt-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="text-2xl font-bold text-[#2B3B47]">Any Queries?</label>
          <textarea
            rows={5}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Hey, which plan is right for me?"
            className="w-full border-2 border-orange-500 rounded-2xl px-6 py-3 mt-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
          />
        </div>
        <div className="flex gap-6 justify-start">
          <button
            className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-100"
            onClick={() => {
              setEmail('');
              setName('');
              setQuery('');
              setSelectedDate(null);
              setSelectedTime('9:30');
            }}
          >
            Back
          </button>
          <button
            className={`bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;