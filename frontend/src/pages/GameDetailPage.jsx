import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { LoaderIcon, Trash2Icon, ArrowLeftIcon } from "lucide-react";

const GameDetailPage = () => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const res = await api.get(`/games/${id}`);
        setGame(res.data);
      } catch (error) {
        console.error("Error fetching game", error);
        toast.error("Failed to fetch the game");
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this game?"))
      return;

    try {
      await api.delete(`/games/${id}`);
      toast.success("Game deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error deleting game", error);
      toast.error("Failed to delete game");
    }
  };

  const handleSave = async () => {
    if (
      !game?.gameTitle?.trim() ||
      !game?.developer?.trim() ||
      !game?.releaseYear?.toString().trim() ||
      !game?.description?.trim() ||
      !game?.genre?.trim() ||
      !game?.size?.trim() ||
      !game?.gameMode?.trim() ||
      !game?.systemRequirement?.trim() ||
      !game?.gameRating?.toString().trim()
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/games/${id}`, {
        gameTitle: game.gameTitle,
        developer: game.developer,
        releaseYear: game.releaseYear,
        description: game.description,
        genre: game.genre,
        size: game.size,
        gameMode: game.gameMode,
        systemRequirement: game.systemRequirement,
        gameRating: game.gameRating,
      });

      toast.success("Game updated successfully");
      navigate("/");
    } catch (error) {
      console.error("Error updating game", error);
      toast.error("Failed to update game");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <LoaderIcon className="animate-spin size-14 text-cyan-400 drop-shadow-[0_0_20px_cyan]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black py-16 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-12">
            <Link
              to="/"
              className="btn btn-ghost text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all gap-2"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Back To Games
            </Link>

            <button
              onClick={handleDelete}
              className="btn bg-red-500/10 text-red-400 border border-red-500/40 hover:bg-red-500 hover:text-white hover:scale-105 transition-all gap-2"
            >
              <Trash2Icon className="h-5 w-5" />
              Delete Game
            </button>
          </div>

          {/* MAIN CARD */}
          <div className="card bg-white/5 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_40px_rgba(0,255,255,0.15)] rounded-3xl">
            <div className="card-body p-12">

              {/* TITLE */}
              <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wider">
                🎮 Edit Game Details
              </h2>

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {[
                  { label: "Title", key: "gameTitle" },
                  { label: "Developer", key: "developer" },
                  { label: "Release Year", key: "releaseYear" },
                  { label: "Genre", key: "genre" },
                  { label: "Size", key: "size" },
                  { label: "Game Mode", key: "gameMode" },
                ].map((field) => (
                  <div className="form-control" key={field.key}>
                    <label className="label">
                      <span className="label-text text-gray-400 uppercase tracking-widest text-xs">
                        {field.label}
                      </span>
                    </label>
                    <input
                      type="text"
                      className="input bg-gray-900/80 border border-cyan-500/30 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white w-full rounded-xl transition-all hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                      value={game?.[field.key] || ""}
                      onChange={(e) =>
                        setGame({ ...game, [field.key]: e.target.value })
                      }
                    />
                  </div>
                ))}
              </div>

              {/* DESCRIPTION */}
              <div className="form-control mt-10">
                <label className="label">
                  <span className="label-text text-gray-400 uppercase tracking-widest text-xs">
                    Description
                  </span>
                </label>
                <textarea
                  className="textarea bg-gray-900/80 border border-cyan-500/30 focus:ring-2 focus:ring-cyan-400 text-white w-full min-h-[140px] rounded-xl hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                  value={game?.description || ""}
                  onChange={(e) =>
                    setGame({ ...game, description: e.target.value })
                  }
                />
              </div>

              {/* SYSTEM REQUIREMENT */}
              <div className="form-control mt-10">
                <label className="label">
                  <span className="label-text text-gray-400 uppercase tracking-widest text-xs">
                    System Requirement
                  </span>
                </label>
                <textarea
                  className="textarea bg-gray-900/80 border border-purple-500/30 focus:ring-2 focus:ring-purple-400 text-white w-full min-h-[140px] rounded-xl hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  value={game?.systemRequirement || ""}
                  onChange={(e) =>
                    setGame({ ...game, systemRequirement: e.target.value })
                  }
                />
              </div>

              {/* GAME RATING */}
              <div className="form-control mt-10 md:w-1/3">
                <label className="label">
                  <span className="label-text text-gray-400 uppercase tracking-widest text-xs">
                    Game Rating
                  </span>
                </label>
                <input
                  type="text"
                  className="input bg-gray-900/80 border border-pink-500/30 focus:ring-2 focus:ring-pink-400 text-white w-full rounded-xl hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                  value={game?.gameRating || ""}
                  onChange={(e) =>
                    setGame({ ...game, gameRating: e.target.value })
                  }
                />
              </div>

              {/* SAVE BUTTON */}
              <div className="flex justify-end mt-14">
                <button
                  className="btn px-12 py-3 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 border-none text-white font-bold tracking-wider shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 rounded-xl"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;