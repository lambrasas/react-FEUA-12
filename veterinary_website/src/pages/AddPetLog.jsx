import Dropdown from "../components/Inputs/Dropdown";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../components/DefaultApi/API";
import StyledButton from "../components/styles/StyledButton";
const AddPetLog = () => {
  const { petId } = useParams();
  const [options, setOptions] = useState([]);
  const [selectedMedication, setSelectedMedication] = useState("");
  const [medicationDate, setMedicationDate] = useState("");
  useEffect(() => {
    fetch(`${API}/medications`)
      .then((response) => response.json())
      .then((data) =>
        setOptions(
          data.map((item) => ({
            id: item._id,
            value: item.name,
          }))
        )
      )
      .catch((error) => console.error("Error fetching pet details:", error));
  }, [petId]);
  const handleMedicationChange = (event) => {
    setSelectedMedication(event.target.value);
  };

  const handleDateChange = (event) => {
    setMedicationDate(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      petId,
      medicationId: selectedMedication,
      dateAdministered: medicationDate,
    };
    fetch(`${API}/pets/${petId}/addmedications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Medication attached with date:", data))
      .catch((error) => console.error("Error attaching medication:", error));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Dropdown options={options} onChange={handleMedicationChange} />
        <input type="date" onChange={handleDateChange} value={medicationDate} />
        <StyledButton type="submit">Submit</StyledButton>
      </form>
    </div>
  );
};

export default AddPetLog;
