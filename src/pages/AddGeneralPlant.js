import axios from "axios";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const API_URL = "http://localhost:5005";

function AddGeneralPlant(props) {
  const [onePlant, setOnePlant]=useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [lightRequirement, setLightRequirement] = useState("");
  const [waterRequirement, setWaterRequirement] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const body = { onePlant };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/generalplants`, body, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
   
        setOnePlant("");
        
      
      })
      .catch((error) => console.log(error));
  };


  return( 
  <div className="AddDiary">
  <Navbar />
      <h3>Add New Plant</h3>
  
      <form onSubmit={handleFormSubmit}>
      <label>Image:</label>
        <input
          type="text"
          name="name"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
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
        
       
        
        <button type="submit">Update Plant</button>
      </form>
      
      </div>
  )
}

export default AddGeneralPlant;