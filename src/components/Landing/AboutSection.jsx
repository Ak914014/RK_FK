import meet_img from "../../assets/img/meet_img.png";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AboutSection = () => (
  <section className="bg-[#FFFCF3] px-20 rounded-4xl py-4 flex flex-col md:flex-row gap-10 items-center">
    <div className="w-1/2">
      <h3 className="text-4xl font-semibold mb-3">
        Meet the Face Behind RK Editing
      </h3>
      <p className="text-lg text-[#828282] mb-4">
        Meet Rubina, a passionate college admissions expert with a marketing
        degree and a sharp eye for storytelling. With her unique motto, "I
        market people on paper", she's been transforming student journeys
        into powerful essays that open doors to dream colleges. Whether it's
        crafting compelling narratives or highlighting overlooked
        achievements, Rubina knows how to make every word count.
      </p>
       <Link
          to="/appointmentForm"
           className="mt-6 bg-amber-600 items-center gap-2 flex w-1/2 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-200">
            <span className="text-2xl"><IoCallOutline/></span>  Free 30-minute Consultation Call
          </Link>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <img src={meet_img} alt="Rubina" className="w-80 rounded-xl" />
    </div>
  </section>
);

export default AboutSection;