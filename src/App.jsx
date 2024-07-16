import "./App.css";
import Sidebar from "./Components/SideBar";
import Main from "./Components/Main";
import ContextProvider from "./context/context";

function App() {
  return (
    <>
      <div className="all">
        <ContextProvider>
          <Sidebar />
          <Main />
        </ContextProvider>
      </div>
    </>
  );
}

export default App;
