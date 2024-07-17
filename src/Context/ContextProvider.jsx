import React, { useState, useContext } from "react";
import Context from "./Store";

const ContextProvider = (props) => {
  const [messages, SetMessages] = useState([]);
  const [loading, Setloading] = useState(false);
  const [status, Setstatus] = useState("");

  const AddMesages = (messages) => {
    SetMessages((prev) => [...prev, messages]);
  };

  const ClearFun = () => {
    SetMessages([]);
  };

  const setloading = () => {
    Setloading((prev) => !prev);
  };

  const ChangeStatus = (input) => {
    Setstatus(input);
  };

  const context = {
    Messages: messages,
    AddMesages: AddMesages,
    loader: loading,
    Setloader: Setloading,
    clearFun: ClearFun,
    ChangeStatus: ChangeStatus,
    status: status,
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
export default ContextProvider;
