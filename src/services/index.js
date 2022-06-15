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

export function getPlantsByFavourite(plantId) {
  return axios
    .get(`${API_URL}/api/plants/favourite/${plantId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function getPlantsByUserId(userId) {
  return axios
    .get(
      `${API_URL}/api/plants`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      },
      { params: { userId: userId } }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
}

export function deletePlant(plantId) {
  return axios
    .delete(`${API_URL}/api/favourite/${plantId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function deletePlantFromFavs(plantId) {
  return axios
    .delete(`${API_URL}/api/favourite/${plantId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
}
