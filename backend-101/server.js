import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import env from './src/config/env.js';
import db from './src/config/db.js';
import errorHandler from './src/middlewares/error.middleware.js';
import authRoutes from './src/routes/auth.route.js';
import noteRoutes from './src/routes/note.route.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
db();

app.get('/', (req, res) => res.send('Backend 101 up 🚀'));
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

app.use(errorHandler);
const port = env.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
