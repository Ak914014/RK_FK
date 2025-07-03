import img from "../../assets/img.svg";
import highlights from "../../assets/json/highlights.json"; 

const HighlightsSection = ({ highlights }) => (
  <div className="mb-12">
    <h4 className="text-xl font-bold mb-6">Our Highlights</h4>
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
  </div>
);

export default HighlightsSection;