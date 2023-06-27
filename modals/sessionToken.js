import mongoose from "mongoose";
import { Schema } from "mongoose";

const sessionToken = new Schema({
    token: String
});

export default mongoose.model("SessionToken", sessionToken);