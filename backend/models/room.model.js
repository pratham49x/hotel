import mongoose from "mongoose";
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Room = mongoose.model("Room", roomSchema);
export default Room;
    