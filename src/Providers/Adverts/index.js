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

  const getAdverts = () => {
    api
      .get("/adverts", {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((response) => {
        setAdverts(response.data);
      });
  };

  const postAdverts = (data) => {
    api
      .post("/adverts", data, {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((response) => console.log(response))
      .then((_) => getAdverts())
      .catch((err) => console.log(err));
  };

  const deletAdverts = (id) => {
    api
      .delete(`/adverts/${id}`, {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((response) => console.log(response))
      .then((_) => getAdverts())
      .catch((err) => console.log(err));
  };

  //   useEffect(() => {
  //     getAdverts();
  //   }, []);

  return (
    <AdvertsToken.Provider
      value={{ adverts, getAdverts, postAdverts, deletAdverts }}
    >
      {children}
    </AdvertsToken.Provider>
  );
};

export const useAdverts = () => useContext(AdvertsToken);
