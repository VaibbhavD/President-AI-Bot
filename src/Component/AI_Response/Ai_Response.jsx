import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import UsFlag from "../../Images/Usicon.png";
import Verify from "../../Images/Verified.png";

const AiResponse = (props) => {
  const [displayedText, setDisplayedText] = useState(props.user.data);

  useEffect(() => {
    if (props.user.type === "ai") {
      setTimeout(() => {
        setDisplayedText(props.user.data);
      }, 1000);
    }
  }, [props.user.data, props.user.type]);

  return (
    <>
      <div className="flex items-start gap-2.5 pb-5">
        <img src={UsFlag} width={30} />
        <div className="flex flex-col gap-1 w-full max-w-[600px]">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-md font-bold text-pink-400">
              US President{" "}
            </span>
            <span className="text-center text-xs font-normal text-white">
              - Joe Biden
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
                <p>{displayedText.text}</p>
                {displayedText.id && (
                  <div>
                    <p>
                      Audio URL:{" "}
                      {`https://peregrine-results.s3.amazonaws.com/${displayedText.id}.mp3`}
                    </p>
                    <audio controls>
                      <source
                        src={`https://peregrine-results.s3.amazonaws.com/${displayedText.id}.mp3`}
                        type="audio/mpeg"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AiResponse;
