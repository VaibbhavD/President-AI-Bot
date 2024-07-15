import Sidebar from "./Component/Sidebar";
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
