import express from "express";
import noteRouter from "./routes/NotesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/notes", noteRouter);

app.listen(5000, () => {
	console.log("Server Started on Port 5000");
});
