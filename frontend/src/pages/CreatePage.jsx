import api from "../lib/axios";
import { ArrowLeftIcon, Sparkles } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const CreatePage = () => {
  const [gameTitle, setTitle] = useState("");
  const [developer, setDeveloper] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [size, setSize] = useState("");
  const [gameMode, setGameMode] = useState("");
  const [systemRequirement, setSystemRequirement] = useState("");
  const [updatedBy, setUpdatedBy] = useState("");
  const [gameRating, setGameRating] = useState("");
  const [poster, setPoster] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/games", {
        gameTitle,
        developer,
        description,
        genre,
        size,
        releaseDate,
        gameMode,
        systemRequirement,
        updatedBy,
        gameRating,
        poster,
      });

      toast.success("Game created Successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to create game.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-950 to-black py-16 text-white overflow-hidden">

      {/* Subtle Animated Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition mb-10 group"
          >
            <ArrowLeftIcon className="size-5 group-hover:-translate-x-1 transition" />
            Back to Games
          </Link>

          {/* Card */}
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">

            <div className="rounded-3xl bg-gray-900/80 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.2)]">

              <div className="p-12">

                {/* Header */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-wider">
                    🎮 Create New Game
                  </h2>
                  <p className="text-gray-400 mt-4">
                    Add your next legendary title to the vault
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">

                  {/* GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <GamingInput placeholder="Game Title" value={gameTitle} onChange={(e) => setTitle(e.target.value)} />
                    <GamingInput placeholder="Developer" value={developer} onChange={(e) => setDeveloper(e.target.value)} />
                    <GamingInput placeholder="Release Year" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
                    <GamingInput placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
                    <GamingInput placeholder="Size (50GB)" value={size} onChange={(e) => setSize(e.target.value)} />
                    <GamingInput placeholder="Game Mode" value={gameMode} onChange={(e) => setGameMode(e.target.value)} />
                    <GamingInput placeholder="Updated By" value={updatedBy} onChange={(e) => setUpdatedBy(e.target.value)} />

                    <select
                      className="select bg-gray-900 border border-white/10 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 text-white w-full transition-all"
                      value={gameRating}
                      onChange={(e) => setGameRating(e.target.value)}
                      required
                    >
                      <option value="">Select Rating</option>
                      <option value="AAA">AAA</option>
                      <option value="AA">AA</option>
                      <option value="Indie">Indie</option>
                      <option value="Other">Other</option>
                    </select>

                  </div>

                  {/* TEXT AREAS */}
                  <textarea
                    placeholder="Game Description"
                    className="textarea bg-gray-900 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 text-white w-full min-h-[140px] transition-all"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />

                  <textarea
                    placeholder="System Requirements"
                    className="textarea bg-gray-900 border border-white/10 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 text-white w-full min-h-[140px] transition-all"
                    value={systemRequirement}
                    onChange={(e) => setSystemRequirement(e.target.value)}
                    required
                  />

                  <GamingInput placeholder="Poster Image URL" value={poster} onChange={(e) => setPoster(e.target.value)} />

                  {/* Poster Preview */}
                  {poster && (
                    <div className="flex justify-center mt-6">
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition"></div>
                        <img
                          src={poster}
                          alt="Preview"
                          className="relative w-64 h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition duration-300"
                        />
                      </div>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="flex justify-end pt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="relative px-12 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/40 overflow-hidden"
                    >
                      {loading ? "Creating..." : "Create Game"}
                    </button>
                  </div>

                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

/* Reusable Gaming Input */
const GamingInput = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    className="input bg-gray-900 border border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 text-white w-full transition-all duration-300 hover:border-purple-400"
    value={value}
    onChange={onChange}
    required
  />
);

export default CreatePage;