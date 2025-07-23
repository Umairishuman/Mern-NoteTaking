import { Route, Routes } from "react-router";
import Homepage from "./Pages/Homepage";
import CreatePage from "./Pages/CreatePage";
import NoteDetail from "./Pages/NoteDetail";
const App = () => {
	return (
		<div data-theme="dark">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/create" element={<CreatePage />} />
				<Route path="/notes/:id" element={<NoteDetail />} />
			</Routes>
		</div>
	);
};

export default App;
