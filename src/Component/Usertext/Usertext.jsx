import React, { useState, useEffect, useContext } from "react";
import Usericon from "../../Images/UserIcon.png";
import AiResponse from "../AI_Response/Ai_Response";
import { Biden_Speech } from "../../OpenAI/BidenAI";
import Context from "../../Context/Store";

const Usertext = React.memo((props) => {
  const [response, setResponse] = useState({});
  const context = useContext(Context);

  useEffect(() => {
    const getResponse = async () => {
      try {
        const res = await Biden_Speech(props.user.data, context.ChangeStatus);
        console.log("Send Biden Speech");
        const ai = {
          type: "ai",
          data: res,
          time: new Date().toLocaleTimeString(),
        };
        setResponse(ai);
        context.Setloader(false);
      } catch (error) {
        console.error("Error fetching AI response:", error);
      }
    };

    getResponse();
  }, [props.user.data]);

  return (
    <>
      <div className="flex items-start gap-2.5 pb-5">
        <img className="w-8 h-8 rounded-full" src={Usericon} alt="User image" />
        <div className="flex flex-col gap-1 w-full max-w-[600px] text-black">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-md font-semibold">You</span>
          </div>
          <span className="text-[10px] font-normal text-black dark:text-gray-400">
            {props.user.time}
          </span>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-stone-100 rounded-e-xl rounded-es-xl ">
            <p className="text-sm font-normal">{props.user.data}</p>
          </div>
        </div>
      </div>
      {response && <AiResponse user={response} />}
    </>
  );
});

export default Usertext;
