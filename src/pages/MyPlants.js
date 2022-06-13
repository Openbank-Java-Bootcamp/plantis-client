import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

const API_URL = "http://localhost:5005";

 function MyPlants() {

    const [myPlant, setMyPlant] = useState();
    const { id } = useParams();

    const getMyPlant = () => {
     
        const storedToken = localStorage.getItem("authToken");



    axios
    .get(`${API_URL}/api/plant`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => getMyPlant(response.data))
    .catch((error) => console.log(error));
    };



  return (
    <div>MyPlants
    {myPlant && (
        <>
          {<img src={myPlant.image} alt="image_plant" />} 

          <h1>{myPlant.name}</h1>
          <h3>{myPlant.description}</h3>
          <h3>{myPlant.lightPreference}</h3>
          <p>{myPlant.waterRequirement}</p>
          <p>{myPlant.notes}</p>
         
        </>
      )}
    
    
    </div>
  )
}
export default MyPlants;