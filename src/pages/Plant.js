import React from "react";
import {getPlantsById} from "../services/index"
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PlantCard from "../components/PlantCard";
import {getPlantsByFavourite} from "../services/index"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

<Navbar />
    <PlantCard {...plant} />
    <p>Add this plant to your profile</p>
    <Link to = '/myplants'><button onClick = {() => getPlantsByFavourite(id)}>Add</button></Link>
    <Footer />
    </div>
 )
}
export default Plant;