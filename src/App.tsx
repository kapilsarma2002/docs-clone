import React from 'react';
import './index.css'
import Titlebar from "./components/Titlebar";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor"

function App() {
  return (
    <div className="m-0 flex h-screen flex-col p-0">
      {/* Title bar */}
      <Titlebar />
      {/* remaining part */}
      <div className="flex h-full w-screen flex-row">
        <div className="w-11/12 flex h-screen flex-col">
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
