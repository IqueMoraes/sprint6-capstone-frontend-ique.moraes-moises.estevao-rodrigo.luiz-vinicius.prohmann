import { createContext, useContext, useState } from "react";

import { toast } from "react-toastify";
import { api } from "../../Services";
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
        console.log("testando resposta dos anuncios", response.data);
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
      .then((response) => toast.success("Anúncio Criado"))
      .then((_) => getAdverts())
      .catch((err) => toast.error("Não foi possivel criar o Anuncio"));
  };

  const deletAdverts = (id) => {
    api
      .delete(`/adverts/${id}`, {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((response) => toast.error("Anúncio Apagado"))
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
