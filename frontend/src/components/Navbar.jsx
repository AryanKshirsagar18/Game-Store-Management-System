import React from "react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="relative bg-gradient-to-r from-black via-gray-950 to-black border-b border-cyan-500/30 shadow-[0_0_25px_rgba(0,255,255,0.25)] overflow-hidden">
      
      {/* Animated Glow Background */}
      <div className="absolute -left-20 top-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -right-20 top-0 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-5">
        
        <div className="flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-4xl md:text-5xl font-extrabold font-mono tracking-widest bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,255,255,0.7)] hover:scale-105 transition-transform duration-300 cursor-default">
            🎮 GAMESTORE
          </h1>

          {/* New Game Button */}
          <Link
            to="/create"
            className="group relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-semibold tracking-wide flex items-center gap-2 shadow-lg hover:shadow-cyan-500/60 transition-all duration-300 overflow-hidden"
          >
            {/* Neon Hover Overlay */}
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

            <PlusIcon className="size-5 group-hover:rotate-90 transition-transform duration-300" />
            <span className="relative z-10">New Game</span>
          </Link>

        </div>

        {/* Bottom Glow Line */}
        <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>

      </div>
    </header>
  );
};

export default Navbar;