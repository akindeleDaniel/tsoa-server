import mongoose from "mongoose";

const connectDB = async () => {
if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defined in env");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;