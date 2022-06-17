import React from "react";
import sunny from "../images/sunny.png";
import water from "../images/water.png";
import plantpot from "../images/plant-pot.png";

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
      <img
        src={`data:image/png;base64,${image}`}
        alt=""
        className="plant-images"
      />
      <br></br>
      <br></br>
      <p className="title-plant-card" style={{ maxWidth: "400px" }}>
        {name} <img className="sunny-icon" src={plantpot} alt="" />
      </p>
      <br></br>
      <div className="text-info-plant">
        <p>{description}</p>
        <p>
          <img className="sunny-icon" src={sunny} alt="" /> Light:{" "}
          {lightRequirement}
        </p>
        <p>
          <img className="sunny-icon" src={water} alt="" /> Water:{" "}
          {waterRequirement}
        </p>
      </div>
    </div>
  );
}

export default PlantCard;
