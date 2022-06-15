import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import GeneralPlantCard from "../components/GeneralPlantCard";
import { getPlants } from "../services";
import Footer from "../components/Footer";
import { AuthContext } from "../context/auth.context";


function AllPlants() {
  const [generalPlants, setGeneralPlants] = useState([]);
  const {user } = useContext(AuthContext);
  const getGeneralPlants = async () => {
    const plants = await getPlants();

    setGeneralPlants(plants);
  };

  useEffect(() => {
    getGeneralPlants();
  }, []);

  return (
    <>
    <div className="general-plants-page">
    <Navbar />
      <h1>Welcome, <span>{user && user.name}!</span></h1>

     
      {generalPlants.map((plant) => (
        <GeneralPlantCard key={plant.id} {...plant} />
      ))}
    </div>
    <Footer />
    </>
  );
}
export default AllPlants;
