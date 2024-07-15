import React, { useState } from "react";
import Context from "./Store";

const ContextProvider = (props) => {
  const [messages, SetMessages] = useState([]);

  const AddMesages = (messages) => {
    SetMessages((prev) => [...prev, messages]);
  };

  const ClearFun = () => {
    SetMessages([]);
  };

  const context = {
    Messages: messages,
    AddMesages: AddMesages,
    clearFun: ClearFun,
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
export default ContextProvider;
