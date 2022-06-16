import "./App.css";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import IsAnon from "./components/IsAnon";
import Allplants from "./pages/AllPlants";
import IsPrivate from "./components/IsPrivate";

import MyPlants from "./pages/MyPlants";
import Plant from "./pages/Plant";
import IsLoggedIn from "./components/IsLoggedIn";
import ErrorPage from "./components/ErrorPage";
import AddGeneralPlant from "./pages/AddGeneralPlant";
import IsAdmin from "./components/IsAdmin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <IsLoggedIn>
              <HomePage />
            </IsLoggedIn>
          }
        />

        <Route
          path="/generalplants"
          element={
            <IsPrivate>
              <Allplants />
            </IsPrivate>
          }
        />
        <Route
          path="/plants/:id"
          element={
            <IsPrivate>
              <Plant />
            </IsPrivate>
          }
        />

        <Route
          path="/myplants"
          element={
            <IsPrivate>
              <MyPlants />
            </IsPrivate>
          }
        />
        <Route
          path="*"
          element={
            <IsPrivate>
              <ErrorPage />
            </IsPrivate>
          }
        />
        <Route
          path="/addgeneralplants"
          element={
            <IsAdmin>
              <AddGeneralPlant />
            </IsAdmin>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/"
          element={
            <IsAnon>
              <HomePage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
