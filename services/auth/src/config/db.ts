import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string, {
            dbName: "Food_Orbit",
        });
        console.log("Connected to mongodb");
        
    } catch (error) {
        console.log("mongo connection failed. Error is ==  ",error);
        
    }
}

export default connectDB;



