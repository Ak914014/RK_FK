import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const TestimonialsSection = () => (
  <div className="py-20 px-20">
    <div className="text-3xl pb-10 font-bold">What Our Clients Say</div>
    <div className="flex justify-between pb-2">
      {Array(3).fill().map((_, idx) => (
        <div
          key={idx}
          className="border-[#e6e6e6] px-14 py-6 border rounded-xl"
        >
          <h4 className="font-semibold text-xl mb-8 text-[#171412]">
            “A terrific piece of praise”
          </h4>
          <div className="flex gap-2 items-center">
            <div className="bg-red-600 rounded-full h-10 w-10"></div>
            <div className="text-sm">
              <p>Name</p>
              <p>Description</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex pt-10 justify-between pb-2">
      {Array(3).fill().map((_, idx) => (
        <div
          key={idx}
          className="border-[#e6e6e6] px-14 py-6 border rounded-xl"
        >
          <h4 className="font-semibold text-xl mb-8 text-[#171412]">
            “A terrific piece of praise”
          </h4>
          <div className="flex gap-2 items-center">
            <div className="bg-red-600 rounded-full h-10 w-10"></div>
            <div className="text-sm">
              <p>Name</p>
              <p>Description</p>
            </div>
          </div>
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
  </div>
);

export default TestimonialsSection;