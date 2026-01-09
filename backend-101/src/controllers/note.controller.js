import { validationResult } from 'express-validator';
import NoteModel from '../models/note.model.js';

export const createNote = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { title, body } = req.body;
    const note = new NoteModel({ user: req.user.userId, title, body });
    await note.save();
    res.status(201).json({ success: true, note });
  } catch (err) {
    next(err);
  }
};

export const getNotes = async (req, res, next) => {
  try {
    const notes = await NoteModel.find({ user: req.user.userId }).sort({
      createdAt: -1,
    });
    res.status(200).json({ success: true, notes });
  } catch (err) {
    next(err);
  }
};

export const getSingleNote = async (req, res, next) => {
  try {
    const note = await NoteModel.findOne({
      _id: req.params.id,
      user: req.user.userId,
    });
    if (!note)
      return res.status(404).json({ success: false, msg: 'Note not found' });
    res.status(200).json({ success: true, note });
  } catch (err) {
    next(err);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const { title, body, archived } = req.body;
    let note = await NoteModel.findOne({
      _id: req.params.id,
      user: req.user.userId,
    });
    if (!note)
      return res.status(404).json({ success: false, msg: 'Note not found' });

    note.title = title ?? note.title;
    note.body = body ?? note.body;
    if (archived !== undefined) note.archived = archived;

    await note.save();
    res.status(200).json({ success: true, note });
  } catch (err) {
    next(err);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const note = await NoteModel.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId,
    });
    if (!note)
      return res.status(404).json({ success: false, msg: 'Note not found' });
    res.status(200).json({ success: true, msg: 'Note removed' });
  } catch (err) {
    next(err);
  }
};
