import axios from "axios";
import React, { useState } from "react";

const API_URL = "http://localhost:5005";

function AddGeneralPlant(props) {
  const [onePlant, setOnePlant]=useState("");


  const handleSubmit = (e) => {
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
      <h3>Add New Diary</h3>
  
      <form onSubmit={handleSubmit}>

        <label></label>
        <input
          type="text"
          name="generalplants"
          onChange={(e) => setOnePlant(e.target.value)}
          value={onePlant}
        />

        <button type="submit">Submit</button>
      </form>
      </div>
  )
}

export default AddGeneralPlant;