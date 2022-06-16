import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; 
import GeneralPlantCard from "../components/GeneralPlantCard";
import Navbar from "../components/Navbar"; 
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function EditGeneralPlant(props) {
  const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [lightRequirement, setLightRequirement] = useState("");
    const [waterRequirement, setWaterRequirement] = useState("");
    
    const { isLoggedIn, user } = useContext(AuthContext);
    const [generalPlants, setGeneralPlants] = useState(null);
  
  const { id } = useParams(); 

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
 
    axios
      .get(`${API_URL}/api/generalplants/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        
        const onePlant = response.data;
        setImage(onePlant.image);
        setName(onePlant.name);
        setDescription(onePlant.description);
        setLightRequirement(onePlant.lightRequirement);
        setWaterRequirement(onePlant.waterRequirement);
       
      })
      .catch((error) => console.log(error));
  }, [id]);


  const handleFormSubmit = (e) => {

    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");

    const requestBody = { name, description, lightRequirement, waterRequirement };

    axios
      .put(`${API_URL}/api/generalplants/${id}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
      
        navigate("/generalplants/" + id);
      });
  };
  

  const deleteGeneralPlant = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/generalplants/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/generalplants");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Edit-general-plant">
      <Navbar />
      
      <h3>Edit Plant</h3>

      <form onSubmit={handleFormSubmit}>
      <label>Image:</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Light Requirement:</label>
        <input
          type="text"
          name="light requirement"
          value={lightRequirement}
          onChange={(e) => setLightRequirement(e.target.value)}
        />
        <label>Water Requirement:</label>
        <input
          type="text"
          name="water requirement"
          value={waterRequirement}
          onChange={(e) => setWaterRequirement(e.target.value)}
        />
        
       
        
        <button type="submit">Update Plant</button>
      </form>

      <button onClick={deleteGeneralPlant}>Delete Plant</button>

      {generalPlants &&
        generalPlants.generalPlants.map((editGeneralPlant) => <GeneralPlantCard key={editGeneralPlant.id} {...editGeneralPlant} />)}
    </div>
  );
}

export default EditGeneralPlant;