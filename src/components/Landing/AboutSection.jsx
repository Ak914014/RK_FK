import meet_img from "../../assets/img/meet_img.png";

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
      <button className="bg-orange-500 text-white px-6 py-2 rounded-4xl text-sm hover:bg-orange-600">
        📞 Free 30-minute Consultation Call
      </button>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <img src={meet_img} alt="Rubina" className="w-80 rounded-xl" />
    </div>
  </section>
);

export default AboutSection;