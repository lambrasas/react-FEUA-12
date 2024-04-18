import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../components/DefaultApi/API";
import StyledButton from "../components/styles/StyledButton";
import Dropdown from "../components/Inputs/Dropdown";
import { Link } from "react-router-dom";
const PetDetails = () => {
  const { petId } = useParams();
  const [petDetails, setPetDetails] = useState(null);

  useEffect(() => {
    fetch(`${API}/pets/${petId}/medicationlogs`)
      .then((response) => response.json())
      .then((data) => setPetDetails(data))
      .catch((error) => console.error("Error fetching pet details:", error));
  }, [petId]);

  if (!petDetails) {
    return <div>Loading pet details...</div>;
  }
  const medicationEntries = petDetails.medicationLogs.map((log) => (
    <div key={log._id}>
      <h3>{log.medicationId.name}</h3>
      <div>
        <p>Common uses: </p>
        {log.medicationId.commonUses.map((use, index) => (
          <p key={index}>{use}</p>
        ))}
        <p>{log.date}</p>
      </div>
    </div>
  ));
  return (
    <div>
      <div>
        <h1>{petDetails.name}: Health Records</h1>
        <div>
          <StyledButton>
            <Link to={`/pets/${petId}/addMedication`}>Add medication</Link>
          </StyledButton>
          <StyledButton>
            <Link to={`/pets/${petId}/addLog`}>Add log</Link>
          </StyledButton>
          <div>{medicationEntries}</div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
