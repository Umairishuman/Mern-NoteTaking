import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import CreatePage from "./Pages/CreatePage.jsx";
import NoteDetail from "./Pages/NoteDetail.jsx";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/create" element={<CreatePage />} />
				<Route path="/notes/:id" element={<NoteDetail />} />
			</Routes>
		</div>
	);
};

export default App;
