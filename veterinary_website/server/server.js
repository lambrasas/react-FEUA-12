import express from "express";
import mongoose from "mongoose";
import packageJson from "./package.json" assert { type: "json" };
import Pet from "./models/Pet.js";
import User from "./models/User.js";
import cors from "cors";
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
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
