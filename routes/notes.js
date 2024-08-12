const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.post('/', notesController.createNote);
router.get('/:id', notesController.getNoteById);
router.get('/', notesController.queryNotesByTitle);
router.put('/:id', notesController.updateNote);

module.exports = router;
