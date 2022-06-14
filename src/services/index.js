import axios from "axios";

const API_URL = "http://localhost:5005";

export function getPlants() {
  return axios
    .get(`${API_URL}/api/generalplants`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function getPlantsById(id) {

    return axios
      .get(`${API_URL}/api/generalplants/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error));
  }


  export function getPlantsByUserId(userId, plantId) {

    return axios
      .get(`${API_URL}/api/${userId}/favorite/${plantId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error));
  }
