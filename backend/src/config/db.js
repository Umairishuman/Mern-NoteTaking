import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://muhammadumair19925:PTOjPldpkUXacBHa@noteappcluster.dilbace.mongodb.net/?retryWrites=true&w=majority&appName=NoteAppCluster"
		);
		console.log("Databse connected");
	} catch (error) {
		console.log("Error connecting to the dataBase", error);
	}
};
