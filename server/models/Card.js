import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const CardSchema = mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: new Date(),
    },
    polish: {
      type: String,
      required: true,
    },
    translation: {
      type: String,
      required: true,
    },
    repeatAmount: {
      type: Number,
    },
    creator: {
      type: ObjectId,
      ref: "UserModel",
      required: true,
    },

    note: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("CardModel", CardSchema);
