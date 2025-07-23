import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import CreatePage from "./Pages/CreatePage.jsx";
import NoteDetail from "./Pages/NoteDetail.jsx";
import toast from "react-hot-toast";

const App = () => {
	return (
		<div>
			<button
				onClick={() => toast.success("Congrats")}
				className="text-red-500 p-4 bg-pink-300"
			>
				Click me
			</button>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/create" element={<CreatePage />} />
				<Route path="/notes/:id" element={<NoteDetail />} />
			</Routes>
		</div>
	);
};

export default App;
