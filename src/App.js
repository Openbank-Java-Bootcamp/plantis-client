import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import IsAnon from "./components/IsAnon";
import Allplants from "./pages/AllPlants";
import IsPrivate from "./components/IsPrivate";
import LogOutPage from "./pages/LogOutPage";
import MyPlants from "./pages/MyPlants";
import Plant from "./pages/Plant";
import IsLoggedIn from "./components/IsLoggedIn";

function App() {
  return (
    <div className="App">
      <Navbar />
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
          path="/plant/:id"
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
          path="/logout"
          element={
            <IsAnon>
              <LogOutPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
