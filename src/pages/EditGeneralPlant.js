import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; 
import GeneralPlantCard from "../components/GeneralPlantCard";
import Navbar from "../components/Navbar"; 
import { AuthContext } from "../context/auth.context";
import video from '../images/video.mp4'

const API_URL = "http://localhost:5005";

function EditGeneralPlant(props) {
  const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [lightRequirement, setLightRequirement] = useState("");
    const [waterRequirement, setWaterRequirement] = useState("");
    
    const { isLoggedIn, user } = useContext(AuthContext);
    const [generalPlants, setGeneralPlants] = useState(null);

    const onFormChange = (e) => {
      console.log("file to upload:", e.target.files[0]);
      let file = e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = _handleReaderLoaded.bind(this);
  
        reader.readAsBinaryString(file);
      }
    };
  
    const _handleReaderLoaded = (readerEvt) => {
      let binaryString = readerEvt.target.result;
      setImage(btoa(binaryString));
    };
  
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

    const requestBody = {image, name, description, lightRequirement, waterRequirement };

    axios
      .put(`${API_URL}/api/generalplants/${id}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
      
        navigate("/generalplants/");
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
      
      

      <form className="formtoadd" onSubmit={handleFormSubmit} onChange={(e) => onFormChange(e)}>
      <h1>Edit or delete a plant!</h1>
      <div className="section-add">
      <label>Image:
      <input type="file" name="image" id="file" accept=".jpeg, .png, .jpg" />
      </label>
      </div>
      <div className="section-add">
      <label>Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </label>
        </div>
        <div className="section-add">
        <label>Description:
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        </label>
        </div>
        <div className="section-add">
        <label>Light Requirement:
        <input
          type="text"
          name="light requirement"
          value={lightRequirement}
          onChange={(e) => setLightRequirement(e.target.value)}
        />
        </label>
        </div>
        <div className="section-add">
        <label>Water Requirement:
        <input
          type="text"
          name="water requirement"
          value={waterRequirement}
          onChange={(e) => setWaterRequirement(e.target.value)}
        />
        </label>
        </div>
        <br></br>
        <button className="update-plant-button" type="submit">Update Plant</button>
        <br></br>
        <button className="delete-plant-button" onClick={deleteGeneralPlant}>Delete Plant</button>
      </form>

      

      {generalPlants &&
        generalPlants.generalPlants.map((editGeneralPlant) => <GeneralPlantCard key={editGeneralPlant.id} {...editGeneralPlant} />)}
    
        <video autoPlay loop id="video_background" preload="auto" muted >
   <source src={video} type="video/mp4" />
 </video>
    </div>
  );
}

export default EditGeneralPlant;