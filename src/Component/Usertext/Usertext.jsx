import React, { useState, useEffect, useContext } from "react";
import Usericon from "../../Images/UserIcon.png";
import AiResponse from "../AI_Response/Ai_Response";
import { run } from "../../OpenAI/OpenAi";
import Context from "../../Context/Store";

const Usertext = (props) => {
  const context = useContext(Context);
  const [response, Setres] = useState({});
  const getres = async () => {
    const res = await run(props.user.data);
    const ai = {
      type: "ai",
      data: res,
      time: new Date().toLocaleTimeString(),
    };
    Setres(ai);
    context.Setloader(false);
  };

  useEffect(() => {
    getres();
  }, []);

  return (
    <>
      <div className="flex items-start gap-2.5 pb-5 ">
        <img className="w-8 h-8 rounded-full" src={Usericon} alt="User image" />
        <div className="flex flex-col gap-1 w-full max-w-[600px] text-white">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold  dark:text-white">You</span>
          </div>
          <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
            {props.user.time}
          </span>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-[#1E1F20] rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <p className="text-sm font-normal ">{props.user.data}</p>
          </div>
        </div>
      </div>
      <AiResponse user={response} />
    </>
  );
};

export default Usertext;
