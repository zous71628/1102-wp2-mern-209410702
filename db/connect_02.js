import mongoose from "mongoose";

const connectDB_02 = (url) => {
    return mongoose.connect(url);
}

export default connectDB_02;