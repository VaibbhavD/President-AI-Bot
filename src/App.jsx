import Sidebar from "./Component/Sidebar/SideBar";
import "./App.css";
import ContextProvider from "./Context/ContextProvider";
import Main from "./Component/Main/Main";

function App() {
  return (
    <ContextProvider>
      <Sidebar />
      <Main />
    </ContextProvider>
  );
}

export default App;
