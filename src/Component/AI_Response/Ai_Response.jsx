import React, { useContext, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import UsFlag from "../../Images/Usicon.png";
import Verify from "../../Images/Verified.png";
import Context from "../../Context/Store";

const AiResponse = (props) => {
  const [displayedText, setDisplayedText] = useState(props.user.data);
  const { status } = useContext(Context);

  useEffect(() => {
    if (props.user.type === "ai") {
      console.log(props.user.data.videoUrl);
      setDisplayedText(props.user.data.videoUrl);
    }
  }, [props.user.data, props.user.type]);

  return (
    <>
      <div className="flex items-start gap-2.5 pb-5">
        <img src={UsFlag} width={30} />
        <div className="flex flex-col gap-1 w-full max-w-[600px]">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-md font-bold text-[#B31942]">AI Biden </span>
            <span className="text-center text-[10px] font-bold pt-2 ">
              President of US
            </span>
            <img
              className="w-3 h-3 rounded-full"
              src={Verify}
              alt="User image"
            />
          </div>
          <span className="text-[10px] font-normal text-gray-500">
            {props.user.time}
          </span>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 rounded-e-xl text-white rounded-es-xl">
            {displayedText ? (
              <div>
                <p>AI BIDEN </p>
                {displayedText && (
                  <div>
                    {/* <p>Audio URL: {displayedText.videoUrl}</p> */}
                    <video width="400" height="240" controls>
                      <source src={displayedText} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-xs font-sans m-auto">
                <Loader />
                <p className="text-gray-900 pt-3">{status}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AiResponse;
