import express from "express";
import {
	AddNotes,
	DeleteNote,
	getNotes,
	updateNote,
} from "../controllers/NotesControllers.js";

const router = express.Router();

router.get("/", getNotes);

router.post("/", AddNotes);

router.put("/:id", updateNote);

router.delete("/:id", DeleteNote);

export default router;
