const Note = require('../models/Note');

exports.createNote = async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      body: req.body.body,
    });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Error creating note', error });
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching note', error });
  }
};

exports.queryNotesByTitle = async (req, res) => {
  try {
    const notes = await Note.find({ title: { $regex: req.query.title, $options: 'i' } });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error querying notes', error });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    note.title = req.body.title || note.title;
    note.body = req.body.body || note.body;
    note.updated_at = Date.now();
    await note.save();
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: 'Error updating note', error });
  }
};
