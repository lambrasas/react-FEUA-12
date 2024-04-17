import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../components/DefaultApi/API";
import styles from "../components/styles/Pets.module.scss";
import classNames from "classnames";
import StyledButton from "../components/styles/StyledButton";
const Pets = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/pets`)
      .then((resp) => resp.json())
      .then((response) => {
        if (Array.isArray(response)) {
          setPets(response);
        } else {
          console.error("Data is not an array", response);
          setPets([]);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setPets([]);
      });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <h1>Pet List</h1>
        <StyledButton> Add Pet</StyledButton>
      </div>
      <div className={styles.petCardsContainer}>
        {pets.map((pet) => (
          <div
            className={styles.petCard}
            key={pet._id}
            style={{ display: "flex", gap: "10px" }}
          >
            <div className={styles.petName}>{pet.name}</div>
            <div>{pet.birthDate || "Birthdate not available"}</div>
            <div>{pet.ownerEmail}</div>
            <div className={styles.buttonsDiv}>
              <StyledButton onClick={() => navigate(`/pets/${pet._id}`)}>
                VIEW LOG
              </StyledButton>

              <StyledButton $secondary>DELETE</StyledButton>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pets;
