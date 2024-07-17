import React from "react";

function Home() {
  return (
    <div className="h-full grid items-center justify-center text-white md:py-0 py-14 gap-10 ">
      <div className="grid gap-2 ">
        <h1 className="text-6xl font-bold text-[#B31942] ">Hello </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-[#0A3161]">
          How can I help you today?
        </h2>
      </div>
      <div className=" grid md:grid-cols-3 gap-5 text-center text-black 00 md:mb-14">
        <div className=" bg-stone-100 rounded-xl p-1 md:p-3 border-2 border-stone-200">
          <h1 className="text-xl text-[#B31942] font-bold">AI Biden</h1>
          AI Biden project potential of AI to enhance public speaking by
          providing more coherent and effective responses.
        </div>

        <div className=" bg-stone-100 rounded-xl p-1 md:p-3 border-2 border-stone-200">
          <h1 className="text-xl text-[#B31942] font-bold">Chat Bot</h1>
          AI Biden is advanced AI model for answers elivered through video with
          President Biden's cloned voice..
        </div>

        <div className=" bg-stone-100 rounded-xl p-1 md:p-3 border-2 border-stone-200">
          <h1 className="text-xl text-[#B31942] font-bold">President AI</h1>
          Ai Biden response providing high-quality video responses and accurate
          lip-syncin
        </div>
      </div>
    </div>
  );
}

export default Home;
