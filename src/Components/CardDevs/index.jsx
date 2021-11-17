import { Link } from "react-router-dom";
import { BoxDevs } from "./style";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

const CardDevs = ({ image, name, devOffice, devLinkedin }) => {
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
          <Link to="#">
            <FaGithub size={30} style={{ fill: "#5f4d93" }} />
          </Link>
        </li>

        <li>
          <Link src={devLinkedin}>
            <FaLinkedin size={30} style={{ fill: "#5f4d93" }} />
          </Link>
        </li>
      </ul>
    </BoxDevs>
  );
};

export default CardDevs;
