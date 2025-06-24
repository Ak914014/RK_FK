import img from "../../assets/img.svg";

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
      ].map((feature, idx) => (
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
      <button className="bg-orange-500 text-white px-6 py-2 rounded-4xl text-sm hover:bg-orange-600">
        📞 Free 30-minute Consultation Call
      </button>
    </div>
  </section>
);

export default FeaturesSection;