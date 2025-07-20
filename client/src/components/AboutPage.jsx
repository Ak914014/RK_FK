import { motion } from "framer-motion";
import meet_img from "../assets/img/meet_img.png";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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

  return (
    <motion.section 
      className="bg-[#FFFCF3] px-6 mb-20 mt-10 sm:px-12 lg:px-20 rounded-3xl py-8 md:py-12 flex flex-col md:flex-row gap-8 md:gap-10 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Text Content */}
      <motion.div 
        className="w-full md:w-1/2"
        variants={containerVariants}
      >
        <motion.h3 
          className="text-3xl sm:text-4xl font-semibold mb-4 md:mb-6"
          variants={itemVariants}
        >
          Meet the Face Behind RK Editing
        </motion.h3>
        
        <motion.p 
          className="text-base sm:text-lg text-[#828282] mb-6 md:mb-8"
          variants={itemVariants}
        >
          Meet Rubina, a passionate college admissions expert with a marketing
          degree and a sharp eye for storytelling. With her unique motto, "I
          market people on paper", she's been transforming student journeys
          into powerful essays that open doors to dream colleges. Whether it's
          crafting compelling narratives or highlighting overlooked
          achievements, Rubina knows how to make every word count.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link
            to="/appointmentForm"
            className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-100/50"
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
        className="w-full md:w-1/2 flex justify-center"
        variants={imageVariants}
      >
        <motion.img 
          src={meet_img} 
          alt="Rubina" 
          className="w-full max-w-sm rounded-xl shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default AboutPage;