/* import React from 'react'
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";



function AddPlants(props) {

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [lightRequirement, setLightRequirement] = useState("");
    const [waterRequirement, setWaterRequirement] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { image, name, description, lightRequirement,waterRequirement };
        const storedToken = localStorage.getItem("authToken");

        axios
        .post(`${API_URL}/api/getgeneralplants`, requestBody, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          // Reset the state
          setImage("");
          setName("");
          setDescription("");
          setLightRequirement("");
          setWaterRequirement("");
          
          props.refreshProjects();
        })
        .catch((error) => console.log(error));
    };

  return (
    <div>AddPlants</div>
  )
}
export default AddPlants; */