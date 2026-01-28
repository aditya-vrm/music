import React, { useState } from "react";

function Card({ data, handleclick, index }) {
  const { image, name, artist, add } = data;

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full max-w-md h-40 bg-[#181818] text-white 
                    rounded-xl flex gap-4 p-3
                    hover:bg-[#202020] transition-colors duration-200
                    relative">

      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-28 h-28 rounded-lg object-cover"
        />

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute inset-0 flex items-center justify-center
                     bg-black/50 rounded-lg
                     opacity-0 hover:opacity-100
                     transition-opacity duration-200"
        >
          <span className="text-3xl">
            {isPlaying ? "⏸️" : "▶️"}
          </span>
        </button>
      </div>

      <div className="flex flex-col justify-center flex-1">
        <h1 className="font-semibold text-lg leading-tight">
          {name}
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          {artist}
        </p>

        {isPlaying && (
          <span className="text-green-400 text-sm mt-2">
            ▶ Now Playing
          </span>
        )}
      </div>

      <button
        onClick={() => handleclick(index)}
        className={`absolute bottom-3 right-3 px-4 py-1.5 rounded-full text-sm font-medium
                    transition-all duration-200
                    ${
                      add
                        ? "bg-green-500 text-black"
                        : "bg-violet-600 hover:bg-violet-700"
                    }`}
      >
        {add ? "Added ✓" : "Add to Favourite"}
      </button>
    </div>
  );
}

export default Card;
