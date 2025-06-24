import React from 'react'
import img3 from "../assets/img/img3.png";
const Footer = () => {
  return (
    <div>
           <div className="relative overflow-hidden bg-[#FFFAF0] py-12 px-6">
        {/* Circle background */}
        <div className="absolute top-0 left-0 w-56 h-56 bg-linear-to-t from-[#e19d14] to-[#FFFAF0] rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>

        {/* Main content */}
        <div className="flex flex-col  px-5 md:flex-row items-center justify-between gap-4 z-10 relative">
          <h2 className="text-5xl  w-2/5 font-semibold leading-14 text-black">
            Let’s Start the Journey Today!
          </h2>

          <div className="flex w-1/2 gap-4">
            <button className="bg-[#ED6308] text-white px-10 text-2xl py-4 rounded-3xl ">
              Pricing
            </button>
            <button className="bg-[#E6E6E6] text-black px-10 text-2xl py-4 rounded-3xl ">
              Get your Essay Evaluated
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-white px-6 md:px-16 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left section - Logo & Social Icons */}
          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold text-black">RK Editing</h2>
            <div className="flex gap-4 text-gray-600 text-xl">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-3 gap-10 text-sm text-gray-800">
            <div>
              <h3 className="font-semibold mb-2">About</h3>
              <ul className="space-y-1">
                <li>Contact us</li>
                <li>Testimonies</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <ul className="space-y-1">
                <li>College</li>
                <li>Graduate</li>
                <li>MBA</li>
                <li>Medical</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Pricing</h3>
              <ul className="space-y-1">
                <li>Samples</li>
                <li>Free 30 min consultation call</li>
                <li>Submit your Essay</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-100 mt-10 p-6 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h4 className="font-semibold mb-1">Disclaimer</h4>
            <p className="text-sm text-gray-700">
              RK Editing is 100% legal service. We do NOT write essays for you.
              Instead, we provide editing and proofreading services to improve
              your original essay. We do not guarantee admissions.
            </p>
          </div>
          {/* <img
      src="/path-to-legal-badge.png" // Replace this with actual path
      alt="100% Legal"
      className="w-16 h-16 object-contain" */}
          <img
            src={img3}
            alt="consulting girl"
            className="h-20 z-1000 rounded-full "
          />
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-6">
          © 2025 RK Editing. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer