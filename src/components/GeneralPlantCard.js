import React from 'react'
import { Link } from "react-router-dom";

 function GeneralPlantCard({ image, name, id,description, lightRequirement, waterRequirement }) {
  return (
    <div className="PlantCard">
    <Link to={`/generalplants/${id}`}>
        
      </Link>
      <h3>{image}</h3>
      <p style={{ maxWidth: "400px" }}>{name} </p>
      <p>{description}</p>
      <p>Light requirement: {lightRequirement}</p>
      <p>Water requirement: {waterRequirement}</p>
       
        
        <Link to={`/plant/${id}`}>
        <button>Save</button>
              </Link>
    
    </div>
  )
}


export default GeneralPlantCard;