import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI;

let isConnected = false;

const DBConnect = async () => {
    if (isConnected) {
        console.log("Database already connected");
        return;
    }

    try {
        const connect = await mongoose.connect(connectionString);
        isConnected = true;
        console.log("Successfully connected to Database:", connect.connection.host, connect.connection.name);
    } catch (error) {
        console.error("Error connecting to Database:", error);
        throw error;
    }
};

export default DBConnect;
