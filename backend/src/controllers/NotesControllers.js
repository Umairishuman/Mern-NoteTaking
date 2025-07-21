import Note from "../models/Note.js";

export const getNotes = async (req, res) => {
	try {
		const notes = await Note.find();
		res.status(200).json(notes);
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export const AddNotes = async (req, res) => {
	console.log(req.body);

	try {
		const { title, content } = req.body;

		console.log(title, content);
		const newNote = new Note({ title, content });

		const createdNote = await newNote.save();
		res.status(201).json(createdNote);
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export const updateNote = async (req, res) => {
	
};

export const DeleteNote = (req, res) => {
	res.status(200).json({ message: "updated" });
};
