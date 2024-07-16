import React from "react";
import Usericon from "../../Images/UserIcon.png";

const Usertext = (props) => {
  return (
    <>
      <div className="flex items-start gap-2.5 pb-5 ">
        <img className="w-8 h-8 rounded-full" src={Usericon} alt="User image" />
        <div className="flex flex-col gap-1 w-full max-w-[600px] text-white">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold  dark:text-white">You</span>
            <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
              {/* time */}
            </span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-[#1E1F20] rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <p className="text-sm font-normal ">{/* User text */}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Usertext;
