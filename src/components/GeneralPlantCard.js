import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function GeneralPlantCard({
  image,
  name,
  id,
}) {
  return (
    
    <div className="">
    <section className="container-list-all-plants">
    
    <div className="listplant">
    <Link to={`/plants/${id}`}>
      <div className="plantcard-1">
      
        <img src={image} alt="" className="plant-images"/>
        <p className="name-plant" style={{ maxWidth: "400px" }}>{name} </p>
     
      </div>
    </Link>
    
    </div>
   
    </section>
    </div>
    
  );
}

export default GeneralPlantCard;
