import { motion } from "framer-motion";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/Legal.svg";
import img4 from "../../assets/img/img4.png";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const floatingVariants = {
    float: {
      y: [-5, 5],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Text Content - Left Side */}
          <motion.div 
            className="lg:w-1/2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                With <span className="text-amber-600">Expert Editing</span> and{" "}
                <span className="text-amber-600">Proofreading Services</span>{" "}
                Elevate Your Personal Statement
              </h1>
              
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed mt-6 max-w-2xl"
                variants={itemVariants}
              >
                RuB's Editing's mission is to help you present the best version of yourself on paper. 
                With years of experience in college admission essay editing, we shape essays that 
                highlight your strengths while maintaining your authentic voice.
              </motion.p>
              
              <motion.div variants={itemVariants}>
                <Link
                  to="/appointmentForm"
                  className="mt-8 inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-100/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoCallOutline className="text-xl" />
                  Free 30-minute Consultation Call
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Image Gallery - Right Side */}
          <motion.div 
            className="lg:w-1/2  flex relative justify-center"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <motion.img
              src={img1}
              alt="consulting girl"
              className="h-90 w-80 relative rounded-2xl shadow-xl"
              variants={floatingVariants}
              animate="float"
            />
            
            <div className="flex flex-col gap-4 px-2 justify-around">
              <motion.img 
                src={img2} 
                alt="consulting" 
                className="h-24 rounded-2xl shadow-lg" 
                variants={floatingVariants}
                animate="float"
                style={{ originX: 0.5, originY: 0.5 }}
              />
              <motion.img 
                src={img4} 
                alt="consulting" 
                className="h-34 rounded-2xl shadow-lg" 
                variants={floatingVariants}
                animate="float"
                style={{ originX: 0.5, originY: 0.5 }}
              />
              <motion.img 
                src={img3} 
                alt="consulting" 
                className="h-40 z-10 rounded-full object-contain shadow-xl" 
                variants={floatingVariants}
                animate="float"
                style={{ originX: 0.5, originY: 0.5 }}
              />
            </div>
            
            <motion.div 
              className="bg-[#DC8931] absolute left-10 rounded-full bottom-3 h-30 w-30 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <div className="py-6 text-sm px-4 text-center text-white font-medium">
                More than just an editing app
              </div>
            </motion.div>
            
            <motion.div 
              className="pl-4 py-3 absolute bottom-10 left-44 w-[15vw] z-10 bg-white rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <p className="font-bold text-gray-800">More than 100+ students</p>
              <p className="text-xs font-semibold text-gray-600">
                Got into their dream university
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;