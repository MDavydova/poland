import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  createCard,
  deleteCard,
  increaseCounterCard,
  getCardsByUser,
} from "../controllers/cards.js";

router.post("/", auth, createCard);
router.delete("/:id", auth, deleteCard);
router.patch("/:id", auth, increaseCounterCard);
router.get("/userCards/:id", auth, getCardsByUser);

export default router;
