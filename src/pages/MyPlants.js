import React from "react";
import {getPlantsByUserId} from "../services/index"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GeneralPlantCard from "../components/GeneralPlantCard";

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
    <div> My Plants
    
    <GeneralPlantCard {...MyPlant} />
   
    </div>
 )
}
export default MyPlant;