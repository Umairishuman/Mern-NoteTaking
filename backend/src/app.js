import express from "express";
import noteRouter from "./routes/NotesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimit.js";
import cors from "cors";
import path from "path";

const PORT = process.env.PORT || 5000;
const app = express();
const __dirname = path.resolve();
console.log(__dirname);

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
	app.use(
		cors({
			origin: ["http://localhost:5173"],
		})
	);
}
app.use(rateLimiter);

app.use((req, res, next) => {
	console.log(`Request method is ${req.method}`);
	next();
});
app.use("/api/notes", noteRouter);

if (process.NODE_ENV == "production") {
	app.use(express.static(path.join(__dirname, "../front-end/dist")));
	app.get("*", (req, res) => {
		res.sendFile(
			path.join(__dirname, "../front-end", "dist", "index.html")
		);
	});
}
connectDB().then(() => {
	app.listen(PORT, () => {
		console.log("Server Started on Port 5000");
	});
});
