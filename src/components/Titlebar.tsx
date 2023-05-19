const Titlebar = () => {
  return (
    <div
      className={`fixed m-0 flex h-16 w-screen flex-row bg-white p-0 text-center text-3xl`}
    >
      {/* icon */}
      <div className="w-16 border border-solid border-black">
        <svg
          className="m-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 54 54"
          width="48px"
          height="48px"
        >
          <path
            fill="#2196f3"
            d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"
          />
          <path fill="#bbdefb" d="M40 13L30 13 30 3z" />
          <path fill="#1565c0" d="M30 13L40 23 40 13z" />
          <path
            fill="#e3f2fd"
            d="M15 23H33V25H15zM15 27H33V29H15zM15 31H33V33H15zM15 35H25V37H15z"
          />
        </svg>
      </div>

      {/* options */}
      <div className="flex flex-row">
        {/* textbox */}
        <div>
          <input
            className="h-6 w-40 rounded border-solid border-black text-lg hover:border delay-150"
            value="Untitled document"
            type="text"
          />
        </div>
        {/* dropdowns */}
        <div></div>
      </div>

      {/* buttons */}
      <div></div>
    </div>
  );
};

export default Titlebar;
