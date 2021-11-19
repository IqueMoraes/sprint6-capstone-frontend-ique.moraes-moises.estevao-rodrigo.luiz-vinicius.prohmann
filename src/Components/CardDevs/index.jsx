import { BoxDevs } from "./style";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Box } from "@chakra-ui/layout";

const CardDevs = ({ image, name, devOffice, devLinkedin, devGithub }) => {
  const handlerLinkedin = () => {
    window.location.href = devLinkedin;
  };

  const handlerGithub = () => {
    window.location.href = devGithub;
  };

  return (
    <BoxDevs>
      <div className="BoxImage">
        <img src={image} alt={name} />
      </div>

      <div>
        <h3>{name}</h3>
        <h4>{devOffice}</h4>
      </div>

      <ul className="SocialBox">
        <li>
          <Box cursor="pointer" onClick={handlerGithub}>
            <FaGithub size={30} style={{ fill: "#5f4d93" }} />
          </Box>
        </li>

        <li>
          <Box cursor="pointer" onClick={handlerLinkedin}>
            <FaLinkedin size={30} style={{ fill: "#5f4d93" }} />
          </Box>
        </li>
      </ul>
    </BoxDevs>
  );
};

export default CardDevs;
