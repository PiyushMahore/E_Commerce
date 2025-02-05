import mongoose from "mongoose";
import { connectionName } from "../constent.js";

export const dbConnect = async () => {
    try {
        const file = await mongoose.connect(`${process.env.DB_URL}${connectionName}`);
        console.log("Data base connected successfully with:", file.connection.name);
    } catch (error) {
        console.log("Failed to connect Data Base: ", error);
        process.exit(1);
    }
}