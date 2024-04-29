import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import PetDetails from "./pages/PetDetails";
import AddPetMedication from "./pages/AddPetMedication";
import AddPet from "./pages/AddPet";
import PetLogs from "./pages/PetLogs";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/petLogs" element={<PetLogs />} />
        <Route path="/pets/:petId" element={<PetDetails />} />
        <Route
          path="/pets/:petId/addMedication"
          element={<AddPetMedication />}
        />
        <Route path="/addPet" element={<AddPet />} />
      </Routes>
    </Router>
  );
};

export default App;
