import { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimited from "../components/RateLimited";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Homepage = () => {
	const [rateLimited, setRateLimited] = useState(false);
	const [Notes, setNotes] = useState([]);
	const [Loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchNotes = async () => {
			try {
				const res = await fetch("http://localhost:5000/api/notes");
				const data = await res.json();
				setNotes(data);
				setRateLimited(false);
			} catch (error) {
				console.log("Error Occuresd", error);
				if (error.response.code === 429) setRateLimited(true);
				else toast.error("Failed to Load Notes");
			} finally {
				setLoading(false);
			}
		};

		fetchNotes();
	}, []);

	return (
		<div className="min-h-screen">
			<Navbar />
			{rateLimited && <RateLimited />}
		</div>
	);
};

export default Homepage;
