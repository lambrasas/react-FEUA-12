import express from "express";
import mongoose from "mongoose";
import packageJson from "./package.json" assert { type: "json" };
import Pet from "./models/Pet.js";
import User from "./models/User.js";
import cors from "cors";
import Medication from "./models/Medication.js";
import MedLog from "./models/MedicationLogs.js";
const app = express();
const PORT = 3000;
const router = express.Router();

app.use(express.json());
app.use(cors());
import { connectionString } from "./api.js";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/version", async (req, res) => {
  const version = packageJson.version;
  res.send(`Current Version: ${version}`);
});

router.get("/pets", async (req, res) => {
  try {
    const petsWithOwnerEmail = await Pet.find().populate("userId", "email");
    const petData = petsWithOwnerEmail.map((pet) => ({
      ...pet.toObject(),
      ownerEmail: pet.userId?.email,
    }));
    res.json(petData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});
app.get("/medications", async (req, res) => {
  try {
    const medications = await Medication.find();
    res.json(medications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/pets/:petId", async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.petId).populate(
      "userId",
      "email"
    );
    if (!pet) {
      return res.status(404).send("Pet not found");
    }
    res.json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});
app.get("/pets/:petId/medicationlogs", async (req, res) => {
  try {
    const { petId } = req.params;
    const pet = await Pet.findById(petId).populate("userId", "email");
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }
    const foundLogs = await MedLog.find({ petId: petId }).populate(
      "medicationId"
    );

    const petWithLogs = {
      ...pet.toObject(),
      medicationLogs: foundLogs,
    };

    res.json(petWithLogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/pets/:petId/addmedications", async (req, res) => {
  const { petId } = req.params;
  const { medicationId, dateAdministered } = req.body;

  try {
    const medicationLog = new MedLog({
      medicationId: medicationId,
      date: new Date(dateAdministered),
      petId: petId,
    });

    const savedMedicationLog = await medicationLog.save();

    res.status(200).send(savedMedicationLog);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
