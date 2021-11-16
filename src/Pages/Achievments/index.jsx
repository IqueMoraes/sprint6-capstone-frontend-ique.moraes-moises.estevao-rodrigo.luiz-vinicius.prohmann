import { useState } from "react";
import { AchievmentCard } from "../../Components/Achievments";
import { useAchievment } from "../../Providers/Achievment";
import { useAuthToken } from "../../Providers/AuthToken";

export const Achievments = () => {
  const { achievmentsList, AddAchievments, RemoveAchievments } =
    useAchievment();
  const { userProfile } = useAuthToken();
  const [showForm, setShowForm] = useState(false);
  const [achievmentInfo, setAchievmentInfo] = useState({});
  const userList = userProfile.achievments;
  console.log();

  const translateCategory = () => {
    const cat = achievmentInfo.category;
    if (cat === "cleaning") return "Limpeza";
    else if (cat === "cletricity") return "Elétrica";
    else if (cat === "hydraulic") return "Hidráulica";
    else if (cat === "bills") return "Despesas";
    else if (cat === "cooking") return "Cozinha";
    else if (cat === "maintenance") return "Manutenção";
  };

  const changeInput = () => {
    if (userList.includes(achievmentInfo)) {
      RemoveAchievments(achievmentInfo);
    } else {
      AddAchievments(achievmentInfo);
    }
  };

  return (
    <div>
      <div>
        <h2>Conquistas</h2>
        <h3>
          {userList.length}/
        </h3>
      </div>
      <div>
        <ul>
          {/* {achievmentsList.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setShowForm(true);
                setAchievmentInfo(item);
              }}
            >
              <AchievmentCard category={item.category} title={item.title} />
            </li>
          ))} */}
        </ul>
      </div>
      {showForm && (
        <div>
          <div>
            <h3>{achievmentInfo.title}</h3>
            <h4>Categoria: {translateCategory()}</h4>
            <h4>15 pontos</h4>
            <input
              type="checkbox"
              checked={userList.includes(achievmentInfo)}
              onChange={() => changeInput()}
            />
          </div>
        </div>
      )}
    </div>
  );
};
