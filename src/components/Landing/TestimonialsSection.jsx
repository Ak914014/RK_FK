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
      <button className="bg-orange-500 text-white px-6 py-2 rounded-4xl text-sm hover:bg-orange-600">
        📞 Free 30-minute Consultation Call
      </button>
    </div>
  </div>
);

export default TestimonialsSection;