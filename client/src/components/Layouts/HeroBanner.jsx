import img4 from "../../assets/img/background.jpg";
import paper from "../../assets/img/paper.png";
import img from "../../assets/img/background.svg";
import ServicesSection from "../ServicesSection";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const HeroBanner = () => {
  return (
    <div className="w-full  pb-24 mt-15">
      {/* Hero Section (working correctly) */}
      <section
        className="relative w-full h-auto rounded-4xl min-h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${img4})` }}
      >
        {/* Overlay */}
        <div className="absolute w-full inset-0 bg-white/68 z-0" />
        {/* Content */}
        <div className="relative flex flex-col text-[#374151]">
          <h1 className="text-[5vw] leading-20 font-semibold mb-6">
            College Application Essay Editing and <br /> Proofreading Services
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#374151] mb-8">
            Your essays represent you. We will make sure you stand out.
          </p>
          {/* CTA Button */}
          <div className="mt-6">
            <Link
              to="/appointmentForm"
              className="mt-6 bg-amber-600 items-center gap-2 flex w-1/3 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-200"
            >
              <span className="text-2xl">
                <IoCallOutline />
              </span>{" "}
              Free 30-minute Consultation Call
            </Link>
          </div>
        </div>
      </section>

      <section className="relative w-full mb-100 h-[80vh] gap-20 flex items-center justify-center  bg-cover bg-center bg-no-repeat  px-6">
        <img
          src={img}
          alt=""
          className=" absolute w-full  bg-cover bg-center bg-no-repeat mt-56"
        />
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-white/30 z-0"></div>

        <div className="relative z-10 mt-80 max-w-6xl">
          <h2 className="text-3xl font-semibold  mb-12 text-[#ED6308]">
            Why Choose Us?
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-[3vw] font-semibold mb-4 text-[#000000]">
                College Application
              </h3>
              <p className="text-[1.5vw] mb-6 text-[#6B7280]">
                There are hundreds of candidates applying to the same college,
                so you should submit a competitive package of documents and edit
                your essay thoroughly.
              </p>
              <p className="text-[1.5vw] text-[#6B7280] mb-8">
                College essay editor from RK Editing knows how to get beyond
                your transcript and let the admission officer realize why you
                should be accepted over other qualified applicants. With
                editorial help, you’ll show why you deserve a spot in next
                year’s class.
              </p>
              <button className="bg-[#E5A000] hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-full text-lg transition-all duration-300">
                View Sample
              </button>
            </div>
            <div className="w-1/2">
              <div className=" ">
                <img src={paper} className="h-[90vh]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-20">
        <ServicesSection />
      </div>
    </div>
  );
};

export default HeroBanner;
