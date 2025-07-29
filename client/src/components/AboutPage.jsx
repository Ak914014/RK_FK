import { motion } from "framer-motion";
import meet_img from "../assets/img/meet_img.png";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const AboutPage = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "anticipate"
      }
    }
  };

  const benefits = [
    "Polishing the writing style",
    "Ensuring relevance and focus",
    "Improving the structure",
    "Enhancing clarity and flow",
    "Maintaining authentic voice",
    "Meeting word count requirements"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.section 
        className="bg-[#FFFCF3] px-6 sm:px-8 lg:px-12 rounded-3xl py-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center shadow-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Text Content */}
        <motion.div 
          className="w-full lg:w-1/2"
          variants={containerVariants}
        >
          <motion.h3 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
            variants={itemVariants}
          >
            Meet <span className="text-amber-600">Rubina</span>, The Expert Behind RK Editing
          </motion.h3>
          
          <motion.div 
            className="prose prose-lg text-gray-600 mb-8"
            variants={itemVariants}
          >
            <p className="mb-4">
              A passionate expert with a degree in marketing management and a sharp eye for storytelling, 
              Rubina takes pride in her meticulous editing skills and attention to detail. With her unique 
              motto <span className="font-semibold text-amber-600">"I market people on paper"</span>, she has 
              been transforming students' journeys into powerful essays for <span className="font-bold">26 years</span>.
            </p>
            
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 mb-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Why Choose RK Editing?</h4>
              <p className="mb-3">
                An editor plays a critical role in refining personal statements to make them polished, 
                engaging, and persuasive. Beyond grammar and syntax, we focus on core elements that make 
                your essay stand out.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Editing Process Includes:</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <FaCheck className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <p className="text-gray-700">
              Essentially, we help refine, enhance, and optimize your essay to stand out in competitive 
              application pools while maintaining your authentic voice.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-8"
          >
            <Link
              to="/appointmentForm"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoCallOutline className="text-xl" />
              Free 30-minute Consultation Call
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          variants={imageVariants}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img 
              src={meet_img} 
              alt="Rubina" 
              className="w-full max-w-md rounded-xl shadow-xl border-4 border-white"
            />
            {/* <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-lg shadow-lg">
              <span className="font-bold">26+ Years Experience</span>
            </div> */}
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPage;