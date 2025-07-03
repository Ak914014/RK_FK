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
  const getServiceIcon = (iconName) => {
    const Icon = serviceIcons[iconName];
    return Icon ? <Icon className="text-2xl mb-2 text-[#E5A000]" /> : null;
  };

  const getWorkflowIcon = (iconName) => {
    const Icon = workflowIcons[iconName];
    return Icon ? <Icon className="text-2xl mb-2 text-[#E5A000]" /> : null;
  };

  return (
    <div className="w-full rounded-4xl bg-[#0D274A] px-20 py-6">
      {/* Services Section */}
      <div>
        <div className="text-white py-4 font-bold text-4xl">Our Services</div>
        <div className="text-white pb-2 font-bold text-3xl">
         
           Comprehensive Editing Solutions
        </div>
        <div className="text-white w-2/3 pb-4 text-lg">
          We offer a range of editing services tailored to your specific needs,
          from proofreading to in-depth content review.
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#FFFAF0] border-[#E5A000] px-4 py-6 border rounded-xl"
            >
              <div className="text-[#E5A000]">
                {getServiceIcon(service.icon)}
              </div>
              <h4 className="font-bold text-sm mb-2 text-[#171412]">
                {service.title}
              </h4>
              <p className="text-xs tracking-wider text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow Section */}
      <div>
        <div className="text-white py-10 font-bold text-4xl">
          Our Editing Process
        </div>
        <div className="grid md:grid-cols-4 pb-2 gap-6">
          {workflow.map((process, idx) => (
            <div
              key={idx}
              className="bg-[#FFFAF0] border-[#E5A000] px-4 py-6 border rounded-xl"
            >
              <div className="text-[#E5A000]">
                {getWorkflowIcon(process.icon)}
              </div>
              <h4 className="font-bold text-sm mb-2 text-[#171412]">
                {process.title}
              </h4>
              <p className="text-xs tracking-wider text-gray-600">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;