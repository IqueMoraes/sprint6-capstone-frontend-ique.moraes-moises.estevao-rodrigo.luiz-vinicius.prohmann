import { Link } from "react-router-dom";
import { BoxDevs } from "./style";

import { FaGithub, FaLinkedin } from "react-icons/fa";

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
          <Link onClick={handlerGithub}>
            <FaGithub size={30} style={{ fill: "#5f4d93" }} />
          </Link>
        </li>

        <li>
          <Link onClick={handlerLinkedin}>
            <FaLinkedin size={30} style={{ fill: "#5f4d93" }} />
          </Link>
        </li>
      </ul>
    </BoxDevs>
  );
};

export default CardDevs;
