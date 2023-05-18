function App() {
  return (
    <div className="p-0 m-0 flex h-screen flex-col">
      {/* Title bar */}
      <div className="h-16 bg-blue-500 text-center text-3xl">Titlebar</div>
      {/* remaining part */}
      <div className="flex h-full w-screen">
        <div className="flex h-full w-11/12 flex-col">
          {/* tool bar */}
          <div className="h-14 bg-cyan-500 text-center text-2xl">Toolbar</div>
          {/* editor */}
          <div className="flex-1 bg-yellow-400 text-center text-4xl">Editor</div>
        </div>
        {/* Side bar */}
        <div className="flex-1 bg-green-700 text-center text-2xl">Side bar</div>
      </div>
    </div>
  );
}

export default App;
