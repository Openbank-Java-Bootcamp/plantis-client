import React from "react";
import { deletePlant, deletePlantFromFavs } from "../services/index";
function MyPlantCard({
  image,
  name,
  id,
  description,
  lightRequirement,
  waterRequirement,
  notes,
}) {
  return (
    <div className="MyPlantCard">
      <img src={image} alt="" className="plant-images" />
      <p style={{ maxWidth: "400px" }}>{name} </p>
      <p>{description}</p>
      <p>Light requirement: {lightRequirement}</p>
      <p>Water requirement: {waterRequirement}</p>
      {/*    <form onSubmit={handleFormSubmit}> */}
      <p>Notes: {notes}</p>
      <button type="submit">Add a note</button>
      <button type="submit">Edit a note</button>
      <button onClick={() => deletePlant(id)}>Remove</button>
      {/*  </form> */}
    </div>
  );
}

export default MyPlantCard;
