import express from "express";
import noteRouter from "./routes/NotesRoutes.js";

const app = express();

app.use("/api/notes", noteRouter);

app.listen(5000, () => {
	console.log("Server Started on Port 5000");
});
