import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const dbConnection = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error('MongoDB URI is not defined in the environment variables');
    }
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error.message);
  }
};

export default dbConnection;
