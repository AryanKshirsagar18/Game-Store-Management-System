import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import api from "../lib/axios";
import toast from "react-hot-toast";
import GameCard from "../components/GameCard.jsx";
import GameNotFound from "../components/GameNotFound.jsx";

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await api.get("/games");
        setGames(res.data);
      } catch (error) {
        console.log("Error fetching games");
        toast.error("Failed to load games");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  // 🔥 Proper Dynamic Filter Logic
  const filteredGames =
    filter === "ALL"
      ? games
      : games.filter((game) => game.gameRating === filter);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <Navbar />

      <div className="max-w-7xl mx-auto p-6 relative z-10">

        {/* 🎮 HERO HEADER (Dynamic) */}
        <div className="mb-12 text-center">
          <h1 className="text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-xl tracking-wider">
            {filter === "ALL" && "🎮 GAME VAULT"}
            {filter === "AAA" && "🔥 AAA TITLES"}
            {filter === "AA" && "⚡ AA TITLES"}
            {filter === "Indie" && "🌌 INDIE COLLECTION"}
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            {filter === "ALL" && "Discover • Collect • Dominate"}
            {filter === "AAA" && "Premium Blockbuster Experiences"}
            {filter === "AA" && "High Quality Mid-Tier Adventures"}
            {filter === "Indie" && "Creative & Unique Indie Gems"}
          </p>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* HEADER INFO + FILTER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          
          {!loading && (
            <p className="text-sm text-gray-400">
              Showing{" "}
              <span className="text-cyan-400 font-semibold">
                {filteredGames.length}
              </span>{" "}
              of{" "}
              <span className="text-purple-400 font-semibold">
                {games.length}
              </span>{" "}
              games
            </p>
          )}

          {/* FILTER DROPDOWN */}
          <div className="form-control w-56">
            <select
              className="select bg-gray-900 border border-cyan-500 text-white focus:ring-2 focus:ring-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="ALL">All Games</option>
              <option value="AAA">AAA Titles</option>
              <option value="AA">AA Titles</option>
              <option value="Indie">Indie Titles</option>
            </select>
          </div>
        </div>

        {/* 🎯 QUICK STATS */}
        {!loading && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <StatCard title="Total Games" value={games.length} />
            <StatCard
              title="AAA Titles"
              value={games.filter(g => g.gameRating === "AAA").length}
            />
            <StatCard
              title="AA Titles"
              value={games.filter(g => g.gameRating === "AA").length}
            />
            <StatCard
              title="Indie Titles"
              value={games.filter(g => g.gameRating === "Indie").length}
            />
          </div>
        )}

        {/* LOADING STATE */}
        {loading && (
          <div className="flex flex-col justify-center items-center py-20 space-y-4">
            <span className="loading loading-spinner loading-lg text-cyan-400"></span>
            <p className="text-gray-400 animate-pulse">
              Loading the universe...
            </p>
          </div>
        )}

        {/* NO GAMES */}
        {!loading && filteredGames.length === 0 && (
          <GameNotFound />
        )}

        {/* GAME GRID */}
        {!loading && filteredGames.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredGames.map((game) => (
              <div
                key={game._id}
                className="transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <GameCard game={game} setGames={setGames} />
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

/* 🎮 STAT CARD */
const StatCard = ({ title, value }) => (
  <div className="bg-gray-900/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
    <p className="text-gray-400 text-sm uppercase tracking-wide">
      {title}
    </p>
    <h3 className="text-3xl font-bold mt-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
      {value}
    </h3>
  </div>
);

export default HomePage;