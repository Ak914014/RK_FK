import img from "../assets/img.svg";

const ServicesSection = () => (
  <div className="w-full rounded-4xl bg-[#0D274A] px-20 py-6">
    <div className="text-white py-4 font-bold text-4xl">Our Services</div>
    <div className="text-white pb-2 font-bold text-3xl">
      Comprehensive Editing Solutions
    </div>
    <div className="text-white w-2/3 pb-4 text-lg">
      We offer a range of editing services tailored to your specific needs,
      from proofreading to in-depth content review.
    </div>
    <div className="grid md:grid-cols-4 gap-6">
      {[
        {
          title: "Expert Editing",
          description:
            "Our team comprises experienced editors with advanced degrees in diverse academic disciplines.",
        },
        {
          title: "Unique Brainstorming",
          description:
            "We Brainstorm and come up with different ideas tailored for that student",
        },
        {
          title: "Fast Turnaround",
          description:
            "We offer quick turnaround times to meet your deadlines without compromising quality.",
        },
        {
          title: "Confidentiality",
          description:
            "Your privacy is our priority. We ensure complete confidentiality of your documents.",
        },
      ].map((service, idx) => (
        <div
          key={idx}
          className="bg-[#FFFAF0] border-[#E5A000] px-4 py-6 border rounded-xl"
        >
          <h4 className="font-bold text-sm mb-2 text-[#171412]">
            <img src={img} alt="" />
          </h4>
          <h4 className="font-bold text-sm mb-2 text-[#171412]">
            {service.title}
          </h4>
          <p className="text-xs tracking-wider text-gray-600">
            {service.description}
          </p>
        </div>
      ))}
    </div>
    <div className="text-white py-10 font-bold text-4xl">
      Our Editing Process
    </div>
    <div className="grid md:grid-cols-4 pb-2 gap-6">
      {[
        {
          title: "Expert Editing",
          description:
            "Our team comprises experienced editors with advanced degrees in diverse academic disciplines.",
        },
        {
          title: "Unique Brainstorming",
          description:
            "We Brainstorm and come up with different ideas tailored for that student",
        },
        {
          title: "Fast Turnaround",
          description:
            "We offer quick turnaround times to meet your deadlines without compromising quality.",
        },
        {
          title: "Confidentiality",
          description:
            "Your privacy is our priority. We ensure complete confidentiality of your documents.",
        },
      ].map((process, idx) => (
        <div
          key={idx}
          className="bg-[#FFFAF0] border-[#E5A000] px-4 py-6 border rounded-xl"
        >
          <h4 className="font-bold text-sm mb-2 text-[#171412]">
            <img src={img} alt="" />
          </h4>
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
);

export default ServicesSection;