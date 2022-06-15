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
<div className="my-plant-card-main">
    <div className="My-Plant-Card">

      <img src={image} alt="" className="plant-images" />
      <br></br>
      <br></br>
      <p className="title-plant-card" style={{ maxWidth: "400px" }}>{name} </p>
      <br></br>
      <div className="text-info-my-plant">
      <div className="text-align"><p>{description}</p></div>
      
      <p>Light requirement: {lightRequirement}</p>
      <p>Water requirement: {waterRequirement}</p>
      </div>
      <br></br>
      <div className="form-note">
      <form onSubmit={handleFormSubmit} >
      
        <textarea className="textarea-notes" name="notes" value={writtenNote} onChange={handleNotes}placeholder="Enter some notes..." />
     <br></br> <br></br>
      <div>  <button className="save-note-button" type="submit">Save Note</button></div>
      </form>
</div>
      <button className="delete-plant-button" onClick={() => deletePlant(id, getFavouritePlant)}>
        Remove Plant
      </button>
      </div>
    </div>
  );
}

export default MyPlantCard;
