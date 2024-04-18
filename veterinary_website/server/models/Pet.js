import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: String,
  birthDate: Date,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Pet = mongoose.model("Pet", petSchema);

export default Pet;
