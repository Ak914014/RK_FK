import { motion } from "framer-motion";
import { IoCallOutline, IoTimeOutline } from "react-icons/io5";
import { FaEdit, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import img3 from "../assets/img/img3.png";
import { Link } from "react-router-dom";
import { useState } from "react";
// import PaymentWrapper from "./PaymentForm";

const Pricing = () => {
  
  const [selectedPlan, setSelectedPlan] = useState(null);
const [showPaymentForm, setShowPaymentForm] = useState(false);
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

  const pricingPlans = [
    {
      id: 1,
      title: "Brainstorming",
      price: "$49",
      turnaround: "48 hrs",
      icon: <FaLightbulb className="text-amber-500 text-2xl" />,
      description: "Perfect to get started and get ideas on how to shape the essay",
      details: "30–45 min brainstorming session and outline after a call what needs to be in your application.",
      pricingItems: [
        { label: "30–45 minutes meeting", price: "$49" }
      ]
    },
    {
      id: 2,
      title: "Proof Reading",
      price: "from $69",
      turnaround: "24/48 hrs",
      icon: <FaEdit className="text-amber-500 text-2xl" />,
      description: "Perfect for applicants with a near-final essay",
      details: "Our Expert will refine your work from typos and grammatical errors, providing you with minor constructive suggestions.",
      pricingItems: [
        { label: "0–600", price: "$69" },
        { label: "601–1200", price: "$89" },
        { label: "1201–1800", price: "$109" },
        { label: "1801–2400", price: "$129" },
        { label: "+2400", price: "+ $10 / 100 words" },
        { label: "24-hour rush", price: "+ $49" }
      ]
    },
    {
      id: 3,
      title: "Basic Plan",
      price: "from $99",
      turnaround: "24/48 hrs",
      icon: <FaCheckCircle className="text-amber-500 text-2xl" />,
      description: "Combines proofreading with an expert critique to help you strengthen your writing",
      details: "Our specialist will help improve your essay and give a detailed review of structure, content, and tone.",
      pricingItems: [
        { label: "0–600", price: "$99" },
        { label: "601–1200", price: "$139" },
        { label: "1201–1800", price: "$169" },
        { label: "1801–2400", price: "$199" },
        { label: "+2400", price: "+ $10 / 100 words" },
        { label: "24-hour rush", price: "+ $59" },
        { label: "Second Reading", price: "+50% of order price" }
      ]
    },
    {
      id: 4,
      title: "Combo Pack",
      price: "from $199",
      turnaround: "3/7 days",
      icon: <FaEdit className="text-amber-500 text-2xl" />,
      description: "In-depth editing of 3 essays by one editor",
      details: "Submit 3 documents in one order. The editor will polish all your docs and add suggestions on style and tone.",
      pricingItems: [
        { label: "1801–2400", price: "$199" },
        { label: "2401–3000", price: "$249" },
        { label: "3001–3600", price: "$339" },
        { label: "3601–4200", price: "$389" },
        { label: "4201–4800", price: "$439" },
        { label: "72-hour rush", price: "+$139" },
        { label: "Second Reading", price: "+50% of order price" }
      ]
    },
    {
      id: 5,
      title: "Medical Residency",
      price: "from $299",
      turnaround: "14 days",
      icon: <FaLightbulb className="text-amber-500 text-2xl" />,
      description: "Perfect for applicants applying for Medical Residency in US",
      details: "Includes Brainstorming + 1st Draft. Tailored for the unique needs of residency applications.",
      pricingItems: [
        { label: "0–600", price: "$299" },
        { label: "601–1200", price: "$329" },
        { label: "1201–1800", price: "$359" },
        { label: "1801–2400", price: "$389" },
        { label: "+2400", price: "+$10 per 100 words" },
        { label: "Brainstorming + 1st Draft", price: "Included" },
        { label: "Second Reading", price: "+50% of order price" }
      ]
    },
    {
      id: 6,
      title: "Elite Package",
      price: "from $499",
      turnaround: "14/21 days",
      icon: <FaCheckCircle className="text-amber-500 text-2xl" />,
      description: "Perfect for applicants who are just starting their application journey",
      details: "Most comprehensive option — from topic brainstorming to final drafts of 4 essays. Coaching included.",
      pricingItems: [
        { label: "0–2400", price: "$499" },
        { label: "2401–3400", price: "$599" },
        { label: "3401–4400", price: "$699" },
        { label: "+4401", price: "+$10 per 100 words" },
        { label: "Second + Third Reading", price: "Included" }
      ]
    }
  ];

  // Split plans into two groups
  const firstRowPlans = pricingPlans.slice(0, 3);
  const secondRowPlans = pricingPlans.slice(3);

  return (
    <div className="mb-20 px-4 sm:px-6 lg:px-8">
      {/* Pricing Plans Section */}
      <motion.section 
        className="bg-white py-16 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12"
        >
          Find the <span className="text-amber-600">Perfect Plan</span> for Your Needs
        </motion.h2>

        {/* First Row - Top 3 Plans */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 items-stretch max-w-6xl mx-auto mb-12">
          {firstRowPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-[#FFFAF0] rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 w-full lg:w-96 flex flex-col"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  {plan.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-amber-600 mb-2">{plan.title}</h3>
              <p className="text-center text-3xl font-bold text-gray-800 my-4">{plan.price}</p>
              <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
                <IoTimeOutline className="mr-1" />
                <span className="italic">Turnaround - {plan.turnaround}</span>
              </div>
              <p className="text-center text-gray-600 mb-4">{plan.description}</p>
              <p className="text-center text-gray-600 mb-6">{plan.details}</p>
              
              <div className="bg-amber-50 rounded-lg p-4 mb-6">
                <p className="text-center font-semibold text-gray-800 mb-2">Pricing</p>
                <ul className="space-y-2">
                  {plan.pricingItems.map((item, idx) => (
                    <li key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-semibold text-gray-800">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
             <motion.button
  className="mt-auto bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-full transition-colors"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => {
    setSelectedPlan(plan);
    setShowPaymentForm(true);
  }}
>
  Order now
</motion.button>
            </motion.div>
          ))}
        </div>

        {/* Second Row - Bottom 3 Plans */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 items-stretch max-w-6xl mx-auto">
          {secondRowPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-[#FFFAF0] rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 w-full lg:w-96 flex flex-col"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  {plan.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-amber-600 mb-2">{plan.title}</h3>
              <p className="text-center text-3xl font-bold text-gray-800 my-4">{plan.price}</p>
              <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
                <IoTimeOutline className="mr-1" />
                <span className="italic">Turnaround - {plan.turnaround}</span>
              </div>
              <p className="text-center text-gray-600 mb-4">{plan.description}</p>
              <p className="text-center text-gray-600 mb-6">{plan.details}</p>
              
              <div className="bg-amber-50 rounded-lg p-4 mb-6">
                <p className="text-center font-semibold text-gray-800 mb-2">Pricing</p>
                <ul className="space-y-2">
                  {plan.pricingItems.map((item, idx) => (
                    <li key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="font-semibold text-gray-800">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <motion.button
  className="mt-auto bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-full transition-colors"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => {
    setSelectedPlan(plan);
    setShowPaymentForm(true);
  }}
>
  Order now
</motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Consultation CTA Section */}
      <motion.section 
        className="bg-[#0B2C4A] text-white px-6 sm:px-12 lg:px-20 py-12 sm:py-16 rounded-3xl flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="lg:w-2/3">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Confused which plan is right for you?
          </motion.h2>
          
          <motion.div 
            className="space-y-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            <motion.p 
              className="text-xl sm:text-2xl font-semibold flex items-start"
              variants={itemVariants}
            >
              <FaCheckCircle className="text-amber-400 mt-1 mr-2 flex-shrink-0" />
              Our expert is here to help you find the perfect plan
            </motion.p>
            <motion.p 
              className="text-xl sm:text-2xl font-semibold flex items-start"
              variants={itemVariants}
            >
              <FaCheckCircle className="text-amber-400 mt-1 mr-2 flex-shrink-0" />
              We can even customize a plan specifically for you
            </motion.p>
            <motion.p 
              className="text-xl sm:text-2xl font-semibold flex items-start"
              variants={itemVariants}
            >
              <FaCheckCircle className="text-amber-400 mt-1 mr-2 flex-shrink-0" />
              Talk to our expert on a free 30-min consultation call
            </motion.p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-6">
            <Link
              to="/appointmentForm"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-md hover:shadow-amber-200/50"
            >
              <IoCallOutline className="text-2xl" />
              Free 30-minute Consultation Call
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="lg:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <img
            src={img3}
            alt="Consultation"
            className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-amber-400 shadow-lg"
          />
        </motion.div>
      </motion.section>

      {showPaymentForm && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg max-w-md w-full">
      <button 
        onClick={() => setShowPaymentForm(false)}
        className="float-right p-2 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
      {/* <PaymentWrapper 
        plan={selectedPlan}
        onSuccess={() => {
          setShowPaymentForm(false);
          // You might want to show a success message or redirect
        }}
      /> */}
    </div>
  </div>
)}
    </div>
  );
};

export default Pricing;