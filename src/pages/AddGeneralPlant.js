import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const API_URL = "http://localhost:5005";

function AddGeneralPlant(props) {
 
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [lightRequirement, setLightRequirement] = useState("");
  const [waterRequirement, setWaterRequirement] = useState("");

  const onFormChange = (e) => {
    console.log("file to upload:", e.target.files[0]);
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  };

  const _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    setImage(btoa(binaryString));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      image,
      description,
      lightRequirement,
      waterRequirement,
    };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/generalplants`, body, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setName("");
        setImage("");
        setDescription("");
        setLightRequirement("");
        setWaterRequirement("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Add-Plant-Form">
      <Navbar />
      <h3>Add New Plant</h3>

      <form onSubmit={handleFormSubmit} onChange={(e) => onFormChange(e)}>
        <label>Image:</label>
        <input type="file" name="image" id="file" accept=".jpeg, .png, .jpg" />
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Light Requirement:</label>
        <input
          type="text"
          name="light requirement"
          value={lightRequirement}
          onChange={(e) => setLightRequirement(e.target.value)}
        />
        <label>Water Requirement:</label>
        <input
          type="text"
          name="water requirement"
          value={waterRequirement}
          onChange={(e) => setWaterRequirement(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default AddGeneralPlant;
