import { motion } from 'framer-motion';
import { GrEdit } from "react-icons/gr";
import { MdOutlineQuestionMark } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { LuHardDriveDownload } from "react-icons/lu";
import { PiTextBBold, PiUpload } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

import services from "../assets/json/services.json"; 
import workflow from "../assets/json/workflow.json"; 
// Create icon mapping objects
const serviceIcons = {
  GrEdit,
  MdOutlineQuestionMark,
  IoSearchOutline,
  PiTextBBold
};

const workflowIcons = {
  PiUpload,
  CiEdit,
  LuHardDriveDownload,
  FiPhoneCall
};

const ServicesSection = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const cardHover = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(225, 160, 0, 0.25)",
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const getServiceIcon = (iconName) => {
    const Icon = serviceIcons[iconName];
    return Icon ? <Icon className="text-3xl" /> : null;
  };

  const getWorkflowIcon = (iconName) => {
    const Icon = workflowIcons[iconName];
    return Icon ? <Icon className="text-3xl" /> : null;
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D274A] to-[#1A365D] -z-10"></div>
      
      {/* Floating circles */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#E5A000]/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#E5A000]/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 md:px-12 lg:px-16 xl:px-8">
        {/* Services Section */}
        <motion.div 
          className="mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.div className="mb-16" variants={item}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5A000] to-amber-200">
                Our Services
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E5A000] to-transparent mb-6"></div>
            <p className="text-xl text-white/80 max-w-3xl">
              Premium editing solutions crafted to elevate your academic applications
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={container}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl overflow-hidden relative"
                variants={item}
                whileHover="hover"
                // variants={cardHover}
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#E5A000]/10 blur-md"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#E5A000] to-amber-300 text-white">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Workflow Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.div className="mb-16" variants={item}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5A000] to-amber-200">
                Our Process
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E5A000] to-transparent mb-6"></div>
            <p className="text-xl text-white/80 max-w-3xl">
              A seamless journey from submission to polished perfection
            </p>
          </motion.div>

          <motion.div 
            className="relative"
            variants={container}
          >
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E5A000]/30 to-transparent"></div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {workflow.map((process, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl relative z-10"
                  variants={item}
                  whileHover="hover"
                  // variants={cardHover}
                >
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#E5A000] hidden lg:flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#E5A000] to-amber-300 text-white">
                    {getWorkflowIcon(process.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                  <p className="text-white/70">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;