import React, { useContext, useEffect, useRef, useState } from "react";
import Usertext from "../Usertext/Usertext";
import UpArrow from "../../Images/up-arrow.png";
import Context from "../../Context/Store";
import Home from "../Home/Home";
import "../../App.css";

const Main = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const context = useContext(Context);
  const contentRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      type: "user",
      data: userInput,
      time: new Date().toLocaleTimeString(),
    };
    context.Setloader(true);
    setMessages([...messages, data]);
    setUserInput("");
  };

  const scrollToBottom = () => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-800 lg:ml-72 lg:pl-10 pb-4 bg-black">
      <nav className="w-full h-4 py-7 flex justify-between items-center font-semibold text-lg text-white">
        {/* <select className="border-none font-bolder text-md p-2 rounded-md bg-transparent">
          <option className="bg-black">GeminiAi 4.0</option>
          <option className="bg-black">Gemini</option>
        </select> */}
      </nav>
      <div
        className="flex flex-col flex-grow w-full max-w-2xl overflow-auto scrollbar-hide rounded-lg p-4 md:pt-4 pt-0"
        ref={contentRef}
      >
        {messages.length > 0 ? (
          messages.map((mess, index) => <Usertext key={index} user={mess} />)
        ) : (
          <Home />
        )}
      </div>
      <div className="w-full px-2">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl flex m-auto justify-center rounded-xl border-2 p-2 bg-[#1E1F20]"
        >
          <input
            className="flex items-center text-white h-4 w-full min-w-2xl rounded-xl p-4 text-md outline-none font-bolder bg-[#1E1F20]"
            type="text"
            placeholder="Type your message…"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-white rounded-full p-1"
            disabled={context.loader}
          >
            <img src={UpArrow} className="w-5 bg-white" alt="Send" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Main;
