import mongoose from "mongoose";

const MedicationLogsSchema = new mongoose.Schema({
  medicationId: { type: mongoose.Schema.Types.ObjectId, ref: "Medication" },
  date: Date,
  petId: { type: mongoose.Schema.Types.ObjectId, ref: "Pet" },
});

const MedLog = mongoose.model("medicationlog", MedicationLogsSchema);

export default MedLog;
