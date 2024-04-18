import mongoose from "mongoose";

const MedicationSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  type: String,
  commonUses: Array,
  dosage: String,
  sideEffects: [String],
});

const Medication = mongoose.model("Medication", MedicationSchema);

export default Medication;
