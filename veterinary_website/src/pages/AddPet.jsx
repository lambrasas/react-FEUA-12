import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../components/DefaultApi/API";
import StyledButton from "../components/styles/StyledButton";

const AddPet = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    ownerName: "",
    ownerEmail: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      birthDate: formData.birthDate
        ? new Date(formData.birthDate).toISOString()
        : "",
    };
    fetch(`${API}/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/pets");
      })
      .catch((error) => {
        console.error("Error adding pet:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Pet's name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="birthDate"
        placeholder="Birthdate"
        value={formData.birthDate}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="ownerName"
        placeholder="Owner's name"
        value={formData.ownerName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="ownerEmail"
        placeholder="Owner's email"
        value={formData.ownerEmail}
        onChange={handleChange}
        required
      />
      <StyledButton type="submit">Add Pet</StyledButton>
    </form>
  );
};

export default AddPet;
