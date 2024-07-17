import { useContext, useState } from "react";
import Context from "../../Context/Store";
import UsFlag from "../../Images/Usicon.png";

const Sidebar = () => {
  const [active, setActive] = useState(true);
  const context = useContext(Context);

  function openSidebar() {
    setActive((prev) => !prev);
  }

  const ClearHandler = () => {
    context.clearFun();
  };

  return (
    <>
      <body class="bg-blue-700 hidden lg:block ">
        <div
          class={
            active
              ? "sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-[#0A3161]"
              : "hidden"
          }
        >
          <div class="text-gray-100 text-xl ">
            <div class="p-2.5 mt-1 flex items-center gap-2">
              <img src={UsFlag} width={40} />
              <span className="text-[#B31942] font-bold text-3xl">
                AI Biden
              </span>
              <i
                class="bi bi-x cursor-pointer ml-28 lg:hidden "
                onClick={openSidebar}
              ></i>
            </div>
            <div class="my-2 bg-gray-600 h-[1px]"></div>
          </div>

          <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  text-white">
            <i class="bi bi-house-door-fill"></i>
            <span class="text-[15px] ml-4 font-bold">Home</span>
          </div>
          <div
            class="p-2.5 mt-3 flex items-center justify-between rounded-md px-4 duration-300 cursor-pointer text-white "
            onClick={ClearHandler}
          >
            <span class="text-[15px] ml-4 font-bold">New Chat</span>
            <i className="text-2xl font-bold text-center">+</i>
          </div>
        </div>
      </body>
    </>
  );
};
export default Sidebar;
