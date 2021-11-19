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
import achievmentBack from "../../assets/images/achievment-back.svg";
import { Box } from "@chakra-ui/react";

export const AchievmentCard = ({ category, title, onClick, ...rest }) => {
  const [frontFace, setFrontFace] = useState(true);

  return (
    <Box
      w="100px"
      minWidth="100px"
      h="124px"
      color="#000000ad"
      bg={achievmentFront}
      margin="0 20px 20px 0"
      onMouseEnter={() => setFrontFace(false)}
      onMouseLeave={() => setFrontFace(true)}
    >
      {frontFace ? (
        <figure style={{ position: "relative", cursor: "pointer" }}>
          <img
            src={achievmentFront}
            alt="emblema de conquista"
            style={{ width: "100px", height: "124px" }}
          />
          {category === "maintenance" ? (
            <FaTools
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                height: "40px",
                width: "40px",
              }}
            />
          ) : category === "cleaning" ? (
            <FaBroom
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                height: "40px",
                width: "40px",
              }}
            />
          ) : category === "hydraulic" ? (
            <FaTint
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                height: "40px",
                width: "40px",
              }}
            />
          ) : category === "cooking" ? (
            <FaUtensils
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                height: "40px",
                width: "40px",
              }}
            />
          ) : category === "eletricity" ? (
            <FaBolt
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                height: "40px",
                width: "40px",
              }}
            />
          ) : (
            <FaMoneyBillWave
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                height: "40px",
                width: "40px",
              }}
            />
          )}
        </figure>
      ) : (
        <figure
          onClick={() => onClick()}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <img
            src={achievmentBack}
            alt="título da conquista"
            style={{ width: "100px", height: "124px" }}
          />
          <h3
            style={{
              textAlign: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            {title}
          </h3>
        </figure>
      )}
    </Box>
  );
};
