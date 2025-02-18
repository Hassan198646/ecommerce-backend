import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// MongoDB connection URI from environment variables
const uri = process.env.MONGO_URI;

// MongoDB client options
const clientOptions = {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
};

async function connectDB() {
  try {
    await mongoose.connect(uri, clientOptions);

    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default connectDB;