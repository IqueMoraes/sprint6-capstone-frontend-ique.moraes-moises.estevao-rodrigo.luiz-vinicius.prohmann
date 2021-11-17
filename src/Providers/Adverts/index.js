import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import { api } from "../../Services";
import { useAchievment } from "../Achievment";
import { useAuthToken } from "../AuthToken";

const AdvertsToken = createContext({});

export const AdvertsProvider = ({ children }) => {
  const { authToken, userId } = useAuthToken();
  const [adverts, setAdverts] = useState([]);
  const [myAdverts, setMyAdverts] = useState([]);

  const getAdverts = () => {
    api
      .get("/adverts", {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((response) => {
        setAdverts(response.data);
      });
  };

  const getMyAdverts = () => {
    api
      .get(`/adverts?userId=${userId}`, {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((response) => {
        setMyAdverts(response.data);
      });
  };

  const postAdverts = (data) => {
    api
      .post("/adverts", data, {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((response) => toast.success("Atividade Criada"))
      .then((_) => getAdverts())
      .catch((err) => console.log(err));
  };

  const deletAdverts = (id) => {
    api
      .delete(`/adverts/${id}`, {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((response) => toast.success("Atividade Apagada"))
      .then((_) => getAdverts())
      .catch((err) => console.log(err));
  };

  return (
    <AdvertsToken.Provider
      value={{
        adverts,
        getAdverts,
        postAdverts,
        deletAdverts,
        getMyAdverts,
        myAdverts,
      }}
    >
      {children}
    </AdvertsToken.Provider>
  );
};

export const useAdverts = () => useContext(AdvertsToken);
