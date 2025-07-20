export const getNotes = (req, res) => {
	res.status(200).json({ message: "Successful get request" });
};

export const AddNotes = (req, res) => {
	res.status(201).json({ message: "Added 20 Notes" });
};

export const updateNote = (req, res) => {
	res.status(200).json({ message: "updated" });
};

export const DeleteNote = (req, res) => {
	res.status(200).json({ message: "updated" });
};
