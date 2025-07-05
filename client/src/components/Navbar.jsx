import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.svg";
import college from "../assets/college.svg";

const Navbar = () => {
  const [activeProgram, setActiveProgram] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const programs = [
    { label: "College", href: "/college" },
    { label: "Graduate", href: "/graduate" },
    { label: "MBA", href: "/mba" },
    { label: "Medical", href: "/medical" },
  ];

  const navLinks = [
    { label: "Pricing", href: "/pricing" },
    { label: "Samples", href: "/samples" },
    { label: "About", href: "/about" },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const programUnderline = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: -0 }}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="w-full z-50 bg-white/50 backdrop-blur-md shadow-sm"
    >
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo with subtle animation */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} className="h-12 w-auto" alt="RK Editing" />
              <span className="text-5xl font-bold text-[#0D274A]">RK Editing</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.href}
                  className="text-gray-600 hover:text-[#0D274A] transition-colors font-medium relative"
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5A000]"
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/submit"
                className="bg-gradient-to-r from-[#DC8931] to-[#f0b733] hover:from-[#DC8931] hover:to-[#E5A000] text-white px-5 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
              >
                Submit Essay
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2  -mr-2 rounded-md text-gray-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-white  border-t border-gray-200 overflow-hidden"
          >
            <motion.div className="pt-2 pb-4 space-y-1 px-4">
              {navLinks.map((link) => (
                <motion.div key={link.label} variants={menuItemVariants}>
                  <Link
                    to={link.href}
                    className="block px-3 py-3 rounded-md text-gray-700 hover:bg-gray-50 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants}>
                <Link
                  to="/submit"
                  className="block px-3 py-3 rounded-md bg-gradient-to-r from-[#E5A000] to-[#f0b733] text-white font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Submit Essay
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Program Navigation */}
      <div className="bg-white overflow-hidden pt-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="relative px-6 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={program.href}
                  className={`flex items-center font-medium whitespace-nowrap ${
                    activeProgram === index
                      ? "text-[#0D274A]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveProgram(index)}
                >
                  <img src={college} className="w-4 h-4 mr-2" alt="" />
                  {program.label}
                </Link>
                {activeProgram === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-[#E5A000]"
                    initial="hidden"
                    animate="visible"
                    variants={programUnderline}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;