import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function GeneralPlantCard({
  image,
  name,
  id,
  description,
  lightRequirement,
  waterRequirement,
}) {
  return (
    
    <div>
    
    <Link to={`/plants/${id}`}>
      <div className="PlantCard">
      
        <img src={image} alt="" className="plant-images"/>
        <p style={{ maxWidth: "400px" }}>{name} </p>
       {/*  <p>{description}</p>
        <p>Light requirement: {lightRequirement}</p>
        <p>Water requirement: {waterRequirement}</p> */}
      </div>
    </Link>
    
    </div>
    
  );
}

export default GeneralPlantCard;
