import express from "express";
import noteRouter from "./routes/NotesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimit.js";
import cors from "cors";

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: ["http://localhost:5173"],
	})
);
app.use(rateLimiter);

app.use((req, res, next) => {
	console.log(`Request method is ${req.method}`);
	next();
});
app.use("/api/notes", noteRouter);

connectDB().then(() => {
	app.listen(5000, () => {
		console.log("Server Started on Port 5000");
	});
});
