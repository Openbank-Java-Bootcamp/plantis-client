import React from "react";
import { useState, useEffect } from "react";
import AddPlants from "../components/AddPlants";
import GeneralPlantCard from "../components/GeneralPlantCard";
import { getPlants } from "../services";

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
      <h1>AllPlants</h1>

      {/*  <AddPlants refreshProjects={getGeneralPlants} /> */}
      {generalPlants.map((plant) => (
        <GeneralPlantCard key={plant.id} {...plant} />
      ))}
    </div>
  );
}
export default AllPlants;
