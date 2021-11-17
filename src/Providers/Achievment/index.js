import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

import { toast } from "react-toastify";
import { api } from "../../Services";

import { useUserProfile } from "../UserProfile";
import { useAuthToken } from "../AuthToken";

const AchievmentContext = createContext({});

export const AchievmentProvider = ({ children }) => {
  const [achievmentsList, setAchievmentsList] = useState([]);
  const { EditProfile } = useUserProfile();
  const { authToken, userProfile } = useAuthToken();

  const GetAchievments = () => {
    api
      .get("/achievment", {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((res) => {
        setAchievmentsList(res.data);
        console.log(res.data, "entrei no provider achivments");
      })
      .catch((_) => {
        console.log("Não foi possível carregar os emblemas das conquistas");
      });
  };

  useEffect(() => {
    GetAchievments();
    console.log("useEffect do provider ");
  }, []);

  console.log(achievmentsList, "lista do achievment no provider");

  const AddAchievments = (achievmentObject) => {
    const newAchievments = [...userProfile.achievments, achievmentObject];
    const newPoints = userProfile.points + 15;

    EditProfile(
      { achievments: newAchievments, points: newPoints },
      "Conquista adicionada! Você ganhou 15 pontos!"
    );
  };

  const RemoveAchievments = (achievmentObject) => {
    const actualAchievments = userProfile.achievments.filter(
      (item) => item.title !== achievmentObject.title
    );
    const newPoints = userProfile.points - 15;

    EditProfile(
      { achievments: actualAchievments, points: newPoints },
      "Conquista removida!"
    );
  };

  return (
    <AchievmentContext.Provider
      value={{ achievmentsList, AddAchievments, RemoveAchievments, GetAchievments }}
    >
      {children}
    </AchievmentContext.Provider>
  );
};

export const useAchievment = () => useContext(AchievmentContext);
