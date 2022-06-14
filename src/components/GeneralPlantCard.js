import React from "react";
import { Link } from "react-router-dom";

function GeneralPlantCard({
  image,
  name,
  id,
  description,
  lightRequirement,
  waterRequirement,
}) {
  return (
    <Link to={`/plant/${id}`}>
      <div className="PlantCard">
      
        <img src={image} alt="" className="plant-images"/>
        <p style={{ maxWidth: "400px" }}>{name} </p>
        <p>{description}</p>
        <p>Light requirement: {lightRequirement}</p>
        <p>Water requirement: {waterRequirement}</p>
      </div>
    </Link>
  );
}

export default GeneralPlantCard;
