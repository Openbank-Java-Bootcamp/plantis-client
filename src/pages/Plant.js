import React from "react";
import {getPlantsById} from "../services/index"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GeneralPlantCard from "../components/GeneralPlantCard";

 const Plant = () => {
    const [plant, setPlant] = useState([]);
    const { id } = useParams();

    const getPlant = async () => {
      const plant = await getPlantsById(id);
  
      setPlant(plant);
    };
  
    useEffect(() => {
        getPlant();
    }, []);

 return (
    <div>MyPlant
    
    <GeneralPlantCard {...plant} />
    <button>Favoritos</button>
    </div>
 )
}
export default Plant;