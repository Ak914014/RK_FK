import img3 from "../assets/img/img3.png";
 const Pricing = () => {
  return (
    <div className=" mb-20 px-4">
        <section className="bg-white py-16 px-4">
  <h2 className="text-5xl  font-semibold text-center text-[#374151] mb-12">
    Find the plan that fits your needs
  </h2>

  <div className="flex flex-col md:flex-row justify-center mb-24 gap-8 items-stretch">
    {/* Brainstorming */}
    <div className="bg-[#FFFAF0] rounded-2xl shadow-xl p-6 w-full md:w-80 flex flex-col justify-between">
      <div>
        <h3 className="text-[#ED6308] text-3xl font-semibold text-center mb-2">Brainstorming</h3>
        <p className="text-center text-4xl font-bold text-[#374151] mt-4 mb-4">$49</p>
        <p className="text-sm text-center  italic text-[#000000] mb-4">⏱️ Turnaround - 48 hrs</p>
        <p className="text-sm text-[#6B7280] text-center mb-4">
      Perfect to get started and get ideas on how to shape the essay
        </p>
        <p className="text-sm text-[#6B7280] text-center mb-6">
          30–45 min brainstorming session and outline after a call what needs to be in your application.
        </p>
        <div className="text-sm text-gray-700">
          <p className="mb-1 text-center font-semibold">Pricing</p>
          <div className="flex justify-between">
            <span className='text-[#8F8A8A]'>30–45 minutes meeting</span>
            <span className='text-[#374151] font-semibold'>$49</span>
          </div>
        </div>
      </div>
      <button className="mt-6 bg-[#ED6308] text-white font-semibold py-2 rounded-full hover:bg-orange-600">
        Order now
      </button>
    </div>

    {/* Proof Reading */}
    <div className="bg-[#FFFAF0] rounded-2xl shadow-xl p-6 w-full md:w-80 flex flex-col justify-between">
      <div>
        <h3 className="text-[#ED6308] text-3xl font-semibold text-center mb-2">Proof Reading</h3>
        <p className="text-center text-4xl font-bold text-[#374151] mt-4 mb-4">from $69</p>
        <p className="text-sm text-center   italic text-[#000000] mb-4">⏱️ Turnaround - 24/48 hrs</p>
  <p className="text-sm text-[#6B7280] text-center mb-6">
          Perfect for applicants with a near-final essay.
        </p>
      <p className="text-sm text-[#6B7280] text-center mb-6">
          Our Expert will refine your work from typos and grammatical errors, providing you with minor constructive suggestions.
        </p>
        <div className="text-sm  text-gray-700">
          <p className="mb-1 flex  justify-center font-semibold">Pricing</p>

          <ul className="space-y-1">
            <li className="flex justify-between"><span  className='text-[#8F8A8A]'>0–600</span><span className='text-[#374151] font-semibold'>$69</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>601–1200</span><span className='text-[#374151] font-semibold'>$89</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>1201–1800</span><span className='text-[#374151] font-semibold'>$109</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>1801–2400</span><span className='text-[#374151] font-semibold'>$129</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>+2400</span><span className='text-[#374151] font-semibold'>+ $10 / 100 words</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>24-hour rush</span><span className='text-[#374151] font-semibold'>+ $49</span></li>
          </ul>
        </div>
      </div>
      <button className="mt-6 bg-orange-500 text-white font-semibold py-2 rounded-full hover:bg-orange-600">
        Order now
      </button>
    </div>

    {/* Basic Plan */}
    <div className="bg-[#FFFAF0] rounded-2xl shadow-xl p-6 w-full md:w-80 flex flex-col justify-between">
      <div>
        <h3 className="text-[#ED6308] text-3xl font-semibold text-center mb-2">Basic Plan</h3>
        <p className="text-center text-4xl font-bold text-[#374151] mt-4 mb-4">from $99</p>
        <p className="text-sm text-center   italic text-[#000000] mb-4">⏱️ Turnaround - 24/48 hrs</p>
    <p className="text-sm text-[#6B7280] text-center mb-4">
          Combines proofreading with an expert critique to help you strengthen your writing.
        </p>
  <p className="text-sm text-[#6B7280] text-center mb-6">
          Our specialist will help improve your essay and give a detailed review of structure, content, and tone.
        </p>
        <div className="text-sm text-gray-700">
          <p className="mb-1 flex  justify-center  font-semibold">Pricing</p>
          <ul className="space-y-1">
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>0–600</span><span className='text-[#374151] font-semibold'>$99</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>601–1200</span><span className='text-[#374151] font-semibold'>$139</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>1201–1800</span><span className='text-[#374151] font-semibold'>$169</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>1801–2400</span><span className='text-[#374151] font-semibold'>$199</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>+2400</span><span className='text-[#374151] font-semibold'>+ $10 / 100 words</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>24-hour rush</span><span className='text-[#374151] font-semibold'>+ $59</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>Second Reading</span><span className='text-[#374151] font-semibold'>+50% of order price</span></li>
          </ul>
        </div>
      </div>
      <button className="mt-6 bg-orange-500 text-white font-semibold py-2 rounded-full hover:bg-orange-600">
        Order now
      </button>
    </div>
  </div>
   <div className="flex flex-col md:flex-row justify-center gap-8 items-stretch">
    {/* Brainstorming */}
    <div className="bg-[#FFFAF0] rounded-2xl shadow-xl p-6 w-full md:w-80 flex flex-col justify-between">
      <div>
        <h3 className="text-[#ED6308] text-3xl font-semibold text-center mb-2">Brainstorming</h3>
        <p className="text-center text-4xl font-bold text-[#374151] mt-4 mb-4">$49</p>
        <p className="text-sm text-center  italic text-[#000000] mb-4">⏱️ Turnaround - 48 hrs</p>
        <p className="text-sm text-[#6B7280] text-center mb-4">
      Perfect to get started and get ideas on how to shape the essay
        </p>
        <p className="text-sm text-[#6B7280] text-center mb-6">
          30–45 min brainstorming session and outline after a call what needs to be in your application.
        </p>
        <div className="text-sm text-gray-700">
          <p className="mb-1 text-center font-semibold">Pricing</p>
          <div className="flex justify-between">
            <span className='text-[#8F8A8A]'>30–45 minutes meeting</span>
            <span className='text-[#374151] font-semibold'>$49</span>
          </div>
        </div>
      </div>
      <button className="mt-6 bg-[#ED6308] text-white font-semibold py-2 rounded-full hover:bg-orange-600">
        Order now
      </button>
    </div>

    {/* Proof Reading */}
    <div className="bg-[#FFFAF0] rounded-2xl shadow-xl p-6 w-full md:w-80 flex flex-col justify-between">
      <div>
        <h3 className="text-[#ED6308] text-3xl font-semibold text-center mb-2">Proof Reading</h3>
        <p className="text-center text-4xl font-bold text-[#374151] mt-4 mb-4">from $69</p>
        <p className="text-sm text-center   italic text-[#000000] mb-4">⏱️ Turnaround - 24/48 hrs</p>
  <p className="text-sm text-[#6B7280] text-center mb-6">
          Perfect for applicants with a near-final essay.
        </p>
      <p className="text-sm text-[#6B7280] text-center mb-6">
          Our Expert will refine your work from typos and grammatical errors, providing you with minor constructive suggestions.
        </p>
        <div className="text-sm  text-gray-700">
          <p className="mb-1 flex  justify-center font-semibold">Pricing</p>

          <ul className="space-y-1">
            <li className="flex justify-between"><span  className='text-[#8F8A8A]'>0–600</span><span className='text-[#374151] font-semibold'>$69</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>601–1200</span><span className='text-[#374151] font-semibold'>$89</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>1201–1800</span><span className='text-[#374151] font-semibold'>$109</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>1801–2400</span><span className='text-[#374151] font-semibold'>$129</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>+2400</span><span className='text-[#374151] font-semibold' >+ $10 / 100 words</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>24-hour rush</span><span className='text-[#374151] font-semibold'>+ $49</span></li>
          </ul>
        </div>
      </div>
      <button className="mt-6 bg-orange-500 text-white font-semibold py-2 rounded-full hover:bg-orange-600">
        Order now
      </button>
    </div>

    {/* Basic Plan */}
    <div className="bg-[#FFFAF0] rounded-2xl shadow-xl p-6 w-full md:w-80 flex flex-col justify-between">
      <div>
        <h3 className="text-[#ED6308] text-3xl font-semibold text-center mb-2">Basic Plan</h3>
        <p className="text-center text-4xl font-bold text-[#374151] mt-4 mb-4">from $99</p>
        <p className="text-sm text-center   italic text-[#000000] mb-4">⏱️ Turnaround - 24/48 hrs</p>
    <p className="text-sm text-[#6B7280] text-center mb-4">
          Combines proofreading with an expert critique to help you strengthen your writing.
        </p>
  <p className="text-sm text-[#6B7280] text-center mb-6">
          Our specialist will help improve your essay and give a detailed review of structure, content, and tone.
        </p>
        <div className="text-sm text-gray-700">
          <p className="mb-1 flex  justify-center  font-semibold">Pricing</p>
          <ul className="space-y-1">
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>0–600</span><span className='text-[#374151] font-semibold'>$99</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>601–1200</span><span className='text-[#374151] font-semibold'>$139</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>1201–1800</span><span className='text-[#374151] font-semibold'>$169</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>1801–2400</span><span className='text-[#374151] font-semibold'>$199</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>+2400</span><span className='text-[#374151] font-semibold'>+ $10 / 100 words</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>24-hour rush</span><span className='text-[#374151] font-semibold'>+ $59</span></li>
            <li className="flex justify-between"><span className='text-[#8F8A8A]'>Second Reading</span><span className='text-[#374151] font-semibold'>+50% of order price</span></li>
          </ul>
        </div>
      </div>
      <button className="mt-6 bg-orange-500 text-white font-semibold py-2 rounded-full hover:bg-orange-600">
        Order now
      </button>
    </div>
  </div>
</section>
<section className="bg-[#0B2C4A] text-white px-20 py-12 rounded-4xl flex  items-center ">
  {/* Left Content */}
  <div className="flex-1 w-3/4">
    <h2 className="text-5xl  font-semibold mb-6">
      Confused which plan is right for you?
    </h2>
    <p className="mb-6 w-2/3 font-semibold text-3xl">Our expert is here to help you find the perfect plan for you</p>
    <p className="mb-6  w-2/3 font-semibold text-3xl">
      A plan that fits your needs. We can even customise a plan for you.
    </p>
    <p className="mb-6  w-2/3 font-semibold text-3xl">
      Talk to our expert on the free 30-min consultation call.
    </p>

    <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-5 rounded-full flex items-center gap-2 text-sm">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l.4 2M7 5h14M9 20h6m-6 0a1 1 0 01-1-1v-6h8v6a1 1 0 01-1 1m-6 0H5a2 2 0 01-2-2V7h18v11a2 2 0 01-2 2h-4" />
      </svg>
      Free 30-minute Consultation Call
    </button>
  </div>

  {/* Right Image */}
  <div className="w-1/4">
    <img
      src={img3}
      alt=""
      className="w-70  rounded-full object-contain"
    />
  </div>
</section>

    </div>
  )
}

export default Pricing;