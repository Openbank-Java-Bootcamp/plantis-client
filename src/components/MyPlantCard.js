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
      <p style={{ maxWidth: "400px" }}>{name} </p>
      <p>{description}</p>
      <p>Light requirement: {lightRequirement}</p>
      <p>Water requirement: {waterRequirement}</p>

      {/*  <p>Notes: {notes}</p> */}
      {/* <form>
        <input type={textArea} value={notes} />>
        <button type="submit">Edit a note</button>
      </form> */}
      <form onSubmit={handleFormSubmit}>
        <textarea name="notes" value={writtenNote} onChange={handleNotes} />
        <button type="submit">Save Note</button>
      </form>

      <button onClick={() => deletePlant(id, getFavouritePlant)}>
        Remove Plant
      </button>
    </div>
  );
}

export default MyPlantCard;
