import express from "express";
import auth from "../middleware/auth.js";
import {
  addToWatchLater,
  getAllWatchLater,
  deleteWatchLater,
} from "../Controllers/watchlater.js";

const router = express.Router();

router.post("/", auth, addToWatchLater); // ➕ Add video to watch later
router.get("/", auth, getAllWatchLater); // 📥 Get all saved videos
router.delete("/:videoid", auth, deleteWatchLater); // ❌ Remove by video ID

export default router;
