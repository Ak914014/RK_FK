import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.png";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <div className="relative overflow-hidden bg-white">
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
        {/* Text Content - Left Side */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            With <span className="text-amber-600">Expert Editing</span> and{" "}
            <span className="text-amber-600">Proofreading Services</span>{" "}
            Elevate Your Personal Statement
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            RuB's Editing's mission is to help you present the best version of yourself on paper. 
            With years of experience in college admission essay editing, we shape essays that 
            highlight your strengths while maintaining your authentic voice.
          </p>
          
          
          <Link
          to="/appointmentForm"
           className="mt-6 bg-amber-600 items-center gap-2 flex w-1/2 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-100">
            <span className="text-2xl"><IoCallOutline/></span>  Free 30-minute Consultation Call
          </Link>
        </div>

       <div className="w-1/2 flex relative justify-center">
        <img
          src={img1}
          alt="consulting girl"
          className="h-90 w-80 relative rounded-4xl"
        />
        <div className="flex flex-col gap-4 px-2 justify-around">
          <img src={img2} alt="consulting girl" className="h-24 rounded-3xl" />
          <img src={img4} alt="consulting girl" className="h-34 rounded-3xl" />
          <img src={img3} alt="consulting girl" className="h-40 z-1000 rounded-full" />
        </div>
        <div className="bg-[#DC8931] absolute left-20 rounded-full bottom-3 h-30 w-30">
          <div className="py-6 text-sm px-4 text-center text-white">
            More than just an editing app
          </div>
        </div>
        <div className="pl-4 py-3 absolute bottom-10 left-50 w-[15vw] z-100 bg-white rounded-4xl">
          <p className="font-bold">More than 100+ students</p>
          <p className="text-[12px] font-semibold">
            Got into their dream university
          </p>
        </div>
        </div>
        
      </div>
    </section>
  </div>
);

export default HeroSection;