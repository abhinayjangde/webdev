import mongoose from 'mongoose';
import env from './env.js';

const db = async () => {
  try {
    await mongoose.connect(env.mongoUri);
    console.log('Connected to MongoDB ✅');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default db;
