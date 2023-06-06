import React from "react";
import Titlebar from "./components/Titlebar";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import "./index.css";

function App() {

  return (
    <div className="m-0 flex h-screen flex-col bg-gray-400 p-0">
      {/* Title bar */}
      <div id="#titlebar" className="fixed top-0">
        <Titlebar />
      </div>
      {/* remaining part */}
      <div className="mt-[108px] flex h-full w-screen flex-row">
        <div className="flex h-full w-11/12">
          {/* tool bar */}
          <Editor />
        </div>
        {/* Side bar */}
          <Sidebar />
      </div>
    </div>
  );
}

export default App;
