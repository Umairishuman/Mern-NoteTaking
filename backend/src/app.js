import express from "express";
import noteRouter from "./routes/NotesRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use("/api/notes", noteRouter);

connectDB();

app.listen(5000, () => {
	console.log("Server Started on Port 5000");
});


