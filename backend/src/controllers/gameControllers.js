import Game from "../models/gameModels.js";

/* ===========================
   GET ALL GAMES
=========================== */
export async function getAllGames(_, res) {
  try {
    // ✅ fixed createdAt spelling
    const games = await Game.find().sort({ createdAt: -1 });
    res.status(200).json(games);
  } catch (error) {
    console.error("Error in getAllGames Controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

/* ===========================
   GET GAME BY ID
=========================== */
export async function getGameById(req, res) {
  try {
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({ message: "Game Not Found" });
    }

    res.status(200).json(game);
  } catch (error) {
    console.error("Error in getGameById Controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

/* ===========================
   CREATE GAME
=========================== */
export async function createGame(req, res) {
  try {
    const {
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
      poster, // ✅ added
    } = req.body;

    // ✅ removed createdAt & updatedAt (timestamps handle it)

    if (
      !gameTitle ||
      !developer ||
      !description ||
      !genre ||
      !size ||
      !releaseDate ||
      !gameMode ||
      !systemRequirement ||
      !updatedBy ||
      !gameRating ||
      !poster
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newGame = new Game({
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
      poster, // ✅ saved
    });

    const savedGame = await newGame.save();

    res.status(201).json(savedGame);
  } catch (error) {
    console.error("Error in createGame Controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

/* ===========================
   UPDATE GAME
=========================== */
export async function updateGame(req, res) {
  try {
    const {
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
      poster, // ✅ added
    } = req.body;

    const updatedGame = await Game.findByIdAndUpdate(
      req.params.id,
      {
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
      },
      { new: true }
    );

    if (!updatedGame) {
      return res.status(404).json({ message: "Game not found" });
    }

    res.status(200).json(updatedGame);
  } catch (error) {
    console.error("Error in updateGame Controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

/* ===========================
   DELETE GAME
=========================== */
export async function deleteGame(req, res) {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);

    if (!deletedGame) {
      return res.status(404).json({ message: "Game not found" });
    }

    res.status(200).json({ message: "Game deleted successfully" });
  } catch (error) {
    console.error("Error in deleteGame Controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}