import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    gameTitle: {
      type: String,
      required: true,
    },
    developer: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
    gameMode: {
      type: String,
      required: true,
    },
    systemRequirement: {
      type: String,
      required: true,
    },
    updatedBy: {
      type: String,
      required: true,
    },
    gameRating: {
      type: String,
      required: true,
      enum: ["AAA", "AA", "Indie", "Other"], 
    },
    poster: {
      type: String,
      required: true, 
    },
  },
  { timestamps: true } 
);

const Game = mongoose.model("Game", gameSchema);

export default Game;