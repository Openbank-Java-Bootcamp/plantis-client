/* import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React from 'react'

const API_URL = "http://localhost:5005";



 function EditPlant() {
    const [notes, setNotes] = useState("");

    const { plantId } = useParams(); 

    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("authToken");
        // <== ADD
        axios
          .get(`${API_URL}/api/plants/favourite/${plantId}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          })
          .then((response) => {
            const onePlant = response.data;
        setNotes(onePlant.notes);
     
      })
      .catch((error) => console.log(error));
  }, [plantId]);

  const handleFormSubmit = (e) => {
  
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");

    const requestBody = { notes };

    axios
      .put(`${API_URL}/api/favourite/${plantId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
      
        navigate("/myplants");
      });
  };
  return (
    <div>EditPlant</div>
  )
}
export default EditPlant; */