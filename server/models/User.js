import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    id: { type: String },
    googleId: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("UserModel", UserSchema);
