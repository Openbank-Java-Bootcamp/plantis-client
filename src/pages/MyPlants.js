import { useContext } from "react";
import { getPlantsByUserId } from "../services/index";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MyPlantCard from "../components/MyPlantCard";
import { AuthContext } from "../context/auth.context";

const MyPlant = () => {
 
  const [favouritePlant, setFavouritePlant] = useState([]);
  const {user } = useContext(AuthContext);
  const { userId } = useParams();

  const getFavouritePlant = async () => {
    const favouritePlant = await getPlantsByUserId(userId);

    setFavouritePlant(favouritePlant);
  };

  useEffect(() => {
    getFavouritePlant();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="title-my-plants">
      <br></br>
      <p> <span>{user && user.name}, here you can check your list of plants and add some notes about them.</span></p>
      </div>
      <div className="container-my-plants">
      {favouritePlant.map((favouritePlant) => (
        <MyPlantCard
          getFavouritePlant={getFavouritePlant}
          {...favouritePlant}
          
        />
        
      ))}
      </div>
      <Footer />
    </div>
  );
};

export default MyPlant;
