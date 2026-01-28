import React, { useState, useMemo } from "react";
import logo from "../assets/images/listener-logo.png";
function Navbar({ data = [] }) {
  const [openSearch, setOpenSearch] = useState(false);

  const favCount = useMemo(
    () => data.filter(item => item.add).length,
    [data]
  );

  return (
    <nav className="sticky top-0 z-50 w-full px-6 md:px-12 py-4
                    flex items-center justify-between
                    bg-black/50 backdrop-blur-md
                    border-b border-white/10">

      <div className="flex items-center gap-3">
        <img 
          src={logo}
          alt="Listener"
          className="w-10 h-10 rounded-full object-cover ring-2 ring-violet-500"
        />
        <h1 className="text-xl font-bold text-white">
          Listener
        </h1>
      </div>

      <div className="flex items-center gap-4">

        <div
          className={`flex items-center bg-[#181818] rounded-full
                      transition-all duration-300 overflow-hidden
                      ${openSearch ? "w-48 px-3" : "w-10"}`}
        >
          <button
            onClick={() => setOpenSearch(!openSearch)}
            className="text-white text-lg"
          >
            🔍
          </button>

          <input
            type="text"
            placeholder="Search..."
            className={`bg-transparent text-white outline-none
                        ml-2 text-sm w-full
                        ${openSearch ? "block" : "hidden"}`}
          />
        </div>
        
        <button className="flex items-center gap-2 px-5 py-2 rounded-full
                           bg-gradient-to-r from-violet-600 to-purple-600
                           text-white font-medium
                           hover:scale-105 transition-transform">
          ❤️
          <span>Favourites</span>
          <span className="bg-white text-violet-600 px-2 py-0.5 rounded-full text-sm">
            {favCount}
          </span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
