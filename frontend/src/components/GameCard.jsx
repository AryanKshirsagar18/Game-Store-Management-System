import { Link, useLocation } from "react-router";
import { Gamepad2, Building2, Pencil, Trash2, Star } from "lucide-react";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { useState } from "react";

const GameCard = ({ game, setGames }) => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const isActive = location.pathname === `/games/${game._id}`;

  const handleDelete = async () => {
    try {
      await api.delete(`/games/${game._id}`);
      setGames((prev) => prev.filter((g) => g._id !== game._id));
      toast.success("Game deleted successfully");
    } catch (error) {
      toast.error("Failed to delete game");
    } finally {
      setShowModal(false);
    }
  };

  return (
    <>
      {/* CARD */}
      <Link
        to={`/games/${game._id}`}
        className={`group relative block rounded-2xl overflow-hidden 
        bg-gradient-to-br from-gray-900/80 to-black/80
        backdrop-blur-xl border transition-all duration-500
        hover:scale-[1.04] hover:-translate-y-2
        ${
          isActive
            ? "border-cyan-400 shadow-[0_0_40px_rgba(0,255,255,0.5)]"
            : "border-white/10 hover:border-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]"
        }`}
      >
        {/* POSTER IMAGE */}
        <div className="h-56 w-full overflow-hidden relative">
          <img
            src={
              game.poster ||
              "https://via.placeholder.com/400x300?text=No+Image"
            }
            alt={game.gameTitle}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Floating Rating Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-yellow-400/40">
            <Star className="size-3 text-yellow-400" />
            <span className="text-xs text-yellow-300 font-semibold">
              {game.gameRating}
            </span>
          </div>

          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-purple-500/10"></div>
        </div>

        {/* CONTENT */}
        <div className="p-6 text-white">

          {/* DATE */}
          <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
            <span>{formatDate(new Date(game.createdAt))}</span>
          </div>

          {/* TITLE */}
          <div className="flex items-center gap-2">
            <Gamepad2 className="size-5 text-cyan-400 group-hover:text-cyan-300 transition" />
            <p className="font-bold text-xl tracking-wide line-clamp-1 group-hover:text-cyan-300 transition">
              {game.gameTitle}
            </p>
          </div>

          {/* DEVELOPER */}
          <div className="flex items-center gap-2 text-gray-400 mt-3">
            <Building2 className="size-4 text-purple-400" />
            <p className="text-sm line-clamp-1">
              {game.developer}
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex justify-end items-center gap-5 opacity-0 group-hover:opacity-100 transition duration-300">

            {/* EDIT */}
            <div className="tooltip" data-tip="Edit Game">
              <Pencil className="size-5 text-yellow-400 hover:scale-125 hover:text-yellow-300 transition-all duration-200 cursor-pointer" />
            </div>

            {/* DELETE */}
            <div className="tooltip" data-tip="Delete Game">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                }}
                className="text-red-500 hover:scale-125 hover:text-red-400 transition-all duration-200"
              >
                <Trash2 className="size-5" />
              </button>
            </div>

          </div>

        </div>
      </Link>

      {/* DELETE MODAL */}
      {showModal && (
        <dialog className="modal modal-open">
          <div className="modal-box bg-gradient-to-br from-gray-900 to-black text-white border border-red-500/40 shadow-[0_0_40px_rgba(255,0,0,0.3)] rounded-2xl">
            <h3 className="font-bold text-lg text-red-400 flex items-center gap-2">
              <Trash2 className="size-5" />
              Delete Game
            </h3>

            <p className="py-4 text-gray-300">
              Are you sure you want to delete
              <span className="font-semibold text-white">
                {" "}
                "{game.gameTitle}"
              </span>
              ?<br />
              This action cannot be undone.
            </p>

            <div className="modal-action">
              <button
                className="btn bg-gray-800 text-gray-300 hover:bg-gray-700 border-none"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className="btn bg-red-600 hover:bg-red-500 border-none text-white flex items-center gap-2"
                onClick={handleDelete}
              >
                <Trash2 className="size-4" />
                Delete
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default GameCard;