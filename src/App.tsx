import Titlebar from "./components/Titlebar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="m-0 flex h-screen flex-col p-0">
      {/* Title bar */}
      <Titlebar />
      {/* remaining part */}
      <div className="flex h-full w-screen flex-row">
        <div className="w-11/12 flex h-full flex-col">
          {/* tool bar */}
          <div className=" bg-cyan-500 text-center text-2xl">Toolbar</div>
          {/* editor */}
          <div className="flex-1 bg-yellow-400 text-center text-4xl">
            Editor
          </div>
        </div>
        {/* Side bar */}
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
