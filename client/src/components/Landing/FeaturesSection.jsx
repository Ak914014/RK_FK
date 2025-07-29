import { motion } from "framer-motion";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import highlights from "../../assets/json/highlights.json";

const FeaturesSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
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
    <section className="px-6 sm:px-12 lg:px-20 py-16 bg-white">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={item} className="mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            Why Choose <span className="text-amber-600">RK Editing?</span>
          </h3>
          <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Our Commitment to Excellence
          </h4>
          <p className="text-base text-gray-600 max-w-2xl">
            We are dedicated to providing top-tier essay editing services that
            meet the highest academic standards. Our editors are experts in
            various fields, ensuring your essay receives specialized attention.
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={container}
        >
          {highlights.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
              className="bg-[#FFFAF0] border border-amber-200 p-6 rounded-xl transition-all hover:border-amber-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="text-amber-600 text-xl"
                >
                  {feature.icon || "✍️"}
                </motion.div>
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
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
    </section>
  );
};

export default FeaturesSection;