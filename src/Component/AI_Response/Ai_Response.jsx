import React, { useContext, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import UsFlag from "../../Images/Usicon.png";
import Verify from "../../Images/Verified.png";

const AiResponse = (props) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (props.user.type === "ai") {
      let i = 0;
      let text = "";

      setDisplayedText(""); // Reset displayedText when a new bot message is received
      const typingEffect = () => {
        if (i < props.user.data.length) {
          text += props.user.data.charAt(i);
          setDisplayedText(text);
          i++;
          setTimeout(typingEffect, 10); // Adjust typing speed here
        }
      };
      typingEffect();
    } else {
      setDisplayedText(props.user.data);
    }
  }, [props.user.data, props.user.type]);

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
            <span className=" text-md font-bold  text-pink-400">
              US President{" "}
            </span>
            <span className=" text-center text-xs font-normal text-white">
              - Joe Biden
            </span>
            <img
              className="w-3 h-3 rounded-full"
              src={Verify}
              alt="User image"
            />
          </div>
          <span className="text-[10px] font-normal text-gray-500 ">
            {props.user.time}
          </span>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200  rounded-e-xl rounded-es-xl ">
            <p className="text-sm font-normal text-white">
              {displayedText && displayedText}
              {!displayedText && <Loader />}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AiResponse;
