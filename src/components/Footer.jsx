import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import img3 from "../assets/img/img3.png";
import { Link } from "react-router-dom";
const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="font-sans">
      {/* Call to Action Section */}
      <motion.div 
        className="relative overflow-hidden bg-[#FFFAF0] py-16 px-6 md:py-20 md:px-12 lg:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Circle background */}
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-t from-[#e19d14] to-[#FFFAF0] rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 md:w-1/2"
            variants={itemVariants}
          >
            Let's Start the <span className="text-amber-600">Journey</span> Today!
          </motion.h2>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full md:w-1/2"
            variants={itemVariants}
          >
            <motion.button 
              className="bg-[#E17100] hover:bg-[#d45a07] text-white px-8 py-4 text-lg md:text-xl rounded-2xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              View Pricing
            </motion.button>
             <motion.div variants={itemVariants}>
          <Link
            to="/appointmentForm"
              className="bg-white hover:bg-gray-100 border border-gray-200 text-gray-800 px-8 py-4 text-lg md:text-xl rounded-2xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Consultation Call
              </Link>
        </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Content */}
      <motion.footer 
        className="bg-white px-6 md:px-16 lg:px-20 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            {/* Left section - Logo & Social Icons */}
            <motion.div 
              className="flex flex-col gap-6"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900">RK Editing</h2>
              <p className="text-gray-600 max-w-xs">
                Helping students craft compelling stories for college admissions.
              </p>
              <div className="flex gap-4 text-gray-600">
                <motion.a 
                  href="#" 
                  className="text-2xl hover:text-[#ED6308] transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <FaFacebook />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-2xl hover:text-[#ED6308] transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-2xl hover:text-[#ED6308] transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <FaYoutube />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-2xl hover:text-[#ED6308] transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <FaInstagram />
                </motion.a>
              </div>
            </motion.div>

            {/* Links Section */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-10 text-gray-700"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h3 className="font-bold text-lg mb-4 text-gray-900">About</h3>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} className="hover:text-[#ED6308] transition-colors cursor-pointer">Contact us</motion.li>
                  <motion.li whileHover={{ x: 5 }} className="hover:text-[#ED6308] transition-colors cursor-pointer">Testimonials</motion.li>
                  <motion.li whileHover={{ x: 5 }} className="hover:text-[#ED6308] transition-colors cursor-pointer">Terms & Conditions</motion.li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-bold text-lg mb-4 text-gray-900">Services</h3>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} className="hover:text-[#ED6308] transition-colors cursor-pointer">College</motion.li>
                  <motion.li whileHover={{ x: 5 }} className="hover:text-[#ED6308] transition-colors cursor-pointer">Graduate</motion.li>
                  <motion.li whileHover={{ x: 5 }} className="hover:text-[#ED6308] transition-colors cursor-pointer">MBA</motion.li>
                  <motion.li whileHover={{ x: 5 }} className="hover:text-[#ED6308] transition-colors cursor-pointer">Medical</motion.li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-bold text-lg mb-4 text-gray-900">Resources</h3>
                <ul className="space-y-3">
                  <motion.li whileHover={{ x: 5 }} className="hover:text-[#ED6308] transition-colors cursor-pointer">Samples</motion.li>
                  <motion.li whileHover={{ x: 5 }} className="hover:text-[#ED6308] transition-colors cursor-pointer">Free Consultation</motion.li>
                  <motion.li whileHover={{ x: 5 }} className="hover:text-[#ED6308] transition-colors cursor-pointer">Submit Essay</motion.li>
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Disclaimer */}
          <motion.div 
            className="bg-gray-50 mt-12 p-6 md:p-8 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-gray-100"
            variants={itemVariants}
          >
            <div className="md:w-3/4">
              <h4 className="font-bold text-lg mb-2 text-gray-900">Disclaimer</h4>
              <p className="text-gray-700">
                RK Editing is 100% legal service. We do NOT write essays for you.
                Instead, we provide editing and proofreading services to improve
                your original essay. We do not guarantee admissions.
              </p>
            </div>
            <motion.img
              src={img3}
              alt="Legal badge"
              className="h-20 w-20 rounded-full border-4 border-white shadow-md"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-center text-gray-500 mt-10 pt-6 border-t border-gray-100"
            variants={itemVariants}
          >
            © {new Date().getFullYear()} RK Editing. All rights reserved.
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;