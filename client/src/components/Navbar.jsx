import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import college from "../assets/college.svg";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { label: "College", href: "/college" }, 
    { label: "Graduate", href: "/graduate" },
    { label: "MBA", href: "/mba" },
    { label: "Medical", href: "/medical" },
  ];

  return (
    <>
      <header className="flex py-4 px-4 justify-between w-full items-center">
        <Link to="/" className="flex gap-5 items-center">
          <img src={logo} className="w-10" alt="RK Editing Logo" />
          <h1 className="text-4xl font-semibold text-[#0D274A]">RK Editing</h1>
        </Link>
        <nav className="flex gap-10 font-semibold items-center">
          <Link to="/pricing" className="text-md hover:text-blue-700">
            Pricing
          </Link>
          <a href="#" className="text-md hover:text-blue-700">
            Samples
          </a>
          <a href="#" className="text-md hover:text-blue-700">
            About
          </a>
          <button className="bg-[#E5A000] text-black text-md px-4 py-2 rounded-3xl hover:bg-orange-600">
            Submit Essay
          </button>
        </nav>
      </header>
      <nav className="flex mx-20 0  text-[#6B7280] justify-around gap-4 items-center relative border-b-4 border-gray-300">
        {navItems.map((item, index) => (
          <div 
            key={index} 
            className={`nav-item py-8 flex gap-2 relative cursor-pointer`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={college} className="w-4" alt="College Icon" />
            <Link
              to={item.href}
              className={`text-md font-semibold ${activeIndex === index ? "text-black" : ""}`}
            >
              {item.label}
            </Link>
            <div
              className="underline absolute bottom-[-4px] -left-32 h-[4px] bg-black transition-transform duration-300 ease-in-out"
              style={{
                width: `${500 / 1}%`,
                transform: activeIndex === index ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "right",
              }}
            ></div>
          </div>
        ))}
      </nav>
    </>
  );
};

export default Navbar;