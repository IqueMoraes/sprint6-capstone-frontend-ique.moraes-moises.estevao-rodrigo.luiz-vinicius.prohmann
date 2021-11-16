import { useState } from "react";
import {
  FaTools,
  FaBroom,
  FaTint,
  FaUtensils,
  FaBolt,
  FaMoneyBillWave,
} from "react-icons/fa";
import achievmentFront from "../../assets/images/achievmentFront.png";

export const AchievmentCard = ({ category, title }) => {
  const [frontFace, setFrontFace] = useState(true);
  const iconsImage = [
    FaTools,
    FaBroom,
    FaTint,
    FaUtensils,
    FaBolt,
    FaMoneyBillWave,
  ];
  const categories = [
    "maintence",
    "cleaning",
    "hydraulic",
    "cooking",
    "eletric",
    "bills",
  ];

  const findIcon = (findCategory) => {
    const index = categories.findIndex((item) => item === findCategory);
    return iconsImage[index];
  };

  return (
    <div
      onMouseEnter={() => setFrontFace(false)}
      onMouseLeave={() => setFrontFace(true)}
    >
      {frontFace ? (
        <figure style={{ position: "relative", cursor:"pointer" }}>
          <img
            src={achievmentFront}
            alt="emblema de conquista"
            style={{ width: "100px", height:"150px" }}
          />
          <FaTools
            style={{
              position: "absolute",
              top: "30px",
              left: "38px",
              width: "40px",
              height: "40px",
            }}
          />
        </figure>
      ) : (
        <h3>{title}</h3>
      )}
    </div>
  );
};
