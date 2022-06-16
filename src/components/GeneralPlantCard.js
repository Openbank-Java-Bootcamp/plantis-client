import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function GeneralPlantCard({ image, name, id }) {
  const { user } = useContext(AuthContext);

  return (
    <div className="">
      <section className="container-list-all-plants">
        <div className="listplant">
          <Link to={`/plants/${id}`}>
            <div className="plantcard-1">
              <img
                src={`data:image/png;base64,${image}`}
                alt=""
                className="plant-images"
              />
              <p className="name-plant" style={{ maxWidth: "400px" }}>
                {name}{" "}
              </p>
            </div>
          </Link>
          {user.roleName === "ROLE_ADMIN" && (
            <a href={`/editgeneralplants/${id}`}>Edit plant</a>
          )}
        </div>
      </section>
    </div>
  );
}

export default GeneralPlantCard;
