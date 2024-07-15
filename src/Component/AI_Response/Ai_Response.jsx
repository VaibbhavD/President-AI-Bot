import React, { useContext, useEffect, useState } from "react";
import Loader from "./loader/Loader";
import UsFlag from "../../Images/Usicon.png";

const Chatgpt_res = (props) => {
  const [displayedText, setDisplayedText] = useState("");

  return (
    <>
      <div className="flex items-start gap-2.5 pb-5">
        <img
          src={UsFlag}
          width={30}
          className={`${!displayedText && "animate-spin-medium"}`}
        />
        <div className="flex flex-col gap-1 w-full max-w-[600px]">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-md font-semibold  text-pink-400">Gemini</span>
            <span className="text-xs font-normal text-gray-500 ">
              {/* time of message */}
            </span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200  rounded-e-xl rounded-es-xl ">
            <p className="text-sm font-normal text-white">
              {!displayedText && <Loader />}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chatgpt_res;
