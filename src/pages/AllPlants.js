import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import GeneralPlantCard from "../components/GeneralPlantCard";
import { getPlants } from "../services";
import Footer from "../components/Footer";

function AllPlants() {
  const [generalPlants, setGeneralPlants] = useState([]);

  const getGeneralPlants = async () => {
    const plants = await getPlants();

    setGeneralPlants(plants);
  };

  useEffect(() => {
    getGeneralPlants();
  }, []);

  return (
    
    <div className="general-plants-page">
    <Navbar />
      <h1>AllPlants</h1>

     
      {generalPlants.map((plant) => (
        <GeneralPlantCard key={plant.id} {...plant} />
      ))}
      <Footer />
    </div>
  );
}
export default AllPlants;
