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
        {/*   <h3>{image}</h3> */}
        <img src={image} alt="drive-image" />
        <p style={{ maxWidth: "400px" }}>{name} </p>
        <p>{description}</p>
        <p>Light requirement: {lightRequirement}</p>
        <p>Water requirement: {waterRequirement}</p>
      </div>
    </Link>
  );
}

export default GeneralPlantCard;
