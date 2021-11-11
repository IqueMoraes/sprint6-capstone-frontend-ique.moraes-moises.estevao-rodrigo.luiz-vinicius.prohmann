import { useHistory, Link } from "react-router-dom";

export const NavigationMenu = () => {
  return (
    <>
      <ul  style={{marginBottom:"30px"}}>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/routines">Rotinas</Link>
        </li>
        <li>
          <Link to="/forum">Fórum</Link>
        </li>
        <li>
          <Link to="/adverts">Anúncios</Link>
        </li>
        <li>
          <Link to="/members">Membros</Link>
        </li>
        <li>
          <Link to="/achievments">Conquistas</Link>
        </li>
      </ul>
    </>
  );
};
