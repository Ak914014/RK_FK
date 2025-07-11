import img from "../../assets/img.svg";
import highlights from "../../assets/json/highlights.json"; 
import services from "../../assets/json/services.json"; 
import workflow from "../../assets/json/workflow.json"; 

import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const FeaturesSection = () => (
  <section className="px-20 py-12">
    <h3 className="text-3xl text-[#171412] font-semibold mb-6">
      Why Choose RK Editing?
    </h3>
    <h3 className="text-2xl text-[#171412] font-bold mb-6">
      Our Commitment to Excellence
    </h3>
    <p className="text-sm text-[#171412] mb-10 max-w-xl">
      We are dedicated to providing top-tier essay editing services that
      meet the highest academic standards. Our editors are experts in
      various fields, ensuring your essay receives specialized attention.
    </p>
    <div className="grid md:grid-cols-4 gap-6">
      {highlights.map((feature, idx) => (
        <div
          key={idx}
          className="bg-[#FFFAF0] border-[#E5A000] px-4 py-6 border rounded-xl"
        >
          <h4 className="font-bold text-sm mb-2 text-[#171412]">
            <img src={img} alt="" />
          </h4>
          <h4 className="font-bold text-sm mb-2 text-[#171412]">
            {feature.title}
          </h4>
          <p className="text-xs tracking-wider text-gray-600">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
    <div className="w-full flex py-10 justify-center">
           <Link
          to="/appointmentForm"
           className="mt-6 bg-amber-600 items-center gap-2 flex w-1/ hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-200">
            <span className="text-2xl"><IoCallOutline/></span>  Free 30-minute Consultation Call
          </Link>
    </div>
  </section>
);

export default FeaturesSection;