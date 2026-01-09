import express from 'express';
import { body } from 'express-validator';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import {
  createNote,
  getNotes,
  getSingleNote,
  updateNote,
  deleteNote,
} from '../controllers/note.controller.js';
const router = express.Router();

router.use(authMiddleware);

router.post(
  '/',
  [body('body').notEmpty().withMessage('Body is required')],
  [body('title').notEmpty().withMessage('Title is required')],
  createNote,
);

router.get('/', getNotes);
router.get('/:id', getSingleNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;
