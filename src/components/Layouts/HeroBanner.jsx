import { motion } from "framer-motion";
import img4 from "../../assets/img/background.jpg";
import paper from "../../assets/img/paper.png";
import ServicesSection from "../ServicesSection";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const content = {
  "header": "College Application Essay Editing and Proofreading Services",
  "subheader": "Your essay's represent you. We will make sure you standout.",
  "sectionTitle": "Why Choose Us?",
  "topic": "College Application",
  "description": [
    "There are hundreds of candidates applying to the same college, so you should submit a competitive package of documents and edit your essay thoroughly.",
    "College essay editor from RK Editing knows how to get beyond your transcript and let the admission officer realize why you should be accepted over other qualified applicants. With editorial help, you'll show why you deserve a spot in next year's class."
  ]
};

const HeroBanner = () => {
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
    <div className="w-full pb-24 pt-2">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-auto rounded-4xl min-h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${img4})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute w-full inset-0 bg-gradient-to-r from-white/80 to-amber-50/80 z-0" />
        
        {/* Content */}
        <motion.div 
          className="relative flex flex-col text-[#374151] px-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mb-6 text-gray-900"
          >
            {content.header}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium text-gray-700 mb-8"
          >
            {content.subheader}
          </motion.p>
          
          {/* CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="mt-6"
          >
            <Link
              to="/appointmentForm"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-200/50"
            >
              <IoCallOutline className="text-2xl" />
              Free 30-minute Consultation Call
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Why Choose Us Section with animated background */}
      <motion.section 
        className="relative overflow-hidden py-16 px-6 md:py-20 md:px-12 lg:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full opacity-30 translate-x-1/2 -translate-y-1/2"
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
        
        <motion.div 
          className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tl from-amber-100 to-amber-50 rounded-full opacity-20 -translate-x-1/2 translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-600">
              {content.sectionTitle}
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="lg:w-1/2"
              variants={itemVariants}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                {content.topic}
              </h3>
              
              {content.description.map((paragraph, index) => (
                <motion.p 
                  key={index}
                  className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
                  variants={itemVariants}
                  custom={index}
                >
                  {paragraph}
                </motion.p>
              ))}
              
                <motion.div 
            variants={itemVariants}
            className="mt-6"
          >
            <Link
              to="/appointmentForm"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-200/50"
            >
              <IoCallOutline className="text-2xl" />
              Free 30-minute Consultation Call
            </Link>
          </motion.div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 flex justify-center"
              variants={itemVariants}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl transform rotate-2 z-0"
                  animate={{
                    rotate: [2, -1, 2],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img 
                  src={paper} 
                  className="relative z-10 max-h-[500px] object-contain rounded-lg shadow-xl" 
                  alt="Paper sample" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="pt-20">
        <ServicesSection />
      </div>
    </div>
  );
};

export default HeroBanner;