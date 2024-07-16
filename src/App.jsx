import Sidebar from "./Component/Sidebar/SideBar";
import "./App.css";
import ContextProvider from "./Context/ContextProvider";
function App() {
  return (
    <ContextProvider>
      <Sidebar />
    </ContextProvider>
  );
}

export default App;
