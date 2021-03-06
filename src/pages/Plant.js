import React from "react";
import { getPlantsById } from "../services/index";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import PlantCard from "../components/PlantCard";
import { getPlantsByFavourite } from "../services/index";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Plant = () => {
  const [plant, setPlant] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getPlant = async () => {
    const plant = await getPlantsById(id);

    setPlant(plant);
  };

  useEffect(() => {
    getPlant();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="title-plant-details">
      <br/>
        <h3>Here is more information about this plant!</h3>
        <br/>
        <br/>
        <p>
          If this plant is similar to the one you have at home, add it to your<br/>
          section My plants and keep track of all the needs that required.
        </p>
      </div>
      <div className="plant-card-main">
        <div className="plant-card">
          <PlantCard {...plant} />
        </div>
      </div>
      <div className="title-plant">
        <p></p>
      </div>
      <div className="button-container">
        <button
          className="button-add"
          onClick={() => getPlantsByFavourite(id, navigate)}
        >
          Add this plant to your profile!
        </button>
      </div>

      <Footer />
    </div>
  );
};
export default Plant;
