import React from "react";

function PlantCard({
  image,
  name,
  id,
  description,
  lightRequirement,
  waterRequirement,
 
}) {
  return (
    
      <div className="MyPlantCard">
      
        <img src={image} alt="" className="plant-images"/>
        <p style={{ maxWidth: "400px" }}>{name} </p>
        <p>{description}</p>
        <p>Light requirement: {lightRequirement}</p>
        <p>Water requirement: {waterRequirement}</p>
        
      </div>
  
  );
}

export default PlantCard;