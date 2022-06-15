import React, { useState } from "react";
import { deletePlant, updateNotes } from "../services/index";

function MyPlantCard({
  image,
  name,
  id,
  description,
  lightRequirement,
  waterRequirement,
  notes,
  getFavouritePlant,
}) {
  const [writtenNote, setWrittenNote] = useState(notes);

  const handleNotes = (e) => setWrittenNote(e.target.value);

  const handleFormSubmit = (e) => {
    // <== ADD
    e.preventDefault();
    updateNotes(id, writtenNote);
  };

  return (
    <div className="MyPlantCard">

      <img src={image} alt="" className="plant-images" />
      <p className="title-plant-card" style={{ maxWidth: "400px" }}>{name} </p>
      <br></br>
      <div className="text-info-plant">
      <p>{description}</p>
      <p>Light requirement: {lightRequirement}</p>
      <p>Water requirement: {waterRequirement}</p>
      </div>
      <br></br>
      <div className="form-note">
      <form onSubmit={handleFormSubmit}>
        <textarea className="textarea-notes" name="notes" value={writtenNote} onChange={handleNotes} />
        
      </form>
</div>
      <button className="delete-plant-button" onClick={() => deletePlant(id, getFavouritePlant)}>
        Remove Plant
      </button>
    </div>
  );
}

export default MyPlantCard;
