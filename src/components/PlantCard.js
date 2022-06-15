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
        <p className="title-plant-card" style={{ maxWidth: "400px" }}>{name} </p>
        <br></br>
        <div className="text-info-plant">
        <p>{description}</p>
        <p>Light requirement: {lightRequirement}</p>
        <p>Water requirement: {waterRequirement}</p>
        </div>
      </div>
  
  );
}

export default PlantCard;