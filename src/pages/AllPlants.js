import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import GeneralPlantCard from "../components/GeneralPlantCard";
import { getPlants } from "../services";
import Footer from "../components/Footer";
import { AuthContext } from "../context/auth.context";
import picture1 from "../images/picture1.JPG";
import picture2 from "../images/picture2.JPG";
import picture3 from "../images/picture3.JPG";
import picture4 from "../images/picture4.JPG";
import Search from "../components/Search";

function AllPlants() {
  const [generalPlants, setGeneralPlants] = useState([]);
  const { user } = useContext(AuthContext);
  const [updatePlants, setUpdatePlants] = useState(generalPlants);

  const filterPLantsList = (str) => {
    let filteredPLants;
    console.log("str", str);
    if (str === "") {
      filteredPLants = generalPlants;
    } else {
      filteredPLants = updatePlants.filter((eachPLants) => {
        return eachPLants.name.toLowerCase().includes(str.toLowerCase());
      });
    }
    setUpdatePlants(filteredPLants);
  };

  const getGeneralPlants = async () => {
    const plants = await getPlants();

    setGeneralPlants(plants);
  };

  useEffect(() => {
    getGeneralPlants();
  }, []);

  useEffect(() => {
    setUpdatePlants(generalPlants);
  }, [generalPlants]);

  return (
    <>
      <div className="general-plants-page">
        <Navbar />

        <br></br>
        <h1>
          Welcome, <span>{user && user.name}!</span>
        </h1>
        <br></br>
        <h2>#WeLovePlants</h2>
        <br></br>
        <div className="main-pictures-container">
          <img className="picture-main-page" alt="" src={picture1} />
          <img className="picture-main-page" alt="" src={picture2} />
          <img className="picture-main-page" alt="" src={picture3} />
          <img className="picture-main-page" alt="" src={picture4} />
        </div>
        <div className="text-second-section">
          <br></br>
          <h3>
            If you have a plant similar to the one from the list below click on
            it and check more details of how to take care of it.

          </h3>
          <br/>
          <Search filterPlants={filterPLantsList} />
        </div>
    
        {updatePlants.map((plant) => (
          <GeneralPlantCard key={plant.id} {...plant} />
        ))}
      </div>
      <Footer />
    </>
  );
}
export default AllPlants;
