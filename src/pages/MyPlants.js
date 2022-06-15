import React from "react";
import { getPlantsByUserId } from "../services/index";
/* import { getPlantsByFavourite } from "../services/index"; */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MyPlantCard from "../components/MyPlantCard";


const MyPlant = () => {
  const [favouritePlant, setFavouritePlant] = useState([]);
  const { userId } = useParams();

  const getFavouritePlant = async () => {
    const favouritePlant = await getPlantsByUserId(userId);

    setFavouritePlant(favouritePlant);
  };

  useEffect(() => {
    getFavouritePlant();
  }, []);

  

  return (
    <div>
      <Navbar />
      My Plants
      {favouritePlant.map((favouritePlant) => ( 
      <MyPlantCard  {...favouritePlant} />
      
      ))}

      <Footer />
    </div>
  )
}
  
export default MyPlant;
