import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Medications from "./pages/Medications";
import Pets from "./pages/Pets";
import PetDetails from "./pages/PetDetails";
import AddPetLog from "./pages/AddPetLog";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/pets/:petId" element={<PetDetails />} />
        <Route path="/pets/:petId/addLog" element={<AddPetLog />} />
      </Routes>
    </Router>
  );
};

export default App;
