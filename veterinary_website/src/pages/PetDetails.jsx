import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../components/DefaultApi/API";
import StyledButton from "../components/styles/StyledButton";
import { Link } from "react-router-dom";
import styles from "../components/styles/PetDetails.module.scss";
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
  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    return date.toISOString().split("T")[0];
  };
  const medicationEntries = petDetails.medicationLogs.map((log) => (
    <div className={styles.PetMedicationCard} key={log._id}>
      <h2 className={styles.medicationName}>{log.medicationId.name}</h2>
      <div>
        <h3>Common uses: </h3>
        {log.medicationId.commonUses.map((use, index) => (
          <p className={styles.commonUse} key={index}>
            {use}
          </p>
        ))}
        <div className={styles.dateWrapper}>
          <p>{formatDate(log.date)}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div>
        <h1>{petDetails.name}: Health Records</h1>
        <div>
          <div className={styles.detailsPetButtonContainer}>
            <StyledButton>
              <Link className={styles.link} to={`/pets/${petId}/addMedication`}>
                Add Medication{" "}
              </Link>
            </StyledButton>
            <StyledButton>
              <Link className={styles.link} to={`/pets/${petId}/addLog`}>
                Add Log
              </Link>
            </StyledButton>
          </div>

          <div className={styles.medicationEntriesContainer}>
            {medicationEntries}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
