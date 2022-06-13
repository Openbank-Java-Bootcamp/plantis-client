import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import AddPlants from "../components/AddPlants"
import GeneralPlantCard from "../components/GeneralPlantCard"


const API_URL = "http://localhost:5005";


 function AllPlants() {

    const [generalPlants, setGeneralPlants] = useState([]);

    const getGeneralPlants = () => {
     
        const storedToken = localStorage.getItem("authToken");
// Send the token through the request "Authorization" Headers
axios
.get(`${API_URL}/api/generalplants`, {
  headers: { Authorization: `Bearer ${storedToken}` },
})
.then((response) => setGeneralPlants(response.data))
.catch((error) => console.log(error));
};


useEffect(() => {
    getGeneralPlants();
  }, []);


  return (
     <div className="general-plants-page">
     <h1>AllPlants</h1>
     
    {/*  <AddPlants refreshProjects={getGeneralPlants} /> */}
    {generalPlants.map((plant) => (
        <GeneralPlantCard key={plant.id} {...plant} />
      ))}
     </div>
  )
}
export default AllPlants;