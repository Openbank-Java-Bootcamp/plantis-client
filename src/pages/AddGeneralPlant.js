import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import video from "../images/video.mp4";
const API_URL = "http://localhost:5005";

function AddGeneralPlant(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [lightRequirement, setLightRequirement] = useState("");
  const [waterRequirement, setWaterRequirement] = useState("");
  const navigate = useNavigate();
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      image,
      description,
      lightRequirement,
      waterRequirement,
    };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/generalplants`, body, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setName("");
        setImage("");
        setDescription("");
        setLightRequirement("");
        setWaterRequirement("");
        navigate("/generalplants/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar />

      <br />

      <br />

      <form
        className="formtoadd"
        onSubmit={handleFormSubmit}
        onChange={(e) => onFormChange(e)}
      >
        <h1>Let's add new plants!</h1>
        <br />
        <br />

        <div className="section-add">
          <label>
            Image:
            <input
              type="file"
              name="image"
              id="file"
              accept=".jpeg, .png, .jpg"
            />
          </label>
        </div>

        <div className="section-add">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <div className="section-add">
          <label>
            Description:
            <input
              className="form-input"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>

        <div className="section-add">
          <label>
            Light Requirement:
            <input
              type="text"
              name="light requirement"
              value={lightRequirement}
              onChange={(e) => setLightRequirement(e.target.value)}
            />
          </label>
        </div>
        <div className="section-add">
          <label>
            Water Requirement:
            <input
              type="text"
              name="water requirement"
              value={waterRequirement}
              onChange={(e) => setWaterRequirement(e.target.value)}
            />
          </label>
        </div>
        <br></br>
        <button className="add-plant-button" type="submit">
          Add Plant
        </button>
      </form>
      <video autoPlay loop id="video_background" preload="auto" muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default AddGeneralPlant;
