import { Gamepad2Icon } from "lucide-react";
import { Link } from "react-router";

const GameNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black flex items-center justify-center relative overflow-hidden px-6">

      {/* Background Glow Orbs (Same Style As Other Pages) */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/10 blur-3xl rounded-full"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-3xl">

        <div className="card bg-white/5 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_40px_rgba(0,255,255,0.15)] rounded-3xl">
          <div className="card-body p-16 text-center space-y-10">

            {/* Icon Section */}
            <div className="relative mx-auto w-fit group">
              <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full animate-pulse"></div>

              <div className="relative p-12 rounded-full border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 shadow-[0_0_30px_rgba(0,255,255,0.3)] group-hover:scale-110 transition-all duration-500">
                <Gamepad2Icon className="size-20 text-cyan-400 drop-shadow-[0_0_20px_cyan]" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              GAME LIBRARY EMPTY
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
              No titles detected in your GameStore vault.
              Initialize your collection and start building
              your ultimate gaming universe.
            </p>

            {/* CTA */}
            <Link
              to="/create"
              className="btn px-12 py-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 border-none text-white font-bold tracking-wider shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 rounded-xl"
            >
              🚀 Create First Game
            </Link>

            {/* Bottom Neon Divider */}
            <div className="h-[2px] w-60 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default GameNotFound;